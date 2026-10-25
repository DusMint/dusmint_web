"use client";

import React, { useState } from "react";
import {
  Text,
  Badge,
  Table,
  Group,
  Button,
  Paper,
  Box,
  Card,
  SimpleGrid,
  Modal,
} from "@mantine/core";

interface ClaimRecord {
  id: string;
  orderId: string;
  customer: string;
  shopName: string;
  issue: string;
  refundAmount: number;
  status: "Pending" | "Refunded" | "Rejected";
  timestamp: string;
}

const INITIAL_CLAIMS: ClaimRecord[] = [
  {
    id: "CLM-801",
    orderId: "DM-9082",
    customer: "Riddhi Banerjee",
    shopName: "Fresh Basket",
    issue: "2 damaged tomatoes in 1kg pack",
    refundAmount: 35,
    status: "Pending",
    timestamp: "25 min ago",
  },
  {
    id: "CLM-800",
    orderId: "DM-9071",
    customer: "Amitabh Chowdhury",
    shopName: "New Town Dairy",
    issue: "Milk packet leakage reported upon delivery",
    refundAmount: 68,
    status: "Refunded",
    timestamp: "2 hours ago",
  },
  {
    id: "CLM-799",
    orderId: "DM-9040",
    customer: "Sanjay Dutta",
    shopName: "Sharma Kirana Store",
    issue: "Received 500g salt instead of 1kg",
    refundAmount: 15,
    status: "Refunded",
    timestamp: "Yesterday",
  },
];

export default function AdminClaimsPage() {
  const [claims, setClaims] = useState<ClaimRecord[]>(INITIAL_CLAIMS);
  const [selectedClaim, setSelectedClaim] = useState<ClaimRecord | null>(null);

  const handleResolveClaim = (id: string, newStatus: ClaimRecord["status"]) => {
    setClaims((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );
    setSelectedClaim(null);
  };

  return (
    <Box>
      <Group justify="space-between" mb="lg">
        <div>
          <Text size="xl" fw={900} c="#121e17">
            Claims & Instant Refund Approvals
          </Text>
          <Text size="sm" c="dimmed">
            Manage customer quality tickets, damaged items and UPI instant chargebacks
          </Text>
        </div>
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 3 }} mb="lg">
        <Card padding="md" radius="md" withBorder>
          <Text size="xs" c="dimmed" fw={700}>
            OPEN CLAIMS
          </Text>
          <Text size="1.8rem" fw={900} c="#dc2626" mt="xs">
            {claims.filter((c) => c.status === "Pending").length}
          </Text>
          <Text size="xs" c="dimmed">
            Requires immediate resolution
          </Text>
        </Card>

        <Card padding="md" radius="md" withBorder>
          <Text size="xs" c="dimmed" fw={700}>
            REFUND RATE
          </Text>
          <Text size="1.8rem" fw={900} c="#0b5c38" mt="xs">
            0.42%
          </Text>
          <Text size="xs" c="teal" fw={600}>
            Industry standard: 1.8%
          </Text>
        </Card>

        <Card padding="md" radius="md" withBorder>
          <Text size="xs" c="dimmed" fw={700}>
            AVG RESOLUTION SPEED
          </Text>
          <Text size="1.8rem" fw={900} c="#2563eb" mt="xs">
            4.2 Mins
          </Text>
          <Text size="xs" c="dimmed">
            Direct to customer UPI
          </Text>
        </Card>
      </SimpleGrid>

      <Paper p="md" radius="md" withBorder style={{ backgroundColor: "#ffffff" }}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Claim ID</Table.Th>
              <Table.Th>Order Ref</Table.Th>
              <Table.Th>Customer</Table.Th>
              <Table.Th>Store</Table.Th>
              <Table.Th>Dispute Description</Table.Th>
              <Table.Th>Refund Value</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {claims.map((c) => (
              <Table.Tr key={c.id}>
                <Table.Td>
                  <Text size="xs" fw={700} c="dimmed">
                    {c.id}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" fw={800} c="#0b5c38">
                    {c.orderId}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{c.customer}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{c.shopName}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="xs">{c.issue}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" fw={800} c="#b91c1c">
                    ₹{c.refundAmount}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Badge
                    color={
                      c.status === "Refunded"
                        ? "teal"
                        : c.status === "Rejected"
                        ? "gray"
                        : "red"
                    }
                  >
                    {c.status}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Button
                    size="xs"
                    variant="light"
                    color={c.status === "Pending" ? "red" : "gray"}
                    onClick={() => setSelectedClaim(c)}
                  >
                    {c.status === "Pending" ? "Review Claim" : "View Details"}
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>

      {/* Claim Modal */}
      <Modal
        opened={!!selectedClaim}
        onClose={() => setSelectedClaim(null)}
        title={
          <Text fw={800} size="md">
            Review Customer Claim • {selectedClaim?.id}
          </Text>
        }
        radius="md"
      >
        {selectedClaim && (
          <Box>
            <Paper p="sm" withBorder mb="md" style={{ backgroundColor: "#fef2f2" }}>
              <Text size="sm" fw={700} c="#991b1b">
                Customer: {selectedClaim.customer} (Order: {selectedClaim.orderId})
              </Text>
              <Text size="xs" c="dimmed" mt="xs">
                Merchant Involved: {selectedClaim.shopName}
              </Text>
              <Text size="xs" mt="xs">
                Issue: {selectedClaim.issue}
              </Text>
              <Text size="sm" fw={800} mt="xs" c="#b91c1c">
                Requested Credit: ₹{selectedClaim.refundAmount}
              </Text>
            </Paper>

            {selectedClaim.status === "Pending" ? (
              <Group grow>
                <Button
                  color="green"
                  onClick={() => handleResolveClaim(selectedClaim.id, "Refunded")}
                >
                  ✓ Approve Instant UPI Refund
                </Button>
                <Button
                  color="gray"
                  variant="outline"
                  onClick={() => handleResolveClaim(selectedClaim.id, "Rejected")}
                >
                  Reject Claim
                </Button>
              </Group>
            ) : (
              <Button fullWidth onClick={() => setSelectedClaim(null)}>
                Close
              </Button>
            )}
          </Box>
        )}
      </Modal>
    </Box>
  );
}
