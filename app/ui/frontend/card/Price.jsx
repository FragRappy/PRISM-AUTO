import { Card, Center, Text } from "@mantine/core";
import { IconAdjustments, IconCheck, IconX } from "@tabler/icons-react";

export default function PriceCard({ planName, price, features }) {
  const renderIcon = (status) => {
    if (status === "check") return <IconCheck size={20} color="green" />;
    if (status === "cross") return <IconX size={20} color="red" />;
    if (status === "option")
      return <IconAdjustments size={20} color="orange" />;
    return null;
  };

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder>
      <Center mb="md">
        <Text weight={700} size="lg">
          {planName}
        </Text>
      </Center>
      <div>
        {features.map((feature, index) => (
          <Center
            key={index}
            style={{ justifyContent: "space-between", marginBottom: 6 }}
          >
            <Text size="sm">{feature.name}</Text>
            {renderIcon(feature.status)}
          </Center>
        ))}
      </div>
      <Center mt="md">
        <Text weight={700} size="lg">
          {price}
        </Text>
      </Center>
    </Card>
  );
}
