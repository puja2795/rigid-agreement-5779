
import { useState, useEffect } from "react";
import data from "../data.json";
import OwnSlider from "./OwnSlider";
import { Heading } from "@chakra-ui/react";

const DailyKitchenEssentials = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(data.dailyKitchen);
    },[])
    
    
    return (
        <>
        <Heading size="md" textAlign="left" m="10">Daily Kitchen Essentials</Heading>
        <OwnSlider items={products} columns={6} type='image'/>
        </>
    )
};

export default DailyKitchenEssentials;