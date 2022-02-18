import { useState } from 'react'
import { Backdrop } from '../Backdrop'
import { HamburgerButton } from './components/HamburgerButton'
import { SideBar } from './components/SideBar'

export const Navigation = () => {
   const [openDrawer, setOpenDrawer] = useState<boolean>(false)

   return (
      <>
         <SideBar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
         <HamburgerButton drawerHandler={setOpenDrawer} />
         {openDrawer && <Backdrop drawerHandler={setOpenDrawer} />}
      </>
   )
}