"use client";

// components/PriceSection.js
import {
  Group,
  Paper,
  Table,
  Tabs,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { IconAdjustments, IconCheck, IconX } from "@tabler/icons-react";

export default function PriceSection({ interiorFeatures, exteriorFeatures }) {
  const theme = useMantineTheme();

  const tabsData = [
    { label: "Intérieur", value: "interior", features: interiorFeatures },
    { label: "Extérieur", value: "exterior", features: exteriorFeatures },
    {
      label: "Intérieur + Extérieur",
      value: "both",
      features: [...interiorFeatures, ...exteriorFeatures],
    },
  ];

  const plans = [
    {
      name: "Express",
      price: { interior: "€30", exterior: "€25", both: "€50" },
    },
    { name: "Basic", price: { interior: "€50", exterior: "€40", both: "€80" } },
    {
      name: "Premium",
      price: { interior: "€80", exterior: "€50", both: "€120" },
    },
  ];

  const renderIcon = (status) => {
    if (status === "check") return <IconCheck size={20} color="green" />;
    if (status === "cross") return <IconX size={20} color="red" />;
    if (status === "option")
      return <IconAdjustments size={20} color="orange" />;
    return null;
  };

  return (
    <>
      {/* Tabs centrés en dehors du Paper */}
      <Group position="center" mb="md">
        <Tabs defaultValue="interior" variant="pills" radius="md">
          <Tabs.List>
            {tabsData.map((tab) => (
              <Tabs.Tab key={tab.value} value={tab.value}>
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Group>

      <Paper shadow="sm" radius="md" p="md">
        <Tabs keepMounted={false} defaultValue="interior">
          {tabsData.map((tab) => (
            <Tabs.Panel key={tab.value} value={tab.value} pt="md">
              <Table verticalSpacing="sm" highlightOnHover>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left" }}>Service</th>
                    {plans.map((plan, idx) => (
                      <th
                        key={plan.name}
                        style={{
                          textAlign: "center",
                          borderRight:
                            idx < plans.length - 1
                              ? `1px solid ${theme.colors.gray[2]}`
                              : "none",
                        }}
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tab.features.map((feature, idx) => (
                    <tr key={idx}>
                      <td>{feature.name}</td>
                      {plans.map((plan, idx2) => (
                        <td
                          key={plan.name}
                          style={{
                            textAlign: "center",
                            borderRight:
                              idx2 < plans.length - 1
                                ? `1px solid ${theme.colors.gray[2]}`
                                : "none",
                          }}
                        >
                          {renderIcon(feature[plan.name.toLowerCase()])}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Ligne prix en bas */}
                  <tr>
                    <td>
                      <Text weight={700}>Prix</Text>
                    </td>
                    {plans.map((plan, idx) => (
                      <td
                        key={plan.name}
                        style={{
                          textAlign: "center",
                          fontWeight: 700,
                          borderTop: `2px solid ${theme.colors.gray[2]}`,
                          borderRight:
                            idx < plans.length - 1
                              ? `1px solid ${theme.colors.gray[2]}`
                              : "none",
                        }}
                      >
                        {plan.price[tab.value]}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </Table>
            </Tabs.Panel>
          ))}
        </Tabs>
      </Paper>
    </>
  );
}
