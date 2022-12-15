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
  ButtonGroup
} from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function SideDrawer({ onClose, isOpen }) {
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
              <Icon boxSize={3} as={CloseIcon} />
            </Flex>
            <ButtonGroup gap="10%" mt='4'>
              <Button colorScheme="#008ecc" variant='outline' size='md' px='50%'>Account</Button>
              <Button colorScheme="#008ecc" variant='outline' size='md' px='50%'>Orders</Button>
            </ButtonGroup>
          </DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
