import { Box, Heading, Flex, Text, Tag } from "@chakra-ui/react";
import { projectData } from "./constants";

export default function Projects() {
  return (
    <Box>
      <p className="about-subheading mb-6">Past projects</p>
      <Box>
        {projectData.map((project) => (
          <Flex direction={"column"} className="space-y-4" key={project.id}>
            <Heading fontSize={"2xl"}>{project.title}</Heading>
            <Text className="indent-6">{project.desc}</Text>
            <Flex px={6}>
              <Text>Language/Frameworks: </Text>
              {project.tools.map((tool) => (
                <Tag className="rounded-full mx-4" size="lg" colorScheme="blue">
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