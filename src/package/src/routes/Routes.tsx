import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomeView } from '../views/HomeView'
import { ConnectToWallet } from '../views/ConnectToWallet'
import { VerifyWalletExtension } from '../views/VerifyWalletExtension'
import RoutingPath from './RoutingPath'

export const Routing = (props: { children: React.ReactChild }) => {
   return (
      <Router>
         {props.children}
         <Routes>
            <Route path={RoutingPath.home} element={<HomeView />} />
            <Route path={RoutingPath.verifyWalletExtension} element={<VerifyWalletExtension />} />
            <Route path={RoutingPath.connectToWallet} element={<ConnectToWallet />} />
         </Routes>
      </Router>
   )
}


