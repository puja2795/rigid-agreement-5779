import { ReactNode } from 'react';
import {
  Box,
  Image,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Button,
  Flex,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';


const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={12}>
          <Stack align={'flex-start'}>
            <ListHeader>MOST POPULAR CATEGORIES</ListHeader>
            <Link href={'#'}>Staples</Link>
            <Link href={'#'}>Beverages</Link>
            <Link href={'#'}>Personal Care</Link>
            <Link href={'#'}>Home Care</Link>
            <Link href={'#'}>Fruits and Vegetables</Link>
            <Link href={'#'}>Baby Care</Link>
            <Link href={'#'}>Snacks & Branded Foods</Link>
            <Link href={'#'}>Dairy & Bakery</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>CUSTOMER SERVICES</ListHeader>
            <Link href={'#'}>About Usr</Link>
            <Link href={'#'}>FAQ</Link>
            <Link href={'#'}>Terms and conditions</Link>
            <Link href={'#'}>Privacy policy</Link>
            <Link href={'#'}>E-waste Policy</Link>
            <Link href={'#'}>Cancellation and return policy</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>CONTACT US</ListHeader>
            <Text textAlign='left'>WhatsApp us : 70003 70003</Text>
            <Text textAlign='left'>Call Us : 1800 890 1222 8:00 AM to 8:00 PM, 365 days</Text>
            <Text textAlign='left'>Please note that you are accessing the BETA Version of www.jiomart.com</Text>
            <Text textAlign='left'>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on cs@jiomart.com</Text>
            <ListHeader>DOWNLOAD APP</ListHeader>
            <Flex gap='5'>
            <Image height='50px' src='https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png'/>
            <Image height='50px'  src='https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png'/>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')} h='50px'>
        <Flex gap={100}>
        <Text m='auto' mt='10px'>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</Text>
          <Text m='auto' mt='10px'>© 2022 All rights reserved. Reliance Retail Ltd</Text>
        </Flex>
      </Box>
    </Box>
  );
}