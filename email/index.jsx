import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export function PrismAutoContactEmail({ email, name, subject, message }) {
  return (
    <Html>
      <Head />
      <Preview>Prism Auto | RestorFX : Prise de contact</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-offwhite text-base font-sans">
          <Img
            src={
              "https://www.prismauto.fr/_next/static/media/logo-light.585ff36d.svg"
            }
            width="100"
            height="auto"
            alt="logo de prism auto"
            className="mx-auto my-20"
          />
          <Container className="bg-white p-45 shadow-xl rounded-lg">
            <Section className="text-center">
              <Row>
                <Text className="text-base">Nom : {name}</Text>
                <Text className="text-base">Email : {email}</Text>
                <Text className="text-base">Sujet : {subject}</Text>
                <Text className="text-base">Message : {message}</Text>
              </Row>
            </Section>
          </Container>
          <Container className="mt-20">
            <Text className="text-center text-gray-400 mb-45">
              Pour répondre, merci de cliquer directement sur l'email souligné.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
