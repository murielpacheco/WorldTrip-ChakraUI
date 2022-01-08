import React from 'react';

import { Grid, GridItem, Image } from '@chakra-ui/react'

import Cocktail from '../../assets/cocktail 1.svg'
import Surf from '../../assets/surf 1.svg'
import Building from '../../assets/building 1.svg'
import Museum from '../../assets/museum 1.svg'
import Earth from '../../assets/earth 1.svg'
import Divider from '../../assets/Divider.svg'

function TravelTypes() {
  return (
    <>
    <Grid
      m="auto"
      mt="108"
      templateColumns='repeat(5,1fr)'
      gap={4}
      width="1160px"
      height="145px">
      <GridItem as="img" src={Cocktail} width="85px" height="85px"/>
      <GridItem as="img" src={Surf} width="85px" height="85px"/>
      <GridItem as="img" src={Building} width="85px" height="85px"/>
      <GridItem as="img" src={Museum} width="85px" height="85px"/>
      <GridItem as="img" src={Earth} width="85px" height="85px"/>
    </Grid>
    <Image src={Divider} alt="Traço divisor" m="auto"/>
    </>
  );
}

export default TravelTypes;