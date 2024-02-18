import { useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";



const App= () => {
  let heroData = [
    {text1:"Dive Into",text2:"What You Love"},
    {text1:"indulge",text2:"Your Passions"},
    {text1:"Give in to",text2:"your Passions"},
  ]

  const[heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus]= useState(true);



  return(
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}

      />


    </div>
  )
}

export default App