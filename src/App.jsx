import { useState,Suspense  } from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Available from './Components/Available'
import Card from './Components/Card'
import Selected from './Components/Selected'
import { ToastContainer } from 'react-toastify';
import Footer from './Components/Footer'


const fetchPlayers = async () =>{
  const res = await fetch("/public/palyer.json")
  return  res.json()
}
const playersPromise = fetchPlayers();

function App() {
    const [coinValue,setCoinValue] = useState(100000000);
    const [flag,setFlag] = useState(false);
    const [purchasedPlayers,setPurchasedPlayers] = useState([]);

     const removePlayer = (p) =>{
    const fileteredData = purchasedPlayers.filter(ply=> ply.player_name!==p.player_name)
    console.log(p)
    setPurchasedPlayers(fileteredData)
    setCoinValue(coinValue+parseInt(p.price.split("USD").join("").split(",").join("")))
   }
 
  return (

    <>
       <Navbar coinValue={coinValue}></Navbar>
       <Banner></Banner>
       <Available setFlag={setFlag} flag={flag} purchasedPlayers={purchasedPlayers}></Available>
       
      {
        !flag?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <Card playersPromise={playersPromise} setCoinValue={setCoinValue} coinValue={coinValue} 
            purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}></Card>
       </Suspense>:<Selected flag={flag} setFlag={setFlag} purchasedPlayers={purchasedPlayers}  removePlayer={removePlayer}></Selected>
      }
       
       <Footer></Footer>
     <ToastContainer />
    </>
  )
}

export default App
