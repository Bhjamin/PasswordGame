import arrow from '../assets/toggleArrow.png'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const Hints = ({challenge}) => {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="w-full md:w-[75%] lg:w-[25%] flex flex-col items-center border-2 border-[#1D7874] rounded">
            <div className="w-full flex">
            <p className="w-[90%] text-start p-2 font-medium uppercase">Get a hint</p>
            <button onClick={() => setIsOpen(!isOpen)} className='w-[11%] bg-[#1D7874] flex justify-center items-center p-2 group'><img src={arrow} className={`w-4 ${isOpen ? 'rotate-0 group-hover:translate-y-[-2px]' : 'rotate-180 group-hover:translate-y-[2px]'} transition-all duration-200`} /></button>
            </div>
            <AnimatePresence>
                {
                    isOpen ?
                    <motion.div initial={{height: 0}} animate={{height: 'auto'}} exit={{height: 0}} className='w-full border-t-2 border-[#1D7874] overflow-hidden'>
                        <div className='w-full flex justify-center items-center'>

                        {
                            challenge === 2 ?
                            <p className='p-4 text-base font-medium'>Special characters include <span className='font-semibold'>@ ! # $ % ^ & * _ + ( )</span></p>
                            :
                            challenge === 4 ?
                            <p className='p-4 text-base font-medium'> Think of the top two numbers in the world </p>
                            :
                            challenge === 5 ?
                            <p className='p-4 text-base font-medium'> Rhymes with BlabberFurl </p>
                            :
                            challenge === 7 ?
                            <p className='p-4 text-base font-medium'> He is super short and likes ketchup </p>
                            :
                            challenge === 8 ?
                            <p className='p-4 text-base font-medium'> I think he has killed people from his time in the military but who knows </p>
                            :
                            <p className='p-4 text-lg font-semibold'>No hint for this challenge</p>
                        
                        }
                        
                        </div>
                    </motion.div>
                    :
                    null
                }
            </AnimatePresence>
        </div>
    )
}

export default Hints