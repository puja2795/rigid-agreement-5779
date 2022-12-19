import {
  Flex,
  Card,
  Image,
  Heading,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { useContext } from "react";


export default function SingleProductCard() {
  const {setCount} = useContext(CartContext);
  const { id } = useParams();

  const [prodId, setProdId] = useState(null);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProdId(id);
    setCart(JSON.parse(localStorage.getItem('cart')));
  }, []);

  useEffect(() => {
    for (let item of data.all_products) {
      if (item.id == prodId) {
        setProduct(item);
        break;
      }
    }
  }, [prodId]);

  const addCartHandler = () => {
    setCount(cart.length + 1)
    setCart([...cart, product])
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  return (
    <>
      <Box>
        <Flex gap='10%'>
          <Box w="40%">
            <Image m="auto" w='80%' src={product.image} alt="single product" />
          </Box>

          <Box m="20px" w="40%">
            <Heading textAlign='left' size="md">{product.name}</Heading>
            <Flex mt='40px' gap='30px'>

            <Heading size="md">₹ {product.discount_price}</Heading>
            <Text>M.R.P:</Text>
            <Text textDecoration="line-through" ml='-25px'>
             ₹ {product.original_price}
            </Text>
            </Flex>
            <Flex gap='50px' mt='15px'>
                <Text>You Save: ₹ {Number(product.original_price) - Number(product.discount_price)} </Text>
                <Text>Inclusive of all taxes</Text>
            </Flex>
            <Heading  mt='15px' size='sm' color='green' textAlign='left'>IN Stock</Heading>
            <Flex gap='20px' mt='75px'>
                <Button color='#008ecc' bg='white' variant='outline' onClick={addCartHandler}>Add to Cart</Button>
                <Button bg='#008ecc' color='white'>Buy Now</Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
