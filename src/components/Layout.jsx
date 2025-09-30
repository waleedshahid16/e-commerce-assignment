
import { Box } from '@mui/material'
import React from 'react'
import AppBar from './AppBar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Box sx={{ mt: 8 }}> 
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
