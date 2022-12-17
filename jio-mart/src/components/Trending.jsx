import axios from "axios";
import { useState, useEffect } from "react";
import data from "../data.json";
import OwnSlider from "./OwnSlider";
import { Heading } from "@chakra-ui/react";

const Trending = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const images= data.trending.map((el) => {
            return el.product_main_image_url;
        })
        setProducts(images);
    }, [])
    
    return (
        <>
        <Heading size="md" textAlign="left" m="10">Trending Brands</Heading>
        <OwnSlider items={products} columns={5} type='image'/>
        </>
    )
};

export default Trending;
