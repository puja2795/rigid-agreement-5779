import {
  Flex,
  Card,
  CardBody,
  Image,
  Icon,
  Box,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon, AddIcon } from "@chakra-ui/icons";
import { useState } from "react";

const OwnSlider = ({ items, columns, type }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(columns);

  const prevHandler = (e) => {
    // e.prevent
    setStart(start <= 0 ? 0 : start - 1);
    setEnd(end <= columns ? columns : end - 1);
  };

  const nextHandler = () => {
    setStart(
      start + columns >= items.length ? items.length - columns : start + 1
    );
    setEnd(end == items.length ? end : end + 1);
  };

  return (
    <Flex>
      <Box w="5%" margin="auto" onClick={prevHandler}>
        <Icon boxSize={10} as={ChevronLeftIcon} />
      </Box>
      <Flex gap={3}>
        {type == "image" &&
          items.slice(start, end).map((item, index) => {
            return (
              <Card maxW="sm" key={index}>
                <CardBody>
                  <Image src={item} alt="item-photo" borderRadius="lg" />
                </CardBody>
              </Card>
            );
          })}
        {type == "card" &&
          items.slice(start, end).map((item, index) => {
            return (
              <Card maxW="sm" key={index}>
                <CardBody>
                  <Image
                    src={item.product_main_image_url}
                    alt="item-photo"
                    borderRadius="lg"
                    h='200px'
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Heading size="md">Living room Sofa</Heading>
                    <Text color="blue.600" fontSize="2xl">
                      $450
                    </Text>
                    <Button>
                      <Flex gap='15%'>
                        <Text>Add to Cart</Text>
                        <Icon as={AddIcon} />
                      </Flex>
                    </Button>
                  </Stack>
                </CardBody>
              </Card>
            );
          })}
      </Flex>
      <Box w="5%" margin="auto" onClick={nextHandler}>
        <Icon boxSize={10} as={ChevronRightIcon} />
      </Box>
    </Flex>
  );
};

export default OwnSlider;
