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
  const width = (100/columns).toString()+'%';
  const imageWidth = (90/columns).toString()+'%';

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
              <Image key={index} w={imageWidth} m="auto" src={item} alt="item-photo" borderRadius="lg" _hover={{transform: "scale(1.1)", transition:"transform .2s"}}/>
            );
          })}
        {type == "card" &&
          items.slice(start, end).map((item, index) => {
            return (
              <Card key={index} w={width} >
                <CardBody>
                  <Box>
                    <Image
                      src={item["product-image-photo-src"]}
                      alt="item-photo"
                      borderRadius="lg" m='auto' _hover={{transform: "scale(1.1)", transition:"transform .2s"}}
                    />
                  </Box>
                  <Stack mt="6" spacing="3">
                    <Heading size="sm" h='35px' textAlign='left'>{item.clsgetname.substring(0,50)}</Heading>
                    <Heading size="sm" textAlign='left'>₹{item.final_price}</Heading>
                    <Heading size="sm" textAlign='left'><Flex>M.R.P:<Text textDecoration='line-through'>₹{item.price_2}</Text></Flex></Heading>
                    <Text color="#00a100" fontSize="md" textAlign='left'>
                    {item.save_price}
                    </Text>
                    <Button backgroundColor='#008ecc' color='white' _hover={{ bg: "008ecc" }}>
                      <Flex gap={10}>
                        <Box ><Text as='b'>Add to Cart</Text></Box>
                        <Box ><Icon as={AddIcon} mt="0"/></Box>
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
