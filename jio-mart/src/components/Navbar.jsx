import {
  Heading,
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
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartProvider";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {isAuth, user} = useContext(AuthContext);
  const {count} = useContext(CartContext);

  return (
    <>
      <Box
        bg="#008ecc"
        color="white"
        px={4}
        h={20}
        textAlign="center"
        className="navbar"
      >
        <Box w="90%" pt="2" m="auto">
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            gap="8"
          >
            <HamburgerIcon boxSize={10} onClick={onOpen} />
            <SideDrawer onClose={onClose} isOpen={isOpen} />
            <Link to="/">
              <Image
                src="https://www.jiomart.com/assets/version1669919139/smartweb/images/jiomart_logo_beta.svg"
                alt="logo"
                h="41"
              />
            </Link>
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
            <Link to="/login">
              <Flex alignItems={"center"} gap={2}>
                <Icon boxSize={5} as={FaUser} />
                {/* <Text fontSize="lg">Sign in / Sign up</Text> */}
                
                <Text fontSize="md" as="b">
                  {isAuth ? user : "Sign in / Sign up"}
                </Text>
              </Flex>
              </Link>
              <Link to="/my-cart">
                <Flex alignItems={"center"} gap={2}>
                  <Icon boxSize={5} as={FaShoppingCart}></Icon>
                  {count>0 ? <Box bg='red' borderRadius={'15px'} boxSize='15px' color={'white'} ml='-15px' mt='-18px'> <Text fontSize='xs'>{count}</Text> </Box> : <></>}
                  <Text fontSize="md" as="b">
                    Cart
                  </Text>
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
