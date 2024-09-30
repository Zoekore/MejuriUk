import { jewelry_sect } from "../constants/data"
import { useState } from "react"





const Trend = () => {
    const [count, setCount] = useState(0);

    function handleNext(){
        setCount(count + 1)
    }
  return (
    <div className="w-full pl-8 pb-8  max-sm:pl-2 max-sm:pb-2">
        <span className="text-4xl font-bold  h-32 uppercase py-10 max-sm:text-sm max-sm:py-2">
            Trending Jewelry
        </span>
        <div className="w-full relative">
            <div className="flex w-full overflow-x-hidden gap-4 text-sm leading-5 max-sm:overflow-x-hidden">
                    {jewelry_sect.map((dat) => (
                        <a
                            key={dat.id}
                            href="#"
                        >
                            <div className='w-[300px] h-[319px]'>
                                <img className="w-full h-full" src={dat.file} alt="" />
                            </div>
                            <h3 className="font-bold text-2xl max-sm-lg">{dat.type}</h3>
                            <span className="text-lg max-sm:sm">{dat.description}</span>
                            <p className="text-lg">{dat.price}</p>
                        </a>
                    ))}
            </div> 
            <div className="absolute top-24   bottom-0 right-0 left-0">
                <button className="btn-2"></button><button className="btn float-end" onClick={handleNext}></button>
            </div>
        </div>
    </div>
  )
}

export default Trend