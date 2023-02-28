import { Icon } from "@iconify/react";
import cardsHeart from "@iconify/icons-mdi/cards-heart";
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  Collapse,
} from "@mantine/core";
import { useState } from "react";
import { showNotification } from "@mantine/notifications";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  image: string;
  title: string;
  location: string;
  description: string;
  badges: string[];
}

export function NewsCard({
  image,
  title,
  description,
  location,
  badges,
}: BadgeCardProps) {
  const { classes, theme } = useStyles();
  const [detailsOpen, setDetailsOpen] = useState(false);
  const features = badges.map((badge) => (
    <Badge color={theme.colorScheme === "dark" ? "dark" : "gray"} key={badge}>
      {badge}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={200} className=" object-cover" />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text size="lg" weight={500}>
            {title}
          </Text>
          <Badge size="sm">{location}</Badge>
        </Group>
        <Collapse in={detailsOpen}>
          <Text size="sm" mt="xs">
            {description}
          </Text>
        </Collapse>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} color="dimmed">
          News article category
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button
          onClick={() => setDetailsOpen(!detailsOpen)}
          radius="md"
          style={{ flex: 1 }}
        >
          Read full article
        </Button>
        <ActionIcon
          onClick={() =>
            showNotification({
              message: "Added to your like categories",
            })
          }
          variant="default"
          radius="md"
          size={36}
        >
          <Icon icon={cardsHeart} />
        </ActionIcon>
      </Group>
    </Card>
  );
}
