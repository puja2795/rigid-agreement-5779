import { Link, Box, Text, Flex, Icon } from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

export default function SubNavbar() {
  const Links = [
    "Groceries",
    "Premium Fruits",
    "Home & Kitchen",
    "Fashion",
    "Electronics",
    "Beauty",
    "Home Improvement",
    "Sports",
    "Toys & Luggage",
  ];

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
        <Box m="auto" w="70%">
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
            <Flex gap={10}>
              {Links.map((link) => (
                <Box >
                  <Text color="black" key={link}>
                    {link} <Icon as={FaAngleDown} mt="2" />
                  </Text>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
