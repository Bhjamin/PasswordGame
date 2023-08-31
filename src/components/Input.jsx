

const Input = ({setInput}) => {

    return(
        <div className="w-full flex justify-center items-center p-4">
            <input spellCheck={false} onChange={(e) => setInput(e.target.value)} placeholder="please enter a password" type="text"
            className="w-full sm:w-[75%] md:w-[50%] lg:w-[35%] border-4 border-[#1D7874] bg-[#2E2E3A] text-white p-2 text-base sm:text-xl rounded-full text-center placeholder-white placeholder-opacity-40" />
        </div>
    )
}

export default Input