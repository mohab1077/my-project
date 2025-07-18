import type { iproduct } from "../interfaces/iproduct";
import { allcolorss } from "../lib/fakedate";
import Colors from "./Colors";
import Editpr from "./Editpr";

interface Iprmodel{
    data: iproduct,
    products: iproduct[];
    setproduct: React.Dispatch<React.SetStateAction<iproduct[]>>;
}
function Prmodel({data,products,setproduct}:Iprmodel){

   
     const remove_hand = () => {
        console.log("hi")
    }

   
    const allcolors = data.colors.map(c => c);
    return (


        <div className=" border rounded-md flex flex-col justify-items-center p-3.5" >
            <h1 >{data.name}</h1>
            <img src={data.image} className="w-120 h-48 object-cover pt-3 " />
            <p className="pt-3">{data.des}</p>
            <div className="pt-3">
                <Colors colors={allcolors} />
            </div>
            <div className="flex flex-row-reverse justify-between pt-3" >
                <h6>{data.categ}</h6>
                <h5 >{data.price}$</h5>
            </div>
            <div className="flex flex-row gap-2 pt-3">
                <Editpr
                    
                 color={allcolorss} products={products} setproduct={setproduct} valuepr={data}
                />
                <button
                    className=" bg-red-600 w-full h-10 rounded-md text-white 
             hover:bg-red-700 hover:scale-105 hover:shadow-lg 
             transition-all duration-300 ease-in-out cursor-pointer"
                    onClick={remove_hand}
                >
                    remove
                </button>
            </div>
        </div>


    )
}

export default Prmodel;