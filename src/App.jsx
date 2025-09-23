import { useState } from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
function App() {
    const [coinValue,setCoinValue] = useState(60000);

  return (

    <>
       <Navbar coinValue={coinValue}></Navbar>
       <Banner></Banner>

    </>
  )
}

export default App
