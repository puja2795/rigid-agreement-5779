import {
  Flex,
  Box,
  Image,
  Heading,
  Text,
  InputGroup,
  Input,
  InputLeftAddon,
  Button,
  Icon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [isEqual, setIsEqual] = useState(false);
  const [phone, setPhone] = useState(null);
  const [otp, setOtp] = useState(null);
  const [enteredOtp, setEnteredOtp] = useState(null);
  const navigate = useNavigate();
  const {isAuth, user, setUser, loginUser, logoutUser} = useContext(AuthContext);

  const btnHandler = () => {
    if(phone == null || phone.length < 10 || phone.length>10){
      return
    }
    setOtp(Math.floor(1000 + Math.random() * 9000));
    localStorage.setItem('otp', otp);
    console.log(otp, phone)

  };

  const inputHandler = (e) => {
    console.log(e.target.value)
    setPhone(e.target.value);
  }

  const otpHandler = (e) => {
    console.log(e.target.value, otp)
    setEnteredOtp(Number(e.target.value));
  }

  const verifyHandler = (e) => {
    loginUser();
    setUser(phone);
    navigate("/my-cart")
  }

  const logOutHandler = () => {
    logoutUser();
    window.location.replace("/");
  }

  return (
    <>
      <Flex bg="#f6f6f7" p="20px" gap="20px">
        <Box w="90%" bg="white" borderRadius="10px" m="auto">
          <Flex>
            <Image
              src="https://www.jiomart.com/msassets/images/login-banner.jpg"
              borderRadius="10px"
            />
            {
              isAuth ?<Box w="40%" ml="auto" mt="30px">
              <Heading>Hi, {user}</Heading>
              <Button bg='#008ecc' color={'white'} mt='40px' w='70%' onClick={logOutHandler}>Logout</Button>
            </Box> :
            <Box w="40%" ml="auto" mt="30px">
            <Heading size="lg" textAlign="left">
              Sign in
            </Heading>
            <Text mt="20px" textAlign="left">
              Sign in to access your Orders, Offers and Wishlist.
            </Text>
            <InputGroup mt="40px" w="70%">
              <InputLeftAddon children="+91" />
              <Input type="tel" placeholder="Enter Your Mobile Number" onChange={inputHandler}/>
            </InputGroup>
            {otp != null && <>
            <InputGroup mt="40px" w="70%">
              <Input placeholder="Enter OTP" onChange={otpHandler}/>
            </InputGroup>
            <Text>OTP: {otp}</Text>
            <InputGroup>
            <Button bg='#008ecc' color={'white'} mt='40px' w='70%' disabled={otp != enteredOtp} onClick={verifyHandler}>Verify</Button>
            </InputGroup>
            
            </>
            }
            {otp == null && <Button
              backgroundColor="#008ecc"
              w="60px"
              h="60px"
              borderRadius="50%"
              m="40px"
              onClick={btnHandler}
            >
              <Icon as={ChevronRightIcon} boxSize={10} color="white"></Icon>
            </Button>}
          </Box>
            }
            
            
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Login
