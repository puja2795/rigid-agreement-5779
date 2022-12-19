import { Card, CardBody, Image, Stack, Heading, Flex,Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

  return (
    <>
    <Card maxW="lg">
      <CardBody>
        <Link to={`/single_product/${product.id}`}>

        <Image
          h="200px"
          m="auto"
          src={product.image}
          alt="product_image"
          borderRadius="lg" _hover={{transform: "scale(1.2)", transition:"transform .3s"}}
          />
          </Link>
        <Stack mt="6" spacing="3">
          <Heading size="sm" h="35px" textAlign="center">
            {product.name.substring(0, 50)}
          </Heading>
          <Flex>
            {product.discount_price>0 ? 
            <><Heading fontSize="md">{product.discount_price}</Heading>
            <Text fontSize="md" ml='auto' textDecoration="line-through">
              {product.original_price}
            </Text></>
            : <Heading fontSize="md">M.R.P: {product.original_price}</Heading>}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
    </>
  );
};

export default ProductCard;
