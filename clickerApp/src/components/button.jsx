function ButtonInc(
    {
        className, 
        text,
        onClick,
    
    }) {
    return (
         <button 
            className={`py-4 px-10 rounded-xl text-4xl font-sans font-semibold border-2 border-white bg-black-600 
            transition-all hover:scale-110 hover:border-purple-200 hover:border-4 ${className} `}
            onClick={onClick}>
            {text}
          </button>
    )
    
}

export default ButtonInc