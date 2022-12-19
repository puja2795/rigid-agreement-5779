import { useState, useEffect } from "react";
import data from "../data.json";
import { Button, Flex, Grid, GridItem,Heading,Text } from "@chakra-ui/react";
import ProductCard from "./ProductCard";

const AllProducts = ({type}) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setnewProduct] = useState([]);
  const [isSorted, setIsSorted] = useState()
  
  useEffect(() => {
    switch(type){
      case "fruits":
        setProducts(data.fruits);
        break;
      case "home":
        setProducts(data.home);
        break;
      case "groceries":
        setProducts(data.groceries);
        break;
      default:
        setProducts(data.all_products);
    }
    
  }, [type]);

  const highToLowHandler = () => {
    // setIsSorted(false)
    setnewProduct(products.sort((a,b) => {
        return Number(b.discount_price ) - Number(a.discount_price);
    }))
    setIsSorted(true)
  }

  const lowToHighHandler = () => {
    // setIsSorted(false)
    setnewProduct(products.sort((a,b) => {
        return Number(a.discount_price ) - Number(b.discount_price);
    }))
    setIsSorted(false)
  }

  useEffect(() => {
    !!newProduct.length && setProducts(newProduct)
  }, [newProduct, isSorted])
 

  return (
    <>
    <Flex>
    <Heading size='lg' textAlign='left' m='20px'>All Products</Heading>
    <Flex ml='auto' mt='10px' mr='10px' gap='10'>
        <Heading size='md' mt='5px'>Sort by:</Heading>
        <Button onClick={highToLowHandler}>High to Low</Button>
        <Button onClick={lowToHighHandler}>Low to High</Button>
    </Flex>
    </Flex>
    
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {products.map((el) => {
            return <GridItem w="100%" key={el.id} >
                <ProductCard product={el}
              />
          </GridItem>;
        })}
      </Grid>
    </>
  );
};

export default AllProducts;
