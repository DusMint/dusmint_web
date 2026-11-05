import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, reason, confirmation, sourcePage } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 80) {
      return NextResponse.json(
        { error: "Full name must be between 2 and 80 characters." },
        { status: 400 }
      );
    }

    const cleanPhone = String(phone || "").trim().replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9." },
        { status: 400 }
      );
    }

    if (!reason || typeof reason !== "string" || reason.trim().length < 5 || reason.trim().length > 500) {
      return NextResponse.json(
        { error: "Reason for deletion must be between 5 and 500 characters." },
        { status: 400 }
      );
    }

    if (!confirmation) {
      return NextResponse.json(
        { error: "Please confirm that you understand the account deletion terms." },
        { status: 400 }
      );
    }

    // Generate Reference ID: DEL-YYYYMMDD-XXXX (e.g. DEL-20261105-7K2P)
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let randomCode = "";
    for (let i = 0; i < 4; i++) {
      randomCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const referenceId = `DEL-${dateStr}-${randomCode}`;

    const receivedAt = now.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "medium",
    }) + " IST";

    const subject = `Account deletion request: ${referenceId}`;
    const emailBody = `New account deletion request

Reference ID : ${referenceId}
Received at  : ${receivedAt}
Name         : ${name.trim()}
Phone        : +91 ${cleanPhone}
Reason       : ${reason.trim()}
Source page  : ${sourcePage || "/delete-account"}

Please call the number above to verify the person owns the account before
deleting anything.`;

    // Attempt email delivery if Resend API key is present
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Dusmint Security <noreply@dusmint.com>",
            to: ["team.dusmint@gmail.com"],
            subject,
            text: emailBody,
          }),
        });
      } catch (mailErr) {
        console.error("[AccountDeletion] Resend delivery error:", mailErr);
      }
    } else {
      // Server log audit
      console.log("==================================================");
      console.log(`[Account Deletion Notification to team.dusmint@gmail.com]`);
      console.log(`Subject: ${subject}`);
      console.log(emailBody);
      console.log("==================================================");
    }

    return NextResponse.json({
      success: true,
      referenceId,
    });
  } catch (err: any) {
    console.error("[AccountDeletion API] Unexpected error:", err);
    return NextResponse.json(
      {
        error: "We could not send your request. Please try again, or email us at team.dusmint@gmail.com.",
      },
      { status: 500 }
    );
  }
}
