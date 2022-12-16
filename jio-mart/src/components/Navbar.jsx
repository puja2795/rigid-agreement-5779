import {
  Icon,
  Text,
  Box,
  Image,
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MdFormatListBulleted } from "react-icons/md";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import SideDrawer from "./SideDrawer";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="#008ecc" color="white" px={4} h={20} textAlign="center" className="navbar">
        <Box w="90%" pt="2" m="auto">
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap="8"
          >
            
            <HamburgerIcon boxSize={10} onClick={onOpen} />
            <SideDrawer onClose={onClose} isOpen={isOpen}/>
            <Image
              src="https://www.jiomart.com/assets/version1669919139/smartweb/images/jiomart_logo_beta.svg"
              alt="logo"
              h="41"
            />
            <InputGroup width="55%" margin="auto">
              <Input
                bg="white"
                placeholder="Search essentials, groceries, and more...  "
              />
              <InputRightElement
                color="black"
                children={<Icon boxSize={5} as={MdFormatListBulleted} />}
              />
            </InputGroup>
            <Flex gap={10}>
              <Flex alignItems={"center"} gap={2}>
                <Icon boxSize={5} as={FaUser} />
                {/* <Text fontSize="lg">Sign in / Sign up</Text> */}
                <Text fontSize="md" as="b">
                  Sign in / Sign up
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap={2}>
                <Icon boxSize={5} as={FaShoppingCart} />
                <Text fontSize="md" as="b">
                  Cart
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
