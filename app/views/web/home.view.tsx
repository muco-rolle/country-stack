import { Button, Container, Heading, Stack, Text } from "@chakra-ui/react";

export function HomeView() {
  return (
    <Container>
      <Stack my="12">
        <Heading textAlign="center">Remix Country Stack</Heading>
        <Text textAlign="center">
          Remix Stack for deploying to Fly.io with Postgres, Chakra UI,
          formatting, linting, etc. Written in Typescript.
        </Text>

        <Button
          as="a"
          href="https://en.wikipedia.org/wiki/Country_music"
          colorScheme="blue"
          target="_blank"
        >
          Country Music
        </Button>
      </Stack>
    </Container>
  );
}
