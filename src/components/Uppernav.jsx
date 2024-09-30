import { nav_data } from '../constants/data'

const Uppernav = () => {
    return (
        <div className='w-full'>
            <div className="flex w-full h-8 items-center bg-black text-white justify-between p-1 text-sm font-bold">
                <div className="flex max-sm:items-center max-sm:w-full">
                    <img className="w-4 h-4 max-sm:hidden max-md:hidden" src="/left.svg" alt="" />
                    <img className="w-4 h-4 max-sm:hidden max-md:hidden" src="right2.svg" alt="" />
                    <a href="#"><u><span className="max-sm:pl-14 max-sm:text-xs max-md:pl-4 max-md:text-sm">free shipping for all Intl.Orders above $150USD</span></u></a>
                </div>
                <ul className="max-sm:hidden max-md:hidden">
                    <li className="flex gap-4 max-md:gap-1">
                        {nav_data.map((dat) => (
                            <a
                                key={dat.id}
                                href="#"
                                className="flex items-center hover:underline"
                            >
                                {dat.imgrl ? (<img className="w-5 h-5" src={dat.imgrl} alt={dat.accessories} />) : null}
                                <span className={dat.accessories === "(US$)"?"hover:text-gray-500":""}>{dat.accessories }</span>
                            </a>
                        ))}
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default Uppernav
