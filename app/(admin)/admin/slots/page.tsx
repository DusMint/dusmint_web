"use client";

import React, { useState } from "react";
import {
  Text,
  Badge,
  Paper,
  Box,
  Switch,
  Group,
  TextInput,
  Button,
  SimpleGrid,
  Card,
  Divider,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

export default function AdminSlotsPage() {
  const [monsoonSurge, setMonsoonSurge] = useState(false);
  const [minOrderThreshold, setMinOrderThreshold] = useState("150");
  const [baseDeliveryFee, setBaseDeliveryFee] = useState("25");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <Box>
      <Group justify="space-between" mb="lg">
        <div>
          <Text size="xl" fw={900} c="#121e17">
            Delivery Slots & Price Band Engine
          </Text>
          <Text size="sm" c="dimmed">
            Configure cluster delivery windows, free delivery bands and monsoon surge adjustments
          </Text>
        </div>
        <Button
          color="green"
          leftSection={saved ? <IconCheck size={16} /> : undefined}
          onClick={handleSave}
        >
          {saved ? "Settings saved" : "Save configuration"}
        </Button>
      </Group>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
        {/* Price Bands */}
        <Paper p="lg" radius="md" withBorder style={{ backgroundColor: "#ffffff" }}>
          <Text size="md" fw={800} c="#0b5c38" mb="xs">
            Customer Price Bands & Delivery Fees
          </Text>
          <Text size="xs" c="dimmed" mb="md">
            Order thresholds for free delivery vs standard convenience fee
          </Text>

          <Box mb="md">
            <TextInput
              label="Default Free Delivery Minimum Cart Value (₹)"
              description="Orders at or above this threshold qualify for zero delivery fee"
              value={minOrderThreshold}
              onChange={(e) => setMinOrderThreshold(e.target.value)}
            />
          </Box>

          <Box mb="md">
            <TextInput
              label="Base Delivery Fee for Sub-threshold Orders (₹)"
              description="Charged to customer when order is below free threshold"
              value={baseDeliveryFee}
              onChange={(e) => setBaseDeliveryFee(e.target.value)}
            />
          </Box>

          <Divider my="md" />

          <Group justify="space-between">
            <div>
              <Text size="sm" fw={700}>
                Kolkata Monsoon Rain Surge
              </Text>
              <Text size="xs" c="dimmed">
                Adds +₹15 emergency weather incentive directly to scooter riders during heavy rain
              </Text>
            </div>
            <Switch
              color="green"
              checked={monsoonSurge}
              onChange={(e) => setMonsoonSurge(e.currentTarget.checked)}
            />
          </Group>
        </Paper>

        {/* Operating Slots */}
        <Paper p="lg" radius="md" withBorder style={{ backgroundColor: "#ffffff" }}>
          <Text size="md" fw={800} c="#0b5c38" mb="xs">
            Operating Time Windows & Slots
          </Text>
          <Text size="xs" c="dimmed" mb="md">
            Cluster active hours across Salt Lake, New Town and South Kolkata
          </Text>

          <SimpleGrid cols={1} spacing="sm">
            <Card withBorder p="sm">
              <Group justify="space-between">
                <div>
                  <Text size="sm" fw={800}>
                    Slot 1: Morning Fresh Mandi & Dairy
                  </Text>
                  <Text size="xs" c="dimmed">
                    06:30 AM – 10:30 AM (Peak vegetable, milk & fish orders)
                  </Text>
                </div>
                <Badge color="green">Active</Badge>
              </Group>
            </Card>

            <Card withBorder p="sm">
              <Group justify="space-between">
                <div>
                  <Text size="sm" fw={800}>
                    Slot 2: Afternoon Groceries & Staples
                  </Text>
                  <Text size="xs" c="dimmed">
                    11:00 AM – 04:30 PM (Staples, packaged goods, bakery)
                  </Text>
                </div>
                <Badge color="green">Active</Badge>
              </Group>
            </Card>

            <Card withBorder p="sm">
              <Group justify="space-between">
                <div>
                  <Text size="sm" fw={800}>
                    Slot 3: Evening Dinner Rush
                  </Text>
                  <Text size="xs" c="dimmed">
                    05:00 PM – 10:30 PM (Snacks, meat, late groceries)
                  </Text>
                </div>
                <Badge color="green">Active</Badge>
              </Group>
            </Card>
          </SimpleGrid>
        </Paper>
      </SimpleGrid>
    </Box>
  );
}
