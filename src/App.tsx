import { useState } from "react"
import Prmodel from "./compont/Prmodel"
import { fakedate ,allcolorss } from "./lib/fakedate"
import type { iproduct } from "./interfaces/iproduct"
import Newpr from "./compont/Newpr"



function App() {
  
   const [products , setproduct] = useState<iproduct[]>(fakedate)
   
   const mode  = products.map(c=> <Prmodel data={c} products={products} setproduct={setproduct} /> )
  return (
    <div>
    <div className="m-2 flex justify-end">
      <Newpr color={allcolorss} products={products} setproduct={setproduct}/>
    </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 my-6 mx-2.5  ">
     {mode}
   </div>
   </div>
  )
}

export default App
