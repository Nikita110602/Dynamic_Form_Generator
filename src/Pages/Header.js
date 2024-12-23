import React from 'react'
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import {Box, Text } from "@chakra-ui/react";
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Header = () => {
  return (
    <Box width={"100%"} display = "flex" padding={["0px" , "20px"]} alignItems={"center"} justifyContent={"space-between"}>
        {/* First Part */}
        <Box  display = "flex" alignItems={"center"}  justifyContent={"space-between"} gap={"12px"}>
            {/* <VerifiedUserIcon sx={{ fontSize: 80 }} /> */}
            <Text fontSize={["2xl", '4xl']}>Form Maker</Text>
        </Box>

        {/* Second Part */}

        
     
        <ColorModeSwitcher />
        
    </Box>
  )
}

export default Header;