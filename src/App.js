import React from 'react'
// import Sidebar from "./Sidebar"; 
import SideBar from './SideBar'
import Header from './Header'
import styled from "styled-components"; 
import "tailwindcss/tailwind.css"

function App() {
  return (
    <div>
      <Header/>
      <AppBody>
        <SideBar/> 
      </AppBody>
      

    </div>
  )
}

export default App


const AppBody = styled.div`
display: flex;
height: 100vh;
`; 