import { useState, useEffect } from "react";
import data from "../data.json";
import OwnSlider from "./OwnSlider";
import { Heading } from "@chakra-ui/react";

const ShopTopCategories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const images = data.topCategories.map((el) => {
        return el.image_url;
    })
    setProducts(images);
  }, []);

  return (
    <>
      <Heading size="md" textAlign="left" m="10">
        Shop From Top Categories
      </Heading>
      <OwnSlider items={products} columns={6} type="image" />
    </>
  );
};

export default ShopTopCategories;
