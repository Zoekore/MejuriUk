import { accessories } from "../constants/data"

const Jewelrysection = () => {
  return (
    <div className="w-full">
      <div className="w-full ">
             <ul className="w-full">
                <li className="flex relative w-full ">
                    {accessories.map((dat) => (
                        <a
                            key={dat.id}
                            href="#"
                        >
                            <img className="border-e border-b border-black" src={dat.imgul} alt=""
                              onMouseEnter={(e)=>{
                                e.target.src= dat.imgrl; 
                              }}
                              onMouseLeave={(e)=>{
                                e.target.src= dat.imgul;
                              }}
                            />
                            <span className="text-lg font-bold max-sm:text-xs max-md:text-sm absolute bottom-0 w-1/6 py-2 px-4 max-sm:py-1/2 max-sm:px-1 max-md:px-1 max-md:py-2 hover:text-white hover:bg-black hover:underline">{dat.Token.toUpperCase()}</span>
                        </a>
                    ))}
               </li>
            </ul>
        </div>
    </div>
  )
}

export default Jewelrysection
