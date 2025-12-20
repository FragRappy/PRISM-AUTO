"use client";

import {
  Badge,
  Button,
  Card,
  Group,
  List,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";

export function PricingCard({
  title,
  subtitle,
  price,
  oldPrice,
  badge,
  features,
  highlighted,
  cta,
}) {
  return (
    <Card
      radius="lg"
      padding="xl"
      withBorder
      shadow={highlighted ? "lg" : "sm"}
      style={{
        borderColor: highlighted ? "var(--mantine-color-blue-6)" : undefined,
      }}
    >
      <Stack gap="md">
        <Group justify="space-between">
          <Text fw={700} size="lg">
            {title}
          </Text>
          {badge && <Badge color="blue">{badge}</Badge>}
        </Group>

        {subtitle && (
          <Text c="dimmed" size="sm">
            {subtitle}
          </Text>
        )}

        <Group align="flex-end" gap={6}>
          {oldPrice && (
            <Text size="lg" td="line-through" c="dimmed">
              {oldPrice}
            </Text>
          )}
          <Text size="xl" fw={800}>
            {price}
          </Text>
        </Group>

        <Text c="dimmed" size="sm">
          One time payment
        </Text>

        <Button
          size="md"
          radius="md"
          variant={highlighted ? "filled" : "light"}
          color="dark"
        >
          {cta}
        </Button>

        <List
          spacing="sm"
          size="sm"
          mt="md"
          icon={
            <ThemeIcon size={20} radius="xl" color="green">
              <IconCheck size={14} />
            </ThemeIcon>
          }
        >
          {features.map((feature, index) => (
            <List.Item
              key={index}
              icon={
                <ThemeIcon
                  size={20}
                  radius="xl"
                  color={feature.available ? "green" : "gray"}
                >
                  {feature.available ? (
                    <IconCheck size={14} />
                  ) : (
                    <IconX size={14} />
                  )}
                </ThemeIcon>
              }
            >
              <Text c={feature.available ? "dark" : "dimmed"}>
                {feature.label}
              </Text>
            </List.Item>
          ))}
        </List>
      </Stack>
    </Card>
  );
}
