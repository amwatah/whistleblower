/* eslint-disable @next/next/no-img-element */
import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Center,
  Button,
} from "@mantine/core";

import cctvOff from "@iconify/icons-mdi/cctv-off";
import newspaperVariantMultiple from "@iconify/icons-mdi/newspaper-variant-multiple";
import financeIcon from "@iconify/icons-mdi/finance";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { CREATEPAGE } from "../../utils/routepaths";

const mockdata = [
  {
    title: " 100% ANONYMOUS",
    description:
      "we have implemented an anonymous reporting feature that allows users to report cases of corruption without revealing their identity. We understand that many people are afraid to come forward due to the potential risks, and this feature is designed to address this concern. Users can submit information on corrupt practices through a simple and secure reporting system that protects their anonymity",
    icon: <Icon icon={cctvOff} className=" react text-5xl " />,
  },
  {
    title: "REALTIME STATISTICS",
    description:
      "the website includes a feature that provides up-to-date corruption statistics. We have designed this feature to help users understand the scale of corruption in Kenya and its impact on the country's development. We believe that this information will help to raise awareness about the seriousness of the issue and the need for action to be taken to address it.",
    icon: <Icon icon={financeIcon} className=" react text-5xl " />,
  },
  {
    title: "NEWS",
    description:
      "the website includes news articles on corruption scandals. We understand the importance of keeping users informed about the latest developments in the fight against corruption. These news articles will help to shine a spotlight on the corrupt practices that are taking place in Kenya and the efforts being made to tackle them",
    icon: <Icon icon={newspaperVariantMultiple} className=" react text-5xl " />,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      {feature.icon}
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          WHISTLEBLOWER
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        The Kenyan Integrity Platform
      </Title>
      <Group position="center" className=" my-1">
        <img
          src="images/stop.jpg"
          alt="stop-corruption"
          className=" h-52 w-52 animate-tada rounded-full animate-infinite animate-duration-[7s]"
        />
      </Group>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        We aspire to build a safe and secure platform for individuals to report
        corruption without fear of retaliation. Corruption is a significant
        problem in Kenya, and many citizens are afraid to speak out against it
        due to the potential consequences of doing so. By providing an anonymous
        reporting platform, the website would encourage people to come forward
        with information about corrupt practices, which could help to root out
        corruption in the country
      </Text>

      <Center className="logo m-3 mx-auto w-[15vw]">
        <Link href={CREATEPAGE}>
          <Button>BLOW</Button>
        </Link>
      </Center>
    </Container>
  );
}
