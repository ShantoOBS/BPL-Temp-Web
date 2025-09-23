import React, { use  } from 'react'
import Cards from './Cards'
const Card = ({ playersPromise, setCoinValue, coinValue, purchasedPlayers, setPurchasedPlayers }) => {

    const playerData = use(playersPromise);

    
    

    return (
        <div className='max-w-[1150px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-50'>

            {
                playerData.map(ele => <Cards ele={ele} setCoinValue={setCoinValue} coinValue={coinValue}
                    purchasedPlayers={purchasedPlayers} 
                    setPurchasedPlayers={setPurchasedPlayers} ></Cards>)
            }



        </div>
    )
}

export default Card
