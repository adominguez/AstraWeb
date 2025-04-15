import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

interface WelcomeFreeDesignCampaignProps {
  username?: string;
}

export const WelcomeFreeDesignCampaign = ({
  username,
}: WelcomeFreeDesignCampaignProps) => {
  const previewText = `Ver email online`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-slate-950 my-auto mx-auto font-sans px-2">
          <Container className="border border-solid text-white border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`/static/logo-white.png`}
                width="100"
                height="112"
                alt="Vercel"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-[24px] text-center p-0 my-[30px] font-thin mx-0">
              ¡Gracias por compartir tu proyecto! 🌟
            </Heading>
            <Text className="text-lg leading-[24px]">
              Hola {username},
            </Text>
            <Text className="text-lg leading-[24px] font-thin">
              Hemos recibido correctamente tu formulario y nos encantará conocer más sobre tu proyecto. En los próximos días revisaremos todas las candidaturas con calma.
            </Text>
            <Text className="text-lg leading-[24px]">
              ✨ Recuerda que puedes aumentar tus posibilidades de ser seleccionado comentando en los post de instagram y/o facebook explicando por qué deberías ser la persona seleccionada.
            </Text>  
            <Section>
              <Row className="mt-[16px]">
                <Column className="w-[50%] pr-[8px]" align='center'>
                  <Button
                    className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-500 rounded-full text-white transition"
                    href="instagram.com/astrahub.dev"
                  >
                    Comentar en Instagram
                  </Button>
                </Column>
                <Column className="w-[50%] pl-[8px]" align='center'>
                  <Button
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition"
                    href="https://www.facebook.com/astrahub.dev"
                  >
                    Comentar en Facebook
                  </Button>
                </Column>
              </Row>
            </Section>
            <Text className="text-lg leading-[24px] mt-8 font-light">
              Te recuerdo que la 🗓️ Fecha límite de participación es hasta.
            </Text>
            <Text className="text-lg font-light">
              <strong className="text-[#bb3fff]">28 de abril a las 23:59</strong>
            </Text>
            <Text className="text-lg leading-[24px] font-light mt-8">
              El 📣 Anuncio del proyecto elegido.
            </Text>
            <Text className="text-lg font-light">
              <strong className="text-[#84cae7]">30 de abril, a través de las redes sociales</strong>
            </Text>
            <Text className="text-lg font-thin leading-[24px] mt-8">
              Mientras tanto, si quieres seguir el proceso o inspirarte con ideas para tu web, puedes seguir nuestras redes sociales:
            </Text>
            <Section>
              <Row className="mt-[16px]">
                <Column className="w-[50%] pr-[8px]" align='center'>
                  <Button
                    className="flex items-center gap-2 px-4 py-2 bg-pink-600 hover:bg-pink-500 rounded-full text-white transition"
                    href="instagram.com/astrahub.dev"
                  >
                    Seguir en Instagram
                  </Button>
                </Column>
                <Column className="w-[50%] pl-[8px]" align='center'>
                  <Button
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-full text-white transition"
                    href="https://www.facebook.com/astrahub.dev"
                  >
                    Seguir en Facebook
                  </Button>
                </Column>
              </Row>
            </Section>
            <Text className="font-xl font-thin leading-[24px]">
              Gracias de nuevo por compartir tu historia.
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-gray-200 text-[12px] leading-[24px]">
              Este email se ha enviado porque te has inscrito en la convocatoria de diseño web gratuito de AstraWeb a través del formulario de participación.
            </Text>
            <Text className="text-gray-200 text-[12px] leading-[24px]">
              Si deseas modificar o eliminar tus datos, puedes contactarme en cualquier momento respondiendo a este correo o escribiendo a hola@astrahub.es
            </Text>
            <Text className="text-gray-200 text-[12px] leading-[24px]">
              Si deseas modificar o eliminar tus datos, puedes contactarnos en cualquier momento respondiendo a este correo o escribiendo a info@astrahub.es
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

WelcomeFreeDesignCampaign.PreviewProps = {
  username: 'alanturing',
} as WelcomeFreeDesignCampaignProps;

export default WelcomeFreeDesignCampaign;
