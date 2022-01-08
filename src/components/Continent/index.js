import { Text, Box, Flex, VStack } from "@chakra-ui/react";
import ContinentImg from '../../assets/Continent.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './styles.css'

import SwiperCore, {
  Navigation, Pagination, Mousewheel, Keyboard
} from 'swiper';

SwiperCore.use([Navigation, Pagination,Mousewheel,Keyboard])

function Continent() {
  return (
    <>
      <Box
        width="840px"
        height="100px"
        m="auto"
        mt="44px"
        mb="48px"
        textAlign="center">
        <Text color="gray.900" fontSize={36} fontWeight="semibold"> 
        Vamos nessa? <br/> Então escolha seu continente
        </Text>
      </Box>

      <Swiper
        navigation={true}
        pagination={true}
        mousewheel={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="Swiper-Container">
          
      <SwiperSlide>
        <Flex as="section" backgroundImage={ContinentImg} backgroundRepeat="no-repeat" width="1240" height="450" ml="36" mb="8" borderRadius={8}>
          <VStack width="100%" justify="center">
            <Text fontSize="48px" fontWeight="bold" color="gray.50">
              Europa
            </Text>
            <Text fontSize="24px" fontWeight="bold" color="gray.50">
              O continente mais antigo
            </Text>
          </VStack>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex as="section" backgroundImage={ContinentImg} backgroundRepeat="no-repeat" width="1240" height="450" ml="36" mb="8" borderRadius={8}>
        </Flex>
      </SwiperSlide>
      <SwiperSlide>
        <Flex as="section" backgroundImage={ContinentImg} backgroundRepeat="no-repeat" width="1240" height="450" ml="36" mb="8" borderRadius={8}>
        </Flex>
      </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Continent;