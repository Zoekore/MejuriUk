import { Countries, Lad } from "../constants/data"

const Mainmar = () => {
  return (
    <div className="w-full">
        <div className="flex w-full relative  ">
            {Lad.map((dat)=>(
                <a
                className="relative" 
                key={dat.id}
                href="#"
                >
                    <div className="h-[609px] ">
                        <img className="w-full border-e border-black border-y" src={dat.imgull} alt="" />
                       
                        <div className="text-center absolute  bottom-10 right-0 left-0 text-white ">
                            <h3 className="font-bold text-3xl uppercase">{dat.topic}</h3>
                            <u><span className="font-bold text-2xl uppercase">{dat.link}</span></u>
                        </div>
                    </div>   
                </a>
            ))}
        </div>
        <ul className="w-full relative overflow-x-hidden py-3 bg-customTaupe border border-black">
            <li className="w-full flex items-center animate-marquee whitespace-nowrap">
                {Countries.map((dat)=>(
                    <a 
                    key={dat.id}
                    href="#"
                    className={dat.id === 1 ? "text-4xl font-extrabold":""}
                    >
                        <span className={dat.Location != "OUR STORE"?" text-lg inline-block mx-4 font-extrabold":""}>{dat.Location}</span>
                    </a>
                ))}
            </li>
            <li className="w-full flex items-center absolute top-3 animate-marquee2 whitespace-nowrap">
                {Countries.map((dat)=>(
                    <a 
                    key={dat.id}
                    href="#"
                    className={dat.id === 1 ? "text-4xl font-extrabold":""}
                    >
                        <span className={dat.Location != "OUR STORE"?" text-lg inline-block mx-4 font-extrabold":""}>{dat.Location}</span>
                    </a>
                ))}
            </li>
        </ul>
    </div>
  )
}

export default Mainmar
