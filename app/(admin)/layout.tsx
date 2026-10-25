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
import {
  IconBolt,
  IconBuildingStore,
  IconShieldCheck,
  IconAdjustmentsHorizontal,
  IconArrowUpRight,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dusmintTheme = createTheme({
  primaryColor: "green",
  colors: {
    green: [
      "#E8F5EC",
      "#d0eedc",
      "#a4dfbd",
      "#74ce9a",
      "#48be7a",
      "#11663A", // green-700 from design.md
      "#0E5330",
      "#0A3E24",
      "#0A3622", // green-900
      "#051d12",
    ],
  },
  fontFamily: "var(--font-body), 'Noto Sans', system-ui, sans-serif",
  headings: {
    fontFamily: "var(--font-heading), 'Poppins', system-ui, sans-serif",
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
            backgroundColor: "#FFFCF2", /* cream surface from design.md */
            minHeight: "100vh",
          },
        }}
      >
        <AppShell.Header style={{ backgroundColor: "#0A3622", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <Group h="100%" px="md" justify="space-between">
            <Group>
              <Burger
                opened={opened}
                onClick={() => setOpened(!opened)}
                hiddenFrom="sm"
                size="sm"
                color="#ffffff"
              />
              <Group gap="xs">
                <Text fw={700} size="xl" c="#ffffff">
                  dus<span style={{ color: "#22c55e" }}>mint</span>
                  <span style={{ color: "#FFC82E" }}>.admin</span>
                </Text>
                <Badge color="green" variant="light" size="sm">
                  Ops Console v2.4
                </Badge>
              </Group>
            </Group>

            <Group gap="md">
              <Badge color="blue" variant="dot" size="md">
                Kolkata Central Hub
              </Badge>
              <Group gap="xs">
                <Box
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "#11663A",
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
                  <Text size="xs" fw={700} c="#ffffff">
                    Anirban Kar
                  </Text>
                  <Text size="10px" c="#b1c7ba">
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
                rightSection={<IconArrowUpRight size={14} />}
                c="#d1ded6"
              >
                Public site
              </Button>
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md" style={{ backgroundColor: "#ffffff", borderRight: "1px solid #D3DBD6" }}>
          <Box mb="md">
            <Text size="xs" fw={700} c="dimmed" tt="uppercase" mb="xs">
              Operations Control
            </Text>
            <NavLink
              component={Link}
              href="/admin"
              label="Live Orders Board"
              leftSection={<IconBolt size={18} stroke={2} />}
              active={pathname === "/admin"}
              color="green"
              fw={600}
              variant="light"
            />
            <NavLink
              component={Link}
              href="/admin/vendors"
              label="Vendor Approvals"
              leftSection={<IconBuildingStore size={18} stroke={2} />}
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
              leftSection={<IconShieldCheck size={18} stroke={2} />}
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
              leftSection={<IconAdjustmentsHorizontal size={18} stroke={2} />}
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
                backgroundColor: "#E8F5EC",
                borderRadius: 12,
                border: "1px solid #D3DBD6",
              }}
            >
              <Text size="xs" fw={700} c="#11663A">
                Cluster Health
              </Text>
              <Text size="11px" c="#56655D">
                Salt Lake & New Town: 99.2% on-time delivery
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
