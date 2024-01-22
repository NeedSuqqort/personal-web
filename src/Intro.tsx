import { mainPageIntro } from "./constants";
import { Box, Text } from "@chakra-ui/react";

export default function Intro() {
  return (
    <Box>
      <Text className="text-wrap text-2xl first-letter:font-bold first-letter:text-7xl spacing-y-2 intro">
        {mainPageIntro}
      </Text>
    </Box>
  );
}
