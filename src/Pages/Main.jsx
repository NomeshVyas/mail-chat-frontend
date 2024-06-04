import React, { useState} from 'react'
import Header from '../Components/Header'
import SideBar from '../Components/SideBar'

function Main() {
  const [openDrawer, setOpenDrawer] = useState(true)

  const toggleDrawer = () => {
    setOpenDrawer(prevState => !prevState)
  }
  return (
    <>
     <Header toggleDrawer={toggleDrawer} />
     <SideBar openDrawer={openDrawer} />
     Display Mails
    </>
  )
}

export default Main