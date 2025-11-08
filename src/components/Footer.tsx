import { Stack, Text, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { socials } from "../constants/constants";
import { EmailIcon } from "@chakra-ui/icons";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { useColor } from "./context/ColorModeContext";

const Footer = () => {
  const date = new Date();
  const { mode } = useColor();

  return (
    <Flex
      px={20}
      py={6}
      mt={6}
      bg={mode === "light" ? "#C89F9C" : "#B4887E"}
      fontWeight={"Bold"}
    >
      <Stack direction="column">
        <Text>Oscar Law's personal Space</Text>
        <Link to="/">
          <Text>Main page</Text>
        </Link>
        <Link to="/details">
          <Text>More details</Text>
        </Link>
        <Spacer />
        <Text>© {date.getFullYear()} Oscar Law. All rights reserved.</Text>
      </Stack>
      <Spacer />
      <Stack direction="row" spacing={1}>
        <Text px={2}>Contacts:</Text>
        <a href={socials.email} target="_blank">
          <Button
            color="blackAlpha"
            variant="unstyled"
            leftIcon={<EmailIcon />}
          ></Button>
        </a>
        <a href={socials.linkedin} target="_blank">
          <Button
            color="blackAlpha"
            variant="unstyled"
            leftIcon={<LinkedInIcon />}
          ></Button>
        </a>
        <a href={socials.github} target="_blank">
          <Button
            color="blackAlpha"
            variant="unstyled"
            leftIcon={<GitHubIcon />}
          ></Button>
        </a>
      </Stack>
    </Flex>
  );
};

export default Footer;
