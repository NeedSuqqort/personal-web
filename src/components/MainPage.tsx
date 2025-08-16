import { Box, Spacer } from "@chakra-ui/react";
import { useEffect } from "react";
import Intro from "./Intro";
import { mainPageIntro } from "../constants/constants";
import Section from "../Section";
import About from "./About";

function MainPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box px={20} minH={"100vh"}>
      <Spacer my={20} />
      <Intro
        words={mainPageIntro}
        id="text"
        colors={["#C97C5D", "#B36A5E", "#EF7A85", "#DC758F"]}
      />
      <Section>
        <About />
      </Section>
    </Box>
  );
}

export default MainPage;
