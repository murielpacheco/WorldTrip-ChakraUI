import React from 'react';

import { Flex, Image  } from '@chakra-ui/react';

import Logo from '../../assets/Logo.svg'


function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      height="100px"
      justify="center"
      align="center">
      <Image
        src={Logo}
        alt="Logo worldtrip"
        width="184px"
        height="46px" />
    </Flex>
  );
}

export default Header;