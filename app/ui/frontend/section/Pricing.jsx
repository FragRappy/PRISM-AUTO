"use client";

import { Container, SimpleGrid } from "@mantine/core";
import { PricingCard } from "../card/Price";

export function PricingSection() {
  return (
    <Container size="lg" py="xl">
      <SimpleGrid cols={{ base: 1, md: 4 }} spacing="lg">
        <PricingCard
          title="Free Lite"
          subtitle="It's totally free"
          price="0$"
          badge="Current plan"
          cta="Current Plan"
          features={[
            { label: "Up to 1 User", available: true },
            { label: "All UI components", available: true },
            { label: "Lifetime access", available: true },
            { label: "Free updates", available: true },
            { label: "Community support", available: false },
            { label: "Downloadable files", available: false },
          ]}
        />

        <PricingCard
          title="Starter"
          subtitle="Single site"
          oldPrice="39$"
          price="29$"
          cta="Get the plan"
          features={[
            { label: "Up to 5 Users", available: true },
            { label: "All UI components", available: true },
            { label: "Lifetime access", available: true },
            { label: "Free updates", available: true },
            { label: "Community support", available: true },
            { label: "Downloadable files", available: false },
          ]}
        />

        <PricingCard
          title="Business"
          subtitle="Unlimited sites"
          oldPrice="99$"
          price="59$"
          highlighted
          cta="Get the plan"
          features={[
            { label: "Up to 10 Users", available: true },
            { label: "All UI components", available: true },
            { label: "Lifetime access", available: true },
            { label: "Free updates", available: true },
            { label: "Community support", available: true },
            { label: "Downloadable files", available: true },
          ]}
        />

        <PricingCard
          title="Extended"
          subtitle="For paying users"
          oldPrice="259$"
          price="189$"
          cta="Get the plan"
          features={[
            { label: "Up to 50 Users", available: true },
            { label: "All UI components", available: true },
            { label: "Lifetime access", available: true },
            { label: "Free updates", available: true },
            { label: "Community support", available: true },
            { label: "Downloadable files", available: true },
          ]}
        />
      </SimpleGrid>
    </Container>
  );
}
