import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Welcome from './contents/Welcome';
// import NotFound from './contents/NotFound';
// import Checkout from './contents/Checkout';
import SignIn from './forms/Signin';
import Album from './forms/Album';
// import MiniDrawer from './layout/MiniDrawer';
// import NavTabs from './layout/NavTabs';

function App() {
    return (
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/album" element={<Album/>} />
          {/*<Route path="/checkout" element={Checkout} />*/}
          {/*<Route path="/minidrawer" element={MiniDrawer} />*/}
          {/*<Route path="/navtabs" element={NavTabs} />*/}
          {/*<Route path="*" element={NotFound} />   */}
        </Routes>
    )
}
export default App;