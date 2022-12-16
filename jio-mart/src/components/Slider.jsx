import { Box } from '@chakra-ui/react';
import ReactCardSlider from 'react-card-slider-component';
// a slide object contains the image link, title and function/click event for when a user clicks on a card

const sliderClick = () => {
    console.log("Just do it")
}

const Slider = ({slides}) =>{
    

    return(
        <Box w="100%" border="3px">
            <ReactCardSlider slides={slides} />
        </Box>
    )
}

export default Slider;
