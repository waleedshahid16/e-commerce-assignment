import { Box } from '@mui/material'
import React from 'react'
import HeroSection from './HeroSection'
import HeroCardImg from './HeroCardImg'
import Products from './Products'
import CartButton from './CartButton'

const Home = () => {
  return (
     <Box className="relative">
        
        <HeroSection />
        <HeroCardImg />
        <Products />
        <Box className="fixed right-0 top-1/2 transform -translate-y-1/2">
          <CartButton />
        </Box>
      </Box>
  )
}

export default Home
