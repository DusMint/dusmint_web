"use client";

import React, { useState } from "react";
import {
  Card,
  Grid,
  Text,
  Badge,
  Table,
  Group,
  Button,
  Tabs,
  Paper,
  ActionIcon,
  Modal,
  TextInput,
  Select,
  Box,
} from "@mantine/core";

interface LiveOrder {
  id: string;
  customer: string;
  phone: string;
  shopName: string;
  items: string;
  amount: number;
  payment: "UPI Paid" | "Cash on Delivery";
  status: "Placed" | "Packing" | "Dispatched" | "Delivered";
  timeElapsed: string;
  eta: string;
}

const INITIAL_ORDERS: LiveOrder[] = [
  {
    id: "DM-9102",
    customer: "Debanjan Sengupta",
    phone: "+91 98301 22410",
    shopName: "Sharma Kirana Store",
    items: "Aashirvaad Atta (5kg), Tata Salt, Fortune Oil (1L)",
    amount: 415,
    payment: "UPI Paid",
    status: "Packing",
    timeElapsed: "4 min ago",
    eta: "11 mins remaining",
  },
  {
    id: "DM-9101",
    customer: "Priya Mukherjee",
    phone: "+91 98310 98451",
    shopName: "Fresh Basket",
    items: "Red Tomatoes (1kg), Green Capsicum (500g), Spinach (250g)",
    amount: 103,
    payment: "UPI Paid",
    status: "Dispatched",
    timeElapsed: "8 min ago",
    eta: "6 mins remaining",
  },
  {
    id: "DM-9100",
    customer: "Sourav Ganguly",
    phone: "+91 98365 11029",
    shopName: "Bay Seafood",
    items: "Fresh Katla Steaks (500g), Tiger Prawns Cleaned (300g)",
    amount: 530,
    payment: "Cash on Delivery",
    status: "Placed",
    timeElapsed: "1 min ago",
    eta: "24 mins remaining",
  },
  {
    id: "DM-9099",
    customer: "Ananya Roy",
    phone: "+91 97480 34120",
    shopName: "New Town Dairy",
    items: "Cow Milk Pouch (2L), Malai Paneer Block (200g)",
    amount: 158,
    payment: "UPI Paid",
    status: "Dispatched",
    timeElapsed: "12 min ago",
    eta: "3 mins remaining",
  },
  {
    id: "DM-9098",
    customer: "Vikramaditya Bose",
    phone: "+91 98300 77123",
    shopName: "Alam Chicken Centre",
    items: "Curry Cut Chicken (1kg), Mutton Chops (500g)",
    amount: 720,
    payment: "UPI Paid",
    status: "Delivered",
    timeElapsed: "28 min ago",
    eta: "Delivered in 17 min",
  },
];

export default function AdminLiveOrdersBoard() {
  const [orders, setOrders] = useState<LiveOrder[]>(INITIAL_ORDERS);
  const [activeTab, setActiveTab] = useState<string | null>("all");
  const [selectedOrder, setSelectedOrder] = useState<LiveOrder | null>(null);
  const [filterQuery, setFilterQuery] = useState("");

  const handleUpdateStatus = (id: string, newStatus: LiveOrder["status"]) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
    );
    if (selectedOrder && selectedOrder.id === id) {
      setSelectedOrder((prev) => (prev ? { ...prev, status: newStatus } : null));
    }
  };

  const filteredOrders = orders.filter((o) => {
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "active" && o.status !== "Delivered") ||
      (activeTab === "placed" && o.status === "Placed") ||
      (activeTab === "packing" && o.status === "Packing") ||
      (activeTab === "dispatched" && o.status === "Dispatched") ||
      (activeTab === "delivered" && o.status === "Delivered");

    const matchesSearch =
      o.id.toLowerCase().includes(filterQuery.toLowerCase()) ||
      o.customer.toLowerCase().includes(filterQuery.toLowerCase()) ||
      o.shopName.toLowerCase().includes(filterQuery.toLowerCase());

    return matchesTab && matchesSearch;
  });

  const getStatusBadge = (status: LiveOrder["status"]) => {
    switch (status) {
      case "Placed":
        return <Badge color="yellow" variant="filled">Pending Shop Conf.</Badge>;
      case "Packing":
        return <Badge color="blue" variant="filled">Store Packing</Badge>;
      case "Dispatched":
        return <Badge color="teal" variant="filled">Rider on Route</Badge>;
      case "Delivered":
        return <Badge color="gray" variant="light">Delivered</Badge>;
    }
  };

  return (
    <Box>
      {/* Top Header */}
      <Group justify="space-between" mb="lg">
        <div>
          <Text size="xl" fw={900} c="#121e17">
            Live Orders Operations Board
          </Text>
          <Text size="sm" c="dimmed">
            Real-time feed across Salt Lake, New Town & Central Kolkata clusters
          </Text>
        </div>
        <Group>
          <Button
            variant="filled"
            color="green"
            size="sm"
            onClick={() => {
              const newOrder: LiveOrder = {
                id: `DM-${Math.floor(1000 + Math.random() * 9000)}`,
                customer: "Kolkata Customer #" + Math.floor(Math.random() * 50),
                phone: "+91 98300 00000",
                shopName: "Sharma Kirana Store",
                items: "Fresh Daily Staples Pack",
                amount: 290,
                payment: "UPI Paid",
                status: "Placed",
                timeElapsed: "Just now",
                eta: "18 mins remaining",
              };
              setOrders([newOrder, ...orders]);
            }}
          >
            + Simulate Incoming Order
          </Button>
        </Group>
      </Group>

      {/* KPI Stats Cards */}
      <Grid mb="lg">
        <Grid.Col span={{ base: 12, sm: 6, md: 2.4 }}>
          <Card padding="md" radius="md" withBorder>
            <Text size="xs" c="dimmed" fw={700}>
              TODAY&apos;S TOTAL ORDERS
            </Text>
            <Text size="1.8rem" fw={900} c="#0b5c38" mt="xs">
              184
            </Text>
            <Text size="xs" c="teal" fw={600}>
              ↑ 24% vs yesterday
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 2.4 }}>
          <Card padding="md" radius="md" withBorder>
            <Text size="xs" c="dimmed" fw={700}>
              ACTIVE IN-FLIGHT
            </Text>
            <Text size="1.8rem" fw={900} c="#2563eb" mt="xs">
              {orders.filter((o) => o.status !== "Delivered").length}
            </Text>
            <Text size="xs" c="dimmed">
              Average 14 mins to door
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 2.4 }}>
          <Card padding="md" radius="md" withBorder>
            <Text size="xs" c="dimmed" fw={700}>
              TODAY&apos;S GMV
            </Text>
            <Text size="1.8rem" fw={900} c="#121e17" mt="xs">
              ₹64,280
            </Text>
            <Text size="xs" c="teal" fw={600}>
              100% UPI & Cash cleared
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 2.4 }}>
          <Card padding="md" radius="md" withBorder>
            <Text size="xs" c="dimmed" fw={700}>
              AVG DELIVERY SPEED
            </Text>
            <Text size="1.8rem" fw={900} c="#d97706" mt="xs">
              16.4 min
            </Text>
            <Text size="xs" c="dimmed">
              Target: under 25 min
            </Text>
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 2.4 }}>
          <Card padding="md" radius="md" withBorder>
            <Text size="xs" c="dimmed" fw={700}>
              ACTIVE SCOOTER RIDERS
            </Text>
            <Text size="1.8rem" fw={900} c="#059669" mt="xs">
              38
            </Text>
            <Text size="xs" c="teal" fw={600}>
              98.6% On-time delivery
            </Text>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Filter and Tab Section */}
      <Paper p="md" radius="md" withBorder mb="lg" style={{ backgroundColor: "#ffffff" }}>
        <Group justify="space-between" mb="md">
          <Tabs value={activeTab} onChange={setActiveTab} color="green">
            <Tabs.List>
              <Tabs.Tab value="all">All Orders ({orders.length})</Tabs.Tab>
              <Tabs.Tab value="active">Active Live ({orders.filter((o) => o.status !== "Delivered").length})</Tabs.Tab>
              <Tabs.Tab value="placed">Placed</Tabs.Tab>
              <Tabs.Tab value="packing">Packing</Tabs.Tab>
              <Tabs.Tab value="dispatched">On Road</Tabs.Tab>
              <Tabs.Tab value="delivered">Delivered</Tabs.Tab>
            </Tabs.List>
          </Tabs>

          <TextInput
            placeholder="Search order ID, store, customer..."
            size="xs"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            style={{ width: 260 }}
          />
        </Group>

        {/* Orders Table */}
        <Table highlightOnHover verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Order ID</Table.Th>
              <Table.Th>Local Store</Table.Th>
              <Table.Th>Customer</Table.Th>
              <Table.Th>Items Summary</Table.Th>
              <Table.Th>Total</Table.Th>
              <Table.Th>Live Status</Table.Th>
              <Table.Th>ETA / Elapsed</Table.Th>
              <Table.Th>Operations Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {filteredOrders.map((o) => (
              <Table.Tr key={o.id}>
                <Table.Td>
                  <Text size="sm" fw={800} c="#0b5c38">
                    {o.id}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" fw={700}>
                    {o.shopName}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{o.customer}</Text>
                  <Text size="xs" c="dimmed">{o.phone}</Text>
                </Table.Td>
                <Table.Td style={{ maxWidth: 220 }}>
                  <Text size="xs" lineClamp={1}>
                    {o.items}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" fw={800}>
                    ₹{o.amount}
                  </Text>
                  <Badge size="xs" variant="outline" color={o.payment === "UPI Paid" ? "green" : "blue"}>
                    {o.payment}
                  </Badge>
                </Table.Td>
                <Table.Td>{getStatusBadge(o.status)}</Table.Td>
                <Table.Td>
                  <Text size="xs" fw={700}>
                    {o.eta}
                  </Text>
                  <Text size="10px" c="dimmed">
                    {o.timeElapsed}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <Button
                      size="xs"
                      variant="light"
                      color="green"
                      onClick={() => setSelectedOrder(o)}
                    >
                      Manage
                    </Button>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Paper>

      {/* Order Detail & Dispatch Modal */}
      <Modal
        opened={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        title={
          <Text fw={800} size="md">
            Order Dispatch Details • {selectedOrder?.id}
          </Text>
        }
        radius="md"
      >
        {selectedOrder && (
          <Box>
            <Paper p="sm" withBorder mb="md" style={{ backgroundColor: "#f9faf9" }}>
              <Text size="sm" fw={700} c="#0b5c38">
                Store: {selectedOrder.shopName}
              </Text>
              <Text size="xs" c="dimmed">
                Customer: {selectedOrder.customer} ({selectedOrder.phone})
              </Text>
              <Text size="xs" mt="xs">
                Items: {selectedOrder.items}
              </Text>
              <Text size="sm" fw={800} mt="xs">
                Total Bill: ₹{selectedOrder.amount} ({selectedOrder.payment})
              </Text>
            </Paper>

            <Text size="xs" fw={700} mb="xs">
              Update Live Tracking Status:
            </Text>
            <Group gap="xs" mb="md">
              <Button
                size="xs"
                variant={selectedOrder.status === "Placed" ? "filled" : "outline"}
                color="yellow"
                onClick={() => handleUpdateStatus(selectedOrder.id, "Placed")}
              >
                1. Placed
              </Button>
              <Button
                size="xs"
                variant={selectedOrder.status === "Packing" ? "filled" : "outline"}
                color="blue"
                onClick={() => handleUpdateStatus(selectedOrder.id, "Packing")}
              >
                2. Packing
              </Button>
              <Button
                size="xs"
                variant={selectedOrder.status === "Dispatched" ? "filled" : "outline"}
                color="teal"
                onClick={() => handleUpdateStatus(selectedOrder.id, "Dispatched")}
              >
                3. On Road
              </Button>
              <Button
                size="xs"
                variant={selectedOrder.status === "Delivered" ? "filled" : "outline"}
                color="green"
                onClick={() => handleUpdateStatus(selectedOrder.id, "Delivered")}
              >
                4. Delivered
              </Button>
            </Group>

            <Button
              fullWidth
              color="green"
              onClick={() => setSelectedOrder(null)}
            >
              Done
            </Button>
          </Box>
        )}
      </Modal>
    </Box>
  );
}
