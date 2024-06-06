import React, { Suspense, useState} from 'react'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'
import { Outlet } from 'react-router-dom'
import SuspenseLoader from '../Components/Common/SuspenseLoader'
import { Box } from '@mui/material'

function Main() {
  const [openDrawer, setOpenDrawer] = useState(true)

  const toggleDrawer = () => {
    setOpenDrawer(prevState => !prevState)
  }
  return (
  <>
    <Header toggleDrawer={toggleDrawer} />
    <Box>
      <SideBar openDrawer={openDrawer} />
      <Suspense fallback={<SuspenseLoader />}>
        <Outlet context={{openDrawer}} />
      </Suspense>
    </Box>
  </>
  )
}

export default Main