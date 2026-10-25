"use client";

import React, { useState } from "react";
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Container,
  Group,
  Badge,
  Alert,
  Select,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("ops.lead@dusmint.com");
  const [password, setPassword] = useState("••••••••••••");
  const [twoFactorCode, setTwoFactorCode] = useState("482910");
  const [role, setRole] = useState<string | null>("ops");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in email and password.");
      return;
    }
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      router.push("/admin");
    }, 600);
  };

  return (
    <Container size={440} my={60}>
      <Group justify="center" mb="xs">
        <Title order={2} fw={900} c="#0b5c38">
          dus<span style={{ color: "#10854d" }}>mint</span>
          <span style={{ color: "#ffc20e" }}>.admin</span>
        </Title>
      </Group>

      <Text c="dimmed" size="sm" ta="center" mb="lg">
        Secure Operations & Merchant Console Access
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" style={{ backgroundColor: "#ffffff" }}>
        <Badge color="red" variant="light" size="sm" mb="md" fullWidth>
          Restricted Internal Area • 2FA Mandatory
        </Badge>

        {error && (
          <Alert color="red" mb="md">
            {error}
          </Alert>
        )}

        <form onSubmit={handleLogin}>
          <TextInput
            label="Corporate Email"
            placeholder="you@dusmint.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            mb="md"
          />

          <PasswordInput
            label="Master Password"
            placeholder="Your secure password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            mb="md"
          />

          <TextInput
            label="2FA Authenticator Token (TOTP)"
            placeholder="6-digit code e.g. 482910"
            required
            maxLength={6}
            value={twoFactorCode}
            onChange={(e) => setTwoFactorCode(e.target.value)}
            mb="md"
          />

          <Select
            label="Access Role"
            value={role}
            onChange={setRole}
            data={[
              { value: "ops", label: "Operations & Dispatch Lead" },
              { value: "admin", label: "Super Admin (Full Access)" },
              { value: "finance", label: "Finance & Payouts Approver" },
              { value: "support", label: "Customer Concierge Support" },
            ]}
            mb="lg"
          />

          <Button type="submit" fullWidth color="green" loading={loading} mb="sm">
            Authenticate & Enter Console →
          </Button>

          <Button
            component={Link}
            href="/"
            variant="subtle"
            color="gray"
            size="xs"
            fullWidth
          >
            ← Return to Dusmint Intro Site
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
