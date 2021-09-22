import React from 'react'
// import Sidebar from "./Sidebar"; 
import SideBar from './SideBar'
import Header from './Header'
import styled from "styled-components"; 
import "tailwindcss/tailwind.css"
import {Provider} from "react-redux"; 
import {store} from "./store"; 
function App() {
  return (
    <div>
      <Provider store ={store}>
         <Header/>
        <AppBody>
        <SideBar/> 
      </AppBody>
      </Provider>
     
      

    </div>
  )
}

export default App


const AppBody = styled.div`
display: flex;
height: 100vh;
`; 