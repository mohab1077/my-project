import { memo, useEffect, useState } from "react";

interface Ierror {
    field: string;
    value?: string | undefined;
    valuenum?: number;
    selectedcolors?: string[];
    seterros: React.Dispatch<React.SetStateAction<{
        image: boolean;
        name: boolean;
        des: boolean;
        price: boolean;
        colors: boolean;
    }>>
}

function Errorvalid({ field, value, valuenum, selectedcolors, seterros }: Ierror) {
    const [error, seterror] = useState<string>('');


    useEffect(() => {
        if ((field === "title" && value && value?.length < 15) || value === "" && field === "title" ) {
            seterror("must be above 15 char");
            seterros((prev) => ({
                ...prev,
                name: true
            }));
        }
        else if ((field === "price" && valuenum && valuenum < 50) ||valuenum===0 ) {
            seterror("must be above 50");
             seterros((prev) => ({
                ...prev,
                price: true
            }));

        }
        else if ((field === "des" && value && value?.length < 20) || value === ""  ) {
            seterror("must be above 20 char");
             seterros((prev) => ({
                ...prev,
                des: true
            }));
        }
        else if (field === "colors" && selectedcolors && selectedcolors.length === 0) {
            seterror("no color selected");
             seterros((prev) => ({
                ...prev,
                colors: true
            }));
        }
        else {
            seterror(""); // ✅ امسح الخطأ لو تحقق الشرط
            if(field === "colors"){
                seterros((prev) => ({
                ...prev,
                colors: false
            }));
            }
            else if(field === "des"){
                seterros((prev) => ({
                ...prev,
                des: false
            }));
            }
            else if(field === "price"){
                 seterros((prev) => ({
                ...prev,
                price: false
            }));
            }
            else{
                 seterros((prev) => ({
                ...prev,
                name: false
            }));
            }
        }
    }, [field, value, valuenum, selectedcolors,seterros]);
    return (
        <>
            <span className="text-red-600">
                {error}
            </span>
        </>
    )
}

export default memo(Errorvalid)