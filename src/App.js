import { ChakraProvider, Image, Flex, Text, Box } from "@chakra-ui/react"

import {theme} from '../src/styles/theme'
import Header from "./components/Header"  
import TravelTypes from './components/TravelTypes'
import Continent from "./components/Continent"

import Background from '../src/assets/Background.svg'
import Airplane from '../src/assets/Airplane.svg'




function App() {
  return (
    <ChakraProvider theme={theme}>
    <div className="App">
      <Header/>
      <Flex
        as="aside"
        backgroundImage={Background}
        color="green"
        justify="space-between">
        <Box p={20}>
          <Text color="gray.50" fontSize={36}>
            5 Continentes, <br/> infinitas possibilidades
          </Text>
          <Text color="gray.100" fontSize={20}>
          Chegou a hora de tirar do papel a viagem que você <br/> sempre sonhou. 
          </Text>
        </Box>
        <Image src={Airplane}/>
      </Flex>
      <TravelTypes/>
      <Continent/>
    </div>
    </ChakraProvider>
  );
}

export default App;
