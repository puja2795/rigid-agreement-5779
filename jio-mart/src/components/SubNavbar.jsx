import { Box, Text, Flex, Icon} from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";
import data from "../data.json";
import SubMenu from "./SubMenu";

const Links = data.nav_items;
export default function SubNavbar() {
  return (
    <>
      <Box
        bg="#ececed"
        color="white"
        px={5}
        h={10}
        textAlign="center"
        fontSize="md"
        fontWeight="semibold"
      >
        <Box m="auto" w="90%">
          <Flex gap={14}>
            <Box>
              <Flex gap="4">
                <Icon boxSize="7" as={MdLocationPin} color="black" mt="1" />
                <Box>
                  <Text color="black" mt="0">
                    Deliver to{" "}
                  </Text>
                  <Text color="black" mt="-2">
                    400200{" "}
                  </Text>
                </Box>
              </Flex>
            </Box>
            <Flex gap={5}>
              {Links.map((link, index) => (
                  <SubMenu key={index} item={link}/>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
