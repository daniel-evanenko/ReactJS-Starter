import {AnimalList} from "./AnimalList.jsx";
import { CountDown } from "./CountDown.jsx";
import { SeasonClock } from "./SeasonClock.jsx";
import { WatcherIndex } from "./WatcherIndex.jsx";

const { useState, useEffect } = React

const animalInfos = [
  {type: 'Malayan Tiger', count: 787},
  {type: 'Mountain Gorilla', count: 212},
  {type: 'Fin Whale', count: 28},
]


export function Home() {
    return (
        <section className="home">
            <h2>Home Sweet Home</h2>
          {/* <AnimalList animals={animalInfos}/> */}
          {/* <SeasonClock/> */}
          {/* <CountDown toTime={Date.now() + 1000*10} startFrom={10} onDone={()=>{
            console.log('Done!')
            }} /> */}
            <WatcherIndex/>

       </section>
    )
}

