import { Accordion, AccordionControl, AccordionItem, AccordionPanel, Container, Text, Title } from "@mantine/core";
import classes from "./Faq.module.css";

/**
 * FaqSection
 * @param {string}   title  — titre de la section (optionnel)
 * @param {{ question: string, answer: string }[]} items
 */
export function FaqSection({
  title = "Questions fréquentes",
  items = [],
}) {
  return (
    <Container mt={60} mb={60}>
      <Title order={2} ta="center" fz={24} fw={700} mb={40}>
        {title}
      </Title>

      <Accordion
        variant="separated"
        radius="md"
        maw={720}
        mx="auto"
        classNames={{ item: classes.item, control: classes.control }}
      >
        {items.map((item) => (
          <AccordionItem key={item.question} value={item.question}>
            <AccordionControl>
              <Text fw={500} fz="md">
                {item.question}
              </Text>
            </AccordionControl>
            <AccordionPanel>
              <Text c="dimmed" fz="sm" lh={1.7}>
                {item.answer}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
