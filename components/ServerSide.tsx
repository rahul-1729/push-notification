
import Button from "./ClientSide"
export default function ServerSide (){
  return (
    <div>
    <div className="absolute w-full top-[2rem] flex items-center justify-center z-[1]">
      <h3
        className="text-3xl clipartanim"
        style={{ fontFamily: "Sans-Serif" }}
      >
        Hola Amigo!
      </h3>
    </div>
    <div>
      <div className="absolute w-full h-[14rem] flex flex-col /gap-[2rem] /items-baseline /justify-center bottom-0 left-0 z-[1]">
        <div className="flex items-center flex-col gap-[1rem] justify-center w-full">
          <h3
            className="/font-semibold  text-xl"
            style={{ fontFamily: "outfit" }}
          >
            Assignment By Rahul Kumar From IIITR
          </h3>
          <h3
            className="text-center text-slate-300 font-extralight"
            style={{ fontFamily: "poppins" }}
          >
             A NextJs responsive page 
          </h3>
        </div>
        <div className="mt-[2rem] w-full flex items-center justify-center py-[0.5rem] px-[1.5rem]">
         <Button/>
        </div>
      </div>
    </div>
    <div
      className={
        "flex justify-center items-center h-[100vh] relative w-[100vw] overflow-hidden "
       
      }
    >
      <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-b from-[#2c2143] via-[#140f1f] to-black"></div>
      <div className="h-[10rem] w-[100vw] flex justify-center items-center /mb-[13rem]">
        <div
          className="1p-3 1border-white 1border-2 rounded-full loadinglogoaniminit "
          style={{ "--timing": "0.3s" }}>
          <div
            className="1p-3 1border-white 1border-2 rounded-full loadinglogoaniminit "
            style={{ "--timing": "1.5s" }}>
            
            <div className="p-[4rem] rounded-full top-[34.5%] -translate-y-[50%] left-[50%] -translate-x-[50%] bg-[#29174f] w-[10rem] h-[10rem] z-[10] absolute loadinglogomainimganiminit  border-4 border-[#d4c1ff]" >
              <img 
                src={'./Vector.svg'} 
                alt="Bell Icon" 
                style={{ 
                  width: "8rem",   
                  height: "8rem", 
                  position: "absolute",  
                  top: "50%",  
                  left: "50%",  
                  transform: "translate(-50%, -50%)"  
                }} 
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

 