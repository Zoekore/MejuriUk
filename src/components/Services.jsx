import { About, Resources, sec_services, services, Stores } from "../constants/data"


const Services = () => {
  return (
    <div>
        <div className="px-12 py-16 border-b border-e border-black">
            <h3 className=" font-extrabold text-4xl">STORES & SERVICES</h3>
            <span className="text-sm font-semibold">Discover our thoughtfully designed stores and Piercing Studios across North America and the UK</span>
            <div className=" w-full flex py-4 gap-4">
            {services.map((dat)=>(
                <a 
                key={dat.id}
                href="#"
                >
                    <div className="w-[419px] h-[268px]">
                        <img src={dat.imgrl} alt="" />
                    </div>
                    <h4 className="text-2xl font-bold pt-4">{dat.class}</h4>
                    <span className="text-sm font-[500] pt-4">{dat.about}</span>
                </a>
            ))}
    
            </div>
        </div>
        <div className="flex px-12 py-8">
            <div className="flex text-lg pb-10">
                <p className="flex flex-col pr-8 leading-8 font-semibold">
                    {sec_services.map((dat)=>(
                        <a 
                        key={dat.id}
                        href="#"
                        className={dat.id === 1 ? "font-extrabold text-2xl" :""}
                        >
                           <span className={dat.list != "Help" ?"hover:underline cursor-pointer":""}>{dat.list}</span> 
                        </a>
                    ))}
                </p>
                <p className="flex flex-col pr-8 leading-8 font-semibold">
                    {Stores.map((dat)=>(
                        <a 
                        key={dat.id}
                        href="#"
                        className={dat.id === 1 ? "font-extrabold text-2xl " :""}
                        >
                           <span className={dat.list != "Stores and Services" ?"hover:underline cursor-pointer":""}>{dat.list}</span> 
                        </a>
                    ))}
                </p>
                <p className="flex flex-col pr-8 leading-8 font-semibold">
                    {Resources.map((dat)=>(
                        <a 
                        key={dat.id}
                        href="#"
                        className={dat.id === 1 ? "font-extrabold text-2xl " :""}
                        >
                            <span className={dat.list != "Resources" ?"hover:underline cursor-pointer":""}>{dat.list}</span>
                        </a>
                    ))}
                </p>
                <p className="flex flex-col pr-8 leading-8 font-semibold">
                    {About.map((dat)=>(
                        <a 
                        key={dat.id}
                        href="#"
                        className={dat.id === 1 ? "font-extrabold text-2xl hover:no-underline" :"" }
                        >
                         <span className={dat.list != "About mejuri" ?"hover:underline cursor-pointer":""}>{dat.list}</span>
                        </a>
                    ))}
                </p>
            </div>
            <div className="pl-24 pr-10">
                <div className="flex pb-4">
                    <img src="/location.svg" alt="" />
                    <span className="text-2xl font-semibold">Find a store</span>
                </div>
                <img className="w-[267px] h-[183px]" src="bags2.jpg" alt="" />
            </div>
        </div>
        <div className="border-b border-black w-11/12 mx-auto">
            
        </div>
        <div className="pl-12 flex pt-8 pb-16"> 
            <div className="" > 
                <div className="flex items-center w-1/2 pb-4">
                    <img src="/m.svg" alt="" />
                    <h3 className="font-bold text-3xl">Become a member</h3>
                </div>
                
                <div className=" flex items-center text-lg ">
                    <p className="w-1/2 leading-6 font-bold">Join Mejuri+ for free and discover exclusive access to our biggest drops, promotions, members-only products, and more.
                    </p>
                    <div className="">
                        <button className="px-12 py-3 text-lg font-semibold uppercase border border-black hover:bg-gray-400 cursor-pointer border-x-10">join now for free</button>
                    </div>
                </div>
            </div>
            <div className="">
            
            </div>
        </div>  
    </div>
  )
}

export default Services
