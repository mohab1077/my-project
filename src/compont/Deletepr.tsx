import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import type { iproduct } from '../interfaces/iproduct';


interface Idel {
   
    products: iproduct[];
    setproduct: React.Dispatch<React.SetStateAction<iproduct[]>>;
    valuepr: iproduct
}
export default function Deletepr({products, setproduct, valuepr }: Idel) {
    

  
    let [isOpen, setIsOpen] = useState(false)
   
   
    
    

    function open() {
        setIsOpen(true)

    }

    function close() {

        
        
        const filtered = products.filter(c => c!== valuepr )
        setproduct(filtered)
        setIsOpen(false)

    }




    return (
        <>
            <Button
                onClick={open}
                className=" bg-red-600 w-full h-10 rounded-md text-white 
             hover:bg-red-700 hover:scale-105 hover:shadow-lg 
             transition-all duration-300 ease-in-out cursor-pointer"
            >
                delete
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

                            <DialogTitle as="h1" className="text-base/7 font-bold text-black mb-1 ">
                                are you sure want to delete this product
                            </DialogTitle>

                           
                            <div className="mt-4 flex  justify-end">
                                <Button
                                    className="inline-flex items-center gap-2 rounded-md bg-red-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700 cursor-pointer"
                                    onClick={close}
                                >
                                    delete
                                </Button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
