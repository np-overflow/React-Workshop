


function Display({text, item}) {
    return (
        <div className='flex items-center justify-center border-8 border-white px-80 py-20 bg-indigo-500 rounded-4xl w-[50vw]'>
            <h1 className='text-8xl font-black font-serif text-nowrap'>
                {text} {item}
            </h1>
        
        </div>
    )
    
}

export default Display