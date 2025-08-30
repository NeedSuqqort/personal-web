import { Box, Heading, Button, Flex, Icon, Stack } from "@chakra-ui/react";
import { SunIcon, MoonIcon, EmailIcon } from "@chakra-ui/icons";
import "../style/index.css";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { useState } from "react";
import { socials } from "../constants/constants";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDark, setDark] = useState(true);

  return (
    <Box className="mb-6 top-0 z-50">
      <Flex
        p={[6, 5, 6, 5]}
        direction="row"
        wrap="wrap"
        maxH={"10vh"}
        alignContent={"center"}
      >
        <Link to={"/"} className="w-1/10 lg:w-[55%]">
          <Heading textAlign="center" mx={5}>
            Oscar Law's Personal Space
          </Heading>
        </Link>
        <Stack direction={"row"} align={"center"}>
          <a href={socials.email} target="_blank">
            <Button color="blackAlpha" variant="solid" leftIcon={<EmailIcon />}>
              Email
            </Button>
          </a>
          <a href={socials.linkedin} target="_blank">
            <Button
              color="blackAlpha"
              variant="solid"
              leftIcon={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
          </a>
          <a href={socials.github} target="_blank">
            <Button
              color="blackAlpha"
              variant="solid"
              leftIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
          </a>
          <Icon
            as={isDark ? SunIcon : MoonIcon}
            boxSize="2.5em"
            onClick={() => setDark(!isDark)}
          />
        </Stack>
      </Flex>
    </Box>
  );
}
