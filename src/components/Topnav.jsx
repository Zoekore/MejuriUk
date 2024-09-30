import {Real_nav,Image_content} from '../constants/data'

const Topnav = () => {
  return (
       <nav className="flex items-center px-8 w-full justify-between h-16 border-b border-black font-extrabold max-sm:px-2 ">
            <div>
                <img className="" src="/logo.svg" alt="icon-logo" />
            </div>
            <ul className="max-sm:hidden max-md:text-xs max-md:hidden">
                <li className="flex text-lg gap-4">
                    {Real_nav.map((dat) => (
                        <a
                            className="hover:underline"
                            key={dat.id}
                            href="#">{dat.className.toUpperCase()}</a>
                    ))}
            </li>
            </ul>
            <ul>
                <li className="">
                    <a className="flex items-center hover:opacity-90 gap-4 max-sm:gap-1" href="#">
                        {Image_content.map((dat) => (
                            <img
                                key={dat.id}
                                src={dat.imgurl} alt="" 
                                className=""
                            />
                        ))}
                    </a>
                </li>
            </ul>
    </nav>
  )
}

export default Topnav
