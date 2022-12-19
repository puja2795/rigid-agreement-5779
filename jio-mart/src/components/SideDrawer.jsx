import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Flex,
  Icon,
  Text,
  Box,
  Spacer,
  Button,
  ButtonGroup,Divider
} from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function SideDrawer({ onClose, isOpen }) {
  const drawItems = [
    "Home",
    "Shop by Category",
    "My List",
    "JioMart Wallet",
    "JioMart Gift Store",
    "JioMrt Gift Card",
    "GoGreen with JioMart",
    "Coupon Store",
    "All Offers",
  ];
  return (
    <>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" color="white" bg="#008ecc">
            <Flex minWidth="max-content" alignItems="center" gap="2">
              <Flex gap={3}>
                <Icon boxSize={6} color="white" as={FaRegUserCircle} />
                <Text>Hello, Sign in</Text>
              </Flex>
              <Spacer />
              <Button backgroundColor='transparent'><Icon boxSize={3} as={CloseIcon} onClick={onClose} /></Button>
            </Flex>
            <ButtonGroup gap="10%" mt="4">
              <Button
                colorScheme="#008ecc"
                variant="outline"
                size="md"
                px="50%"
              >
                Account
              </Button>
              <Button
                colorScheme="#008ecc"
                variant="outline"
                size="md"
                px="50%"
              >
                Orders
              </Button>
            </ButtonGroup>
          </DrawerHeader>
          <DrawerBody>
            {drawItems.map((el,index) => {
              return <Box pb='20px' key={index}>{el}</Box>;
            })}
            <Divider orientation='horizontal' />
            <Box pb='20px' pt="20px">My Account</Box>
            <Box pb='20px'>Need Help</Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
