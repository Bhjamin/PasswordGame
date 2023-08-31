import Input from "./Input"
import Hints from "./Hints"
import Challenges from "./Challenges"
import { useState } from "react"

const Main = () => {

    const [input, setInput] = useState("")
    const [challenge, setChallenge] = useState(0)

    return(
        <div className="w-full h-full flex flex-col items-center gap-8 p-4">
            <div className="flex flex-col items-center border-2 border-black p-1 px-3 shadow-[0_12px_20px_rgb(0,0,0,0.2)] rounded">
            <h1 className="text-xl sm:text-2xl lg:text-3xl text-[#1D7874] font-bold uppercase">The Password Game</h1>
            <p className="text-[10px] text-[#071E22] font-medium">Dedicated to my friends Alex and Ryan</p>
            </div>

            <Hints challenge={challenge} />

            <Input setInput={setInput} />

            <Challenges input={input} challenge={challenge} setChallenge={setChallenge}  />

        </div>
    )
}

export default Main