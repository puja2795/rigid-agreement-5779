import { SimpleGrid,Box,Image } from '@chakra-ui/react'
import data from "../data.json";

const GridImages = () => {
  return (
    // <SimpleGrid columns={2} spacing="20px" minChildWidth='100%'>
        // {data['grid-data'].map((el) => {
        //     return <Box width='100%'><Image src ={el} h="100%"/></Box> 
        // })}
    // </SimpleGrid>
    <SimpleGrid minChildWidth='40%' spacingX='20px' spacingY='40px' m='20px'>
      {data['grid-data'].map((el) => {
            return <Box height='400px'><Image src ={el} w="100%"/></Box>
        })}
    
  </SimpleGrid>
  );
};

export default GridImages;
