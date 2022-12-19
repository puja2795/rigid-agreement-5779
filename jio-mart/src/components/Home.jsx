import Carousel, { CarouselItem } from "./Carousel";
import { Box, Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Slider from "./Slider";
import OwnSlider from "./OwnSlider";
import Trending from "./Trending";
import TopDeals from "./TopDeals";
import ShopTopCategories from "./ShopTopCategories";
import DailyKitchenEssentials from "./DailyKitchenEssentials";
import TrendingSmartPhones from "./TrendingSmartphones";
import GridImages from "./GridImages";
import Footer from "./Footer";
import TopPets from "./TopPets";

const Home = () => {
  const cards = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1671108343_Mumbai.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1671129408_HPMC_Dec_16th_WEB.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669913386_1669808764_KV_1680x320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1671091658_Oneplus_10T_Desktop_web_num.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670869755_Winter-Sips_1680X320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1671127270_Har-thali-me-Basmati_1680x320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670869141_1670434489_100-Handwoven-Fashion_1680x320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1671034200_Health-and-wellness-banner_1680x320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670868733_dal--pulses_1680x320.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670993067_Web_Mumbai_PremiumFruits.jpg",
  ];

  const discountCards = [
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669828307_MobiKwik_1240x209.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670694788_1240x209.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1670539009_1240x209.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669828421_CredPay_1240x209.jpg",
    "https://www.jiomart.com/images/cms/aw_rbslider/slides/1669828355_Simpl_Adapt_1240x209.jpg",
  ];

  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "This is a title",
      description: "This is a description",
    },
    {
      image: "https://picsum.photos/600/500",
      title: "This is a second title",
      description: "This is a second description",
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      description: "This is a third description",
    },
    {
      image: "https://picsum.photos/500/400",
      title: "This is a fourth title",
      description: "This is a fourth description",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "This is a fifth title",
      description: "This is a fifth description",
    },
    {
      image: "https://picsum.photos/800/700",
      title: "This is a sixth title",
      description: "This is a sixth description",
    },
    {
      image: "https://picsum.photos/300/400",
      title: "This is a seventh title",
      description: "This is a seventh description",
    },
  ];

  return (
    <>
      <Flex>
        <Box margin="auto">
          <Icon as={ChevronLeftIcon} boxSize={10}></Icon>
        </Box>
        <Carousel>
          {cards.map((card, index) => {
            return (
              <CarouselItem key={index}>
                <Image w="100%" src={card} />
              </CarouselItem>
            );
          })}
        </Carousel>
        <Box margin="auto">
          <Icon as={ChevronRightIcon} boxSize={10}></Icon>
        </Box>
      </Flex>
      <Box>
        <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1667281294_bLOCK_BUSTER_dEALS_1_Desktop.jpg" />
        <Image src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1671128804_Static_Banner_FF_web.jpg" />
      </Box>
      <Flex>
        <Box margin="auto">
          <Icon as={ChevronLeftIcon} boxSize={10}></Icon>
        </Box>
        <Carousel>
          {discountCards.map((card, index) => {
            return (
              <CarouselItem key={index}>
                {<Image w="100%" src={card} />}
              </CarouselItem>
            );
          })}
        </Carousel>
        <Box margin="auto">
          <Icon as={ChevronRightIcon} boxSize={10}></Icon>
        </Box>
      </Flex>
      <Box>
        <Image
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1668663411_Sim-Delivery_1240_X_194_px_web.jpg"
          width="100%"
        />
        <Image
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1671129003_SlimBanners_Dec_16th_web.jpg"
          width="100%"
        />
      </Box>
      <Trending />
      <ShopTopCategories />
      <TopDeals />
      <DailyKitchenEssentials />
      <TrendingSmartPhones />
      <GridImages />
      <TopPets />
      <Footer />
    </>
  );
};

export default Home;
