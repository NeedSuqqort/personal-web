import { Box, Heading, Flex, Text, Tag } from "@chakra-ui/react";
import { projectData } from "../constants/constants";

export default function Projects() {
  return (
    <Box>
      <p className="about-subheading mb-6">Past projects</p>
      <Box my={6}>
        {projectData.map((project) => (
          <Flex
            direction={"column"}
            className="space-y-4 text-lg"
            key={project.id}
            my={4}
          >
            <Heading fontSize={"2xl"}>{project.title}</Heading>
            <pre className="indent-6">{project.desc}</pre>
            <Flex px={6}>
              <Text className="font-bold">Language/Frameworks: </Text>
              {project.tools.map((tool) => (
                <Tag
                  className="rounded-full mx-4"
                  size="lg"
                  bgColor={"#C97C5D"}
                >
                  {tool}
                </Tag>
              ))}
              <hr />
            </Flex>
          </Flex>
        ))}
      </Box>
    </Box>
  );
}
