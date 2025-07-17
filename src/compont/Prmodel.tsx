import type { iproduct } from "../interfaces/iproduct";
import Colors from "./Colors";


function Prmodel({ image,
    name,
    des,
    price,
    colors,
    categ }: iproduct) {

    const edit_hand = () => {
        console.log("hi")
    }
     const remove_hand = () => {
        console.log("hi")
    }


    const allcolors = colors.map(c => c);
    return (


        <div className=" border rounded-md flex flex-col justify-items-center p-3.5" >
            <h1 >{name}</h1>
            <img src={image} className="w-120 h-48 object-cover pt-3 " />
            <p className="pt-3">{des}</p>
            <div className="pt-3">
                <Colors colors={allcolors} />
            </div>
            <div className="flex flex-row-reverse justify-between pt-3" >
                <h6>{categ}</h6>
                <h5 >{price}$</h5>
            </div>
            <div className="flex flex-row gap-2 pt-3">
                <button
                    className="bg-blue-700 w-full h-10 rounded-md text-white 
             hover:bg-blue-800 hover:scale-105 hover:shadow-lg 
             transition-all duration-300 ease-in-out cursor-pointer"
                    onClick={edit_hand}
                >
                    edit
                </button>
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