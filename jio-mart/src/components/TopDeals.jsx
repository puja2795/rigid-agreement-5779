import { useState, useEffect } from "react";
import data from "../data.json";
import OwnSlider from "./OwnSlider";
import { Heading } from "@chakra-ui/react";

const TopDeals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data["top-deals"]);
  }, []);

  return (
    <>
      <Heading size="md" textAlign="left" m="10">
        Top Deals
      </Heading>
      <OwnSlider items={products} columns={5} type="card" />
    </>
  );
};

export default TopDeals;
