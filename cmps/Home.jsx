import {AnimalList} from "./AnimalList.jsx";
import { SeasonClock } from "./SeasonClock.jsx";

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
          <SeasonClock/>
       </section>
    )
}

