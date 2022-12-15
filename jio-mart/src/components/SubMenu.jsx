import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

export default function SubMenu({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <MenuButton color="black" onMouseEnter={onOpen} onMouseLeave={onClose}>
        {item.name}
        {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </MenuButton>
      <MenuList bg="#ececed" onMouseEnter={onOpen} onMouseLeave={onClose}>
        {/* MenuItems are not rendered unless Menu is open */}
        {item.items.map((el, index) => (
          <MenuItem bg="#ececed" color="black" key={index} _hover={{ bg: "white" }}>
            {el}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
