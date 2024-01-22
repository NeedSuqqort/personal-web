import { Stack, Text, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { socials } from "./constants";
const Footer = () => {
  const date = new Date();

  return (
    <Flex px={20} py={6} mt={6} bg={"orange"}>
      <Stack direction="column">
        <Text>Oscar Law's personal web</Text>
        <Link to="/">Main page</Link>
        <Link to="/about">My profile</Link>
        <Spacer />
        <Text>© {date.getFullYear()} Oscar Law. All rights reserved.</Text>
      </Stack>
      <Spacer />
      <Stack direction="column">
        <Text>Contacts</Text>
        <a href={socials.email} target="_blank">
          Email
        </a>
        <a href={socials.linkedin} target="_blank">
          LinkedIn
        </a>
        <a href={socials.github} target="_blank">
          GitHub
        </a>
      </Stack>
    </Flex>
  );
};

export default Footer;
