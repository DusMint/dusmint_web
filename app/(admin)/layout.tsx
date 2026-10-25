"use client";

import React, { useState } from "react";
import "@mantine/core/styles.css";
import {
  MantineProvider,
  createTheme,
  AppShell,
  Group,
  Burger,
  Text,
  Badge,
  Button,
  NavLink,
  Divider,
  Box,
} from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dusmintTheme = createTheme({
  primaryColor: "green",
  colors: {
    green: [
      "#eefaf2",
      "#d8f3e2",
      "#b1e6c4",
      "#84d4a1",
      "#5ec082",
      "#0b5c38", // brand primary
      "#094e2f",
      "#073e26",
      "#06321f",
      "#042315",
    ],
  },
  fontFamily: "var(--font-dm-sans), -apple-system, BlinkMacSystemFont, sans-serif",
  headings: {
    fontFamily: "var(--font-dm-sans), -apple-system, BlinkMacSystemFont, sans-serif",
  },
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();

  const isLoginPage = pathname === "/admin/login";

  if (isLoginPage) {
    return (
      <MantineProvider theme={dusmintTheme} defaultColorScheme="light">
        {children}
      </MantineProvider>
    );
  }

  return (
    <MantineProvider theme={dusmintTheme} defaultColorScheme="light">
      <AppShell
        header={{ height: 64 }}
        navbar={{
          width: 270,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
        styles={{
          main: {
            backgroundColor: "#f4f7f5",
            minHeight: "100vh",
          },
        }}
      >
        <AppShell.Header style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e1ebe4" }}>
          <Group h="100%" px="md" justify="space-between">
            <Group>
              <Burger
                opened={opened}
                onClick={() => setOpened(!opened)}
                hiddenFrom="sm"
                size="sm"
              />
              <Group gap="xs">
                <Text fw={900} size="xl" c="#0b5c38">
                  dus<span style={{ color: "#10854d" }}>mint</span>
                  <span style={{ color: "#ffc20e" }}>.admin</span>
                </Text>
                <Badge color="green" variant="light" size="sm">
                  Ops Console v2.4
                </Badge>
              </Group>
            </Group>

            <Group gap="md">
              <Badge color="blue" variant="dot" size="md">
                Kolkata Central Hub (Live)
              </Badge>
              <Group gap="xs">
                <Box
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "#0b5c38",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  AK
                </Box>
                <Box visibleFrom="xs">
                  <Text size="xs" fw={700} c="#121e17">
                    Anirban Kar
                  </Text>
                  <Text size="10px" c="dimmed">
                    Cluster Ops Lead
                  </Text>
                </Box>
              </Group>
              <Button
                component={Link}
                href="/"
                variant="subtle"
                color="gray"
                size="xs"
              >
                Public Site ↗
              </Button>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md" style={{ backgroundColor: "#ffffff", borderRight: "1px solid #e1ebe4" }}>
          <Box mb="md">
            <Text size="xs" fw={700} c="dimmed" tt="uppercase" mb="xs">
              Operations Control
            </Text>
            <NavLink
              component={Link}
              href="/admin"
              label="Live Orders Board"
              leftSection="⚡"
              active={pathname === "/admin"}
              color="green"
              fw={600}
              variant="light"
            />
            <NavLink
              component={Link}
              href="/admin/vendors"
              label="Vendor Approvals"
              leftSection="🏪"
              rightSection={<Badge size="xs" color="yellow">3 New</Badge>}
              active={pathname === "/admin/vendors"}
              color="green"
              fw={600}
              variant="light"
            />
            <NavLink
              component={Link}
              href="/admin/claims"
              label="Claims & Refunds"
              leftSection="🛡️"
              rightSection={<Badge size="xs" color="red">1</Badge>}
              active={pathname === "/admin/claims"}
              color="green"
              fw={600}
              variant="light"
            />
            <NavLink
              component={Link}
              href="/admin/slots"
              label="Slot & Price Bands"
              leftSection="⚙️"
              active={pathname === "/admin/slots"}
              color="green"
              fw={600}
              variant="light"
            />
          </Box>

          <Divider my="sm" />

          <Box mt="auto">
            <Box
              p="sm"
              style={{
                backgroundColor: "#f0f8f3",
                borderRadius: 12,
                border: "1px solid #cce5d5",
              }}
            >
              <Text size="xs" fw={700} c="#0b5c38">
                Cluster Health
              </Text>
              <Text size="11px" c="#3f5a4a">
                Salt Lake & New Town: 99.2% deliveries within 20 mins.
              </Text>
            </Box>

            <Button
              component={Link}
              href="/admin/login"
              variant="outline"
              color="red"
              size="xs"
              fullWidth
              mt="md"
            >
              Lock Console / Logout
            </Button>
          </Box>
        </AppShell.Navbar>

        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
