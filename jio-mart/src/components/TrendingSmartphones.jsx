import { useState, useEffect } from "react";
import data from "../data.json";
import OwnSlider from "./OwnSlider";
import { Heading } from "@chakra-ui/react";

const TrendingSmartPhones = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.trendingSmartPhones);
  }, []);

  return (
    <>
      <Heading size="md" textAlign="left" m="10">
        Trending Smartphones
      </Heading>
      <OwnSlider items={products} columns={5} type="card" />
    </>
  );
};

export default TrendingSmartPhones;
