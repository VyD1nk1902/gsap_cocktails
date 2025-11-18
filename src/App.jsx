import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";
import React from 'react'

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div className="flex-center h-[100vh]">
            <h1 className="text-3xl text-green-500">Hi Global</h1>
        </div>
    )
}
export default App
