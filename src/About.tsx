import { useEffect, useRef } from "react";
import { Box, Spacer, Flex } from "@chakra-ui/react";
import { topicsInterested } from "./constants";
import "./index.css";
import Projects from "./Projects";
import { useInView } from "framer-motion";
import Section from "./Section";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pos = useRef(null);
  const inView = useInView(pos, { once: true });
  console.log(inView);

  return (
    <Box minHeight={"100vh"}>
      <div className="space-y-4 items-center py-6">
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

        <Box py={10}>
          <hr className="line hidden" />
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
                    Dean's List (CGA {'>'} 3.7/4) in 2022 and 2023 Fall Term 
                  </strong>
                </li>
              </ul>
            </pre>
          </Box>
        </Section>

        <Box py={10}>
          <hr className="line hidden" />
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
              <h2 className="text-right">Dec 2023 - Feb 2024</h2>
            </Flex>
            <pre>
              <ul>
                <li>
                  Gained hands-on experience on front-end developement and in
                  touch with production code.
                </li>
                <li>
                  Learnt some of the practices for software development projects
                  and Git/GitHub
                </li>
              </ul>
            </pre>
          </Box>
        </Section>

        <Box py={10}>
          <hr className="line hidden" />
        </Box>

        <Section>
          <Projects />
        </Section>
        <Spacer py={20} />
      </div>
    </Box>
  );
};

export default About;
