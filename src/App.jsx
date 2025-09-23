import { useState } from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Available from './Components/Available'
import Card from './Components/Card'

function App() {
    const [coinValue,setCoinValue] = useState(60000);

  return (

    <>
       <Navbar coinValue={coinValue}></Navbar>
       <Banner></Banner>
       <Available></Available>
       <Card></Card>

    </>
  )
}

export default App
