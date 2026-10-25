"use client";

import React, { useState } from "react";
import {
  Text,
  Badge,
  Table,
  Group,
  Button,
  Paper,
  Modal,
  Box,
  SimpleGrid,
  Card,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";

interface VendorApplication {
  id: string;
  storeName: string;
  ownerName: string;
  phone: string;
  category: string;
  area: string;
  fssaiNumber: string;
  tradeLicense: string;
  status: "Pending" | "Approved" | "Rejected";
  submittedOn: string;
}

const INITIAL_VENDORS: VendorApplication[] = [
  {
    id: "VND-401",
    storeName: "Maa Tara Dairy & Sweets",
    ownerName: "Subhashis Paul",
    phone: "+91 98311 44520",
    category: "Dairy & Milk Products",
    area: "Salt Lake Sector II",
    fssaiNumber: "FSSAI-12824001099231 (Verified)",
    tradeLicense: "TL-WB-KOL-2024-8841",
    status: "Pending",
    submittedOn: "2 hours ago",
  },
  {
    id: "VND-402",
    storeName: "Green Valley Farm Organics",
    ownerName: "Ritwik Ghosh",
    phone: "+91 97488 22109",
    category: "Fresh Fruits & Vegetables",
    area: "New Town Action Area 1",
    fssaiNumber: "FSSAI-12824001088764 (Verified)",
    tradeLicense: "TL-WB-KOL-2024-9912",
    status: "Pending",
    submittedOn: "4 hours ago",
  },
  {
    id: "VND-403",
    storeName: "Dutta Mutton & Poultry",
    ownerName: "Pranab Dutta",
    phone: "+91 98305 66781",
    category: "Fresh Meat & Poultry",
    area: "Ballygunge Circular Rd",
    fssaiNumber: "FSSAI-12824001077421 (Pending Doc)",
    tradeLicense: "TL-WB-KOL-2023-1123",
    status: "Pending",
    submittedOn: "Yesterday",
  },
  {
    id: "VND-399",
    storeName: "Sharma Kirana Store",
    ownerName: "Ramesh Sharma",
    phone: "+91 98301 22410",
    category: "Groceries & Daily Staples",
    area: "Salt Lake Sector 1",
    fssaiNumber: "FSSAI-12823001055219 (Active)",
    tradeLicense: "TL-WB-KOL-2022-4411",
    status: "Approved",
    submittedOn: "3 days ago",
  },
];

export default function AdminVendorsPage() {
  const [vendors, setVendors] = useState<VendorApplication[]>(INITIAL_VENDORS);
  const [selectedVendor, setSelectedVendor] = useState<VendorApplication | null>(null);

  const handleStatusChange = (id: string, newStatus: VendorApplication["status"]) => {
    setVendors((prev) =>
      prev.map((v) => (v.id === id ? { ...v, status: newStatus } : v))
    );
    setSelectedVendor(null);
  };

  return (
    <Box>
      <Group justify="space-between" mb="lg">
        <div>
          <Text size="xl" fw={900} c="#121e17">
            Merchant Approvals & KYC Queue
          </Text>
          <Text size="sm" c="dimmed">
            Verify trade licenses, FSSAI certifications and payout UPIs for local stores
          </Text>
        </div>
      </Group>

      {/* Stats */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} mb="lg">
        <Card padding="md" radius="md" withBorder>
          <Text size="xs" c="dimmed" fw={700}>
            PENDING VERIFICATION
          </Text>
          <Text size="1.8rem" fw={900} c="#d97706" mt="xs">
            {vendors.filter((v) => v.status === "Pending").length}
          </Text>
          <Text size="xs" c="dimmed">
            Requires ops review
          </Text>
        </Card>

        <Card padding="md" radius="md" withBorder>
          <Text size="xs" c="dimmed" fw={700}>
            ACTIVE LIVE MERCHANTS
          </Text>
          <Text size="1.8rem" fw={900} c="#0b5c38" mt="xs">
            482
          </Text>
          <Text size="xs" c="teal" fw={600}>
            Across 9 Kolkata clusters
          </Text>
        </Card>

        <Card padding="md" radius="md" withBorder>
          <Text size="xs" c="dimmed" fw={700}>
            AVG ONBOARDING TIME
          </Text>
          <Text size="1.8rem" fw={900} c="#2563eb" mt="xs">
            18 Hours
          </Text>
          <Text size="xs" c="dimmed">
            Target: under 24 hrs
          </Text>
        </Card>
      </SimpleGrid>

      {/* Vendors Table */}
      <Paper p="md" radius="md" withBorder style={{ backgroundColor: "#ffffff" }}>
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>ID</Table.Th>
              <Table.Th>Store Name</Table.Th>
              <Table.Th>Owner & Mobile</Table.Th>
              <Table.Th>Category</Table.Th>
              <Table.Th>Area</Table.Th>
              <Table.Th>FSSAI Status</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {vendors.map((v) => (
              <Table.Tr key={v.id}>
                <Table.Td>
                  <Text size="xs" fw={700} c="dimmed">
                    {v.id}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" fw={800}>
                    {v.storeName}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{v.ownerName}</Text>
                  <Text size="xs" c="dimmed">{v.phone}</Text>
                </Table.Td>
                <Table.Td>
                  <Badge size="xs" color="gray" variant="light">
                    {v.category}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Text size="xs">{v.area}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="xs" c={v.fssaiNumber.includes("Verified") ? "teal" : "dimmed"}>
                    {v.fssaiNumber}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Badge
                    color={
                      v.status === "Approved"
                        ? "green"
                        : v.status === "Rejected"
                        ? "red"
                        : "yellow"
                    }
                  >
                    {v.status}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Button
                    size="xs"
                    variant="light"
                    color="green"
                    onClick={() => setSelectedVendor(v)}
                  >
                    Review KYC
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>

      {/* KYC Detail Modal */}
      <Modal
        opened={!!selectedVendor}
        onClose={() => setSelectedVendor(null)}
        title={
          <Text fw={800} size="md">
            Verify Merchant: {selectedVendor?.storeName}
          </Text>
        }
        radius="md"
      >
        {selectedVendor && (
          <Box>
            <Paper p="sm" withBorder mb="md" style={{ backgroundColor: "#f9faf9" }}>
              <Text size="sm" fw={700}>
                Owner: {selectedVendor.ownerName} ({selectedVendor.phone})
              </Text>
              <Text size="xs" c="dimmed" mt="xs">
                Category: {selectedVendor.category} • Location: {selectedVendor.area}
              </Text>
              <Text size="xs" mt="xs">
                Trade License: <strong>{selectedVendor.tradeLicense}</strong>
              </Text>
              <Text size="xs" mt="xs">
                Food License: <strong>{selectedVendor.fssaiNumber}</strong>
              </Text>
            </Paper>

            <Group grow mb="xs">
              <Button
                color="green"
                leftSection={<IconCheck size={16} />}
                onClick={() => handleStatusChange(selectedVendor.id, "Approved")}
              >
                Approve & activate POS
              </Button>
              <Button
                color="red"
                variant="outline"
                leftSection={<IconX size={16} />}
                onClick={() => handleStatusChange(selectedVendor.id, "Rejected")}
              >
                Reject application
              </Button>
            </Group>
          </Box>
        )}
      </Modal>
    </Box>
  );
}
