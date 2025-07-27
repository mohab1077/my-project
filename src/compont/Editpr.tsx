import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useMemo, useState } from 'react'
import Colors from './Colors'
import type { iproduct } from '../interfaces/iproduct';
import Errorvalid from './Errorvalid';

interface Ieditpr {
    color: string[];
    products: iproduct[];
    setproduct: React.Dispatch<React.SetStateAction<iproduct[]>>;
    valuepr: iproduct
}
export default function Editpr({ color, products, setproduct, valuepr }: Ieditpr) {
    

    const errorval = {
        image: false,
        name: false,
        des: false,
        price: false,
        colors: false
    }
    let [isOpen, setIsOpen] = useState(false)
    const [selectedcolors, setselect] = useState<string[]>(valuepr.colors)
    const [newpr, setnewpr] = useState<iproduct>(valuepr)
    const [errors, seterros] = useState(errorval)
    const [click, setclick] = useState(false)

    function open() {
        setIsOpen(true)

    }

    function close() {

        setclick(true)

        if (newpr.name == "" || newpr.price == 0 || newpr.image == "" || newpr.des == "" || selectedcolors.length == 0) {
            return;
        }


        if (errors.colors === true || errors.price === true || errors.des === true || errors.name === true || errors.image === true) {
            return;
        }
        const updatedNewPr = { ...newpr, colors: selectedcolors };
        setnewpr(updatedNewPr);
        const filtered = products.map(c => {
            if (c == valuepr) {
                return updatedNewPr;
            }
            return c;
        }
        )
        setproduct(filtered)
        setselect(selectedcolors)
        setnewpr(updatedNewPr)
        seterros(errorval)
        setclick(false)
        setIsOpen(false)

    }








    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setnewpr((prev) => ({ ...prev, [name]: value }));
    };

    const style = 'w-full border-2 border-black  rounded-md mt-1.5'
    const style2 = 'font-medium'
    //const allcolors = color.map(c => c);
    const allcolors = useMemo(() => color.map(c => c), [color]);
    

    return (
        <>
            <Button
                onClick={open}
                className="bg-blue-700 w-full h-10 rounded-md text-white 
             hover:bg-blue-800 hover:scale-105 hover:shadow-lg 
             transition-all duration-300 ease-in-out cursor-pointer"
            >
                edit
            </Button>

            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
                <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer   justify-self-end  " onClick={() => setIsOpen(false)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                            <DialogTitle as="h1" className="text-base/7 font-bold text-black mb-5 ">
                                edit my product
                            </DialogTitle>

                            <div>
                                <label htmlFor="" className={style2}>title</label>
                                <br />
                                <input type="text" name="name" id="" className={style} value={newpr.name} onChange={handleChange} />
                                {click ? <Errorvalid field='title' value={newpr.name} seterros={seterros} /> : undefined}

                                <br />
                                <label htmlFor="" className={style2}>image url</label>
                                <br />
                                <input type="url" name="image" id="" className={style} value={newpr.image} onChange={handleChange} />
                                <br />
                                <label htmlFor="" className={style2}>price</label>
                                <br />
                                <input type="number" className={style} name='price' value={newpr.price} onChange={handleChange} />
                                {click ? <Errorvalid field='price' valuenum={newpr.price} seterros={seterros} /> : undefined}

                                <br />

                                <label htmlFor="" className={style2}>category</label>
                                <br />
                                <select name="categ" id="a" className={style} value={newpr.categ} onChange={handleChange}>
                                    <option value="car">car</option>
                                    <option value="clothes">clothes</option>
                                </select>
                                <br />
                                <label htmlFor="" className={style2}>description</label>
                                <br />
                                <textarea name="des" id="" className={style} value={newpr.des} onChange={handleChange}></textarea>
                                {click ? <Errorvalid field='des' value={newpr.des} seterros={seterros} /> : undefined}

                                <div>
                                    {selectedcolors?.map(c =>
                                        <span
                                            style={{
                                                backgroundColor: c,
                                            }}
                                            className="inline-block rounded-md w-20 h-6 m-1"
                                        >{c}</span>
                                    )}
                                </div>

                                <div>
                                    <Colors colors={allcolors} curs='pointer' setselect={setselect} selectedcolors={selectedcolors} />
                                </div>
                                {click ? <Errorvalid field='colors' selectedcolors={selectedcolors} seterros={seterros} /> : undefined}

                            </div>
                            <div className="mt-4 flex  justify-end">
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer"
                                    onClick={close}
                                >
                                    save
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
