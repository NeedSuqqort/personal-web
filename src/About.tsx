import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Spacer, Flex } from "@chakra-ui/react";
import { topicsInterested } from "./constants";
import "./index.css";
import Projects from "./Projects";
import { useInView } from "framer-motion";
import Section from "./Section";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const pos = useRef(null);
  const inView = useInView(pos, { once: true });
  console.log(inView);

  return (
    <Box minHeight={"100vh"}>
      <div className="space-y-4 items-center px-8 py-6">
        <h1 className="text-3xl text-center text-yellow-600 font-bold">
          About me
        </h1>
        <Section>
          <p className="about-subheading">Personal info</p>
          <Box className="rounded-3xl" p={5} my={10}>
            <h2 className="name">Name: Oscar Law</h2>
            <h2 className="ign">In-game name: NeedSupport</h2>
            <h2 className="desc-head">Description: </h2>
            <pre className="desc">
              I am a Year 3 computer science student who enjoys learning the
              latest technology or cool stuffs in the Internet. I am also
              passionate on programming and motivated to self-learn different
              coding techniques.
            </pre>
            <pre className="interests">
              Interested fields:
              <ul>
                {topicsInterested.map((item, index) => (
                  <li key={`${index}`}>{item}</li>
                ))}
              </ul>
            </pre>
            <pre className="note">
              I am currently learning various front-end frameworks and tools
              such as Next.js, Tailwind CSS, etc.
            </pre>
          </Box>
        </Section>

        <Box py={40}>
          <hr className="line" />
        </Box>

        <Section>
          <div className="education">
            <p className="about-subheading">Education</p>
          </div>
          <Box className="rounded-3xl" p={5} my={10}>
            <h2>
              Bachelor of Engineering, Hong Kong University of Science and
              Technology
            </h2>
            <pre>
              <ul>
                <li>2021-2025</li>
                <li>Expected to graduate in Summer 2025</li>
                <li>
                  With an extended major on{" "}
                  <strong>Artifical intelligence(AI)</strong>
                </li>
                <li>
                  <strong className="text-pink-500">
                    Dean's List in 2022 Fall Term
                  </strong>
                </li>
              </ul>
            </pre>
          </Box>
        </Section>

        <Box py={40}>
          <hr className="line" />
        </Box>

        <Section>
          <div className="education">
            <p className="about-subheading">Work Experience</p>
          </div>
          <Box className="rounded-3xl" py={4}>
            <Flex
              direction="row"
              className="min-w-full"
              justify="space-between"
            >
              <h2 className="text-left">
                Programmer Intern, TURNED-E! Company
              </h2>
              <h2 className="text-right">Dec 2023 - Present</h2>
            </Flex>
            <pre>
              <ul>
                <li>
                  Gained hands-on experience on front-end developement and in
                  touch with production code.
                </li>
              </ul>
            </pre>
          </Box>
        </Section>

        <Box py={40}>
          <hr className="line" />
        </Box>

        <Section>
          <Projects />
        </Section>

        <Spacer />
        <div className="flex justify-center">
          <Button
            className="flex place-self-center"
            colorScheme="blue"
            variant="outline"
            onClick={() => navigate("/")}
            my={10}
          >
            Go back to the main page
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default About;
