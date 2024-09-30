import { foot, lep } from "../constants/data"




const footer = () => {
  return (
    <div className="py-10">
      <div className="flex items-center justify-between px-10 text-lg border-none bg-violet-50 py-4">
          <div>
              <a href="">
                  <p>
                  shipping to : <span className="underline">the rest of the world</span>  
                  </p>
              </a>
          </div>
          <div className="flex items-center">
                  <div className="">
                      {foot.map((dat)=>(
                        <a 
                        key={dat.id}
                        href="#"
                        className="pr-4"
                        >{dat.list}</a>
                      ))} 
                  </div>
              <div className="flex items-center gap-4">
                {lep.map((dat)=>(
                  <a 
                  key={dat.id}
                  href="#"><img src={dat.imgrl} alt="" /></a>
                ))}
              </div>
          </div>    
      </div>
    </div>
  )
}

export default footer
