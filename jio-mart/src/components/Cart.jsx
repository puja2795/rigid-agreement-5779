import {
  Box,
  Card,
  Flex,
  Grid,
  Image,
  Text,
  Heading,
  Divider,
  Button,
  useSafeLayoutEffect,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { setCount } = useContext(CartContext);
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let o_total = 0;
  let d_total = 0;
  const [toggle, setToggle] = useState(false);

  const orderPlacedHandler = () => {
    alert("Order Placed Successfully");
    localStorage.setItem("cart", JSON.stringify([]));
    setCount(0);
    // navigate("/");
  };

  useEffect(() => {
    cart = JSON.parse(localStorage.getItem("cart"));
  }, [toggle]);

  const removeItemHandler = (index) => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCount(cart.length);
    setToggle(!toggle);
  };

  return (
    <>
      { cart.length > 0 ?
      <Flex bg="#f6f6f7" p="20px" gap="20px">
        <Heading size="lg">My Cart</Heading>
        <Box w="60%" bg="white" borderRadius="10px">
          {cart.map((el, index) => {
            o_total += +el.original_price;
            d_total += +el.discount_price;
            return (
              <Card key={index} w="95%" m="20px">
                <Flex gap="20px">
                  <Image src={el.image} />
                  <Box>
                    <Heading textAlign={"left"} size="sm" mt="10px">
                      {el.name}
                    </Heading>
                    <Flex gap={"20px"} mt="30px">
                      <Heading textAlign={"left"} size="sm">
                        ₹ {el.discount_price}
                      </Heading>
                      <Text textDecoration="line-through">
                        ₹ {el.original_price}
                      </Text>
                      <Heading size={"sm"} color={"green"}>
                        You Save ₹{" "}
                        {Number(el.original_price) - Number(el.discount_price)}
                      </Heading>
                    </Flex>
                  </Box>
                </Flex>
                <Button
                  bg={"#008ecc"}
                  color="white"
                  ml="auto"
                  mr={"20px"}
                  mb={"10px"}
                  onClick={(index) => {
                    removeItemHandler(index);
                  }}
                >
                  Remove
                </Button>
              </Card>
            );
          })}
        </Box>
        <Box w="40%" gap="20px">
          <Box bg="white" borderRadius="10px" p="20px">
            <Heading size={"lg"} pb={"50px"}>
              Payment Details
            </Heading>
            <Flex>
              <Text color={"gray"}>MRP Total</Text>
              <Text ml="auto">₹ {o_total}</Text>
            </Flex>
            <Divider />
            <Flex>
              <Text color={"gray"}>Product Discount</Text>
              <Text ml="auto">- ₹ {o_total - d_total}</Text>
            </Flex>
            <Divider />
            <Flex>
              <Text color={"gray"}>Total Amount</Text>
              <Text ml="auto">₹ {d_total}</Text>
            </Flex>
            <Heading color={"#00aaa5"} size={"sm"} textAlign={"right"}>
              You Save: ₹ {o_total - d_total}
            </Heading>
            <Button
              bg={"#008ecc"}
              color="white"
              mt={"50px"}
              onClick={orderPlacedHandler}
            >
              Place Order
            </Button>
          </Box>
        </Box>
      </Flex>
      :
      <Flex bg="#f6f6f7" p="50px" gap="20px">
        <Box w="90%" bg="white" borderRadius="10px" boxSize='sm' m='auto'>
          <Image
            src="https://www.jiomart.com/msassets/images/emptycart.svg"
            alt="cart"
          ></Image>
          <Text fontSize='xl' mt='30px'>Your Cart is Empty</Text>
        </Box>
      </Flex> }
    </> 
  );
};

export default Cart;
