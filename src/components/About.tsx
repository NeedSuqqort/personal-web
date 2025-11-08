import { useEffect } from "react";
import { Box, Spacer, Flex } from "@chakra-ui/react";
import { topicsInterested, aboutPageDesc } from "../constants/constants";
import "../style/index.css";
import Projects from "./Projects";
import Section from "../Section";
import { workExperience } from "../constants/work";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box minHeight={"100vh"}>
      <div className="space-y-4 items-center py-6">
        <Section>
          <p className="about-subheading">Personal info</p>
          <Box className="rounded-3xl" p={5} my={10}>
            <h2 className="name">Name: Oscar Law</h2>
            <h2 className="ign">In-game name: NeedSupport</h2>
            <h2 className="desc-head">Description: </h2>
            <pre className="desc">{aboutPageDesc}</pre>
            <pre className="interests">
              Interested fields:
              <ul>
                {topicsInterested.map((item, index) => (
                  <li key={`${index}`}>{item}</li>
                ))}
              </ul>
            </pre>
          </Box>
        </Section>

        <Box py={5}>
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
                <li>2021 Sep - 2025 Jun</li>
                <li>
                  <strong className="text-red-500">First Class Honors</strong>
                </li>
                <li>
                  With an extended major on{" "}
                  <strong>Artifical intelligence(AI)</strong>
                </li>
                <li>
                  <span className="text-red-500 font-bold">
                    Dean's List (CGA {">"} 3.7/4){" "}
                  </span>
                  <span>
                    <strong>(2022 Fall, 2023 Fall, 2025 Spring)</strong>
                  </span>
                </li>
              </ul>
            </pre>
          </Box>
        </Section>

        <Box py={10}>
          <hr className="line hidden" />
        </Box>

        <Section>
          <div className="work-exp">
            <p className="about-subheading">Work Experience</p>
          </div>
          {workExperience.map((work) => (
            <Box className="rounded-3xl" py={4}>
              <Flex
                direction="row"
                className="min-w-full"
                justify="space-between"
              >
                <h2 className="text-left">
                  {work.position}, {work.company}
                </h2>
                <h2 className="text-right">{work.duration}</h2>
              </Flex>
              <pre>
                <ul>
                  {work.responsibilities.map((item) => (
                    <li className="font-xl my-4">{item}</li>
                  ))}
                </ul>
              </pre>
            </Box>
          ))}
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
