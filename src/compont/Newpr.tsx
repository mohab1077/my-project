import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import Colors from './Colors'

interface inewpr {
  color: string[];
}
export default function Newpr({ color }: inewpr) {
  let [isOpen, setIsOpen] = useState(false)
  const [selectedcolors, setselect] = useState<string[]>([])

  function open() {
    setIsOpen(true)
  }

  function close() {
    setselect([])
    setIsOpen(false)

  }

  const style = 'w-full border-2 border-black  rounded-md mt-1.5'
  const style2 = 'font-medium'
  const allcolors = color.map(c => c);

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-black focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-black/30 cursor-pointer "
      >
        add new proudct
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle as="h1" className="text-base/7 font-bold text-black mb-5 ">
                add new product
              </DialogTitle>
              <div>
                <label htmlFor="" className={style2}>title</label>
                <br />
                <input type="text" name="" id="" className={style} />
                <br />
                <label htmlFor="" className={style2}>image url</label>
                <br />
                <input type="url" name="" id="" className={style} />
                <br />
                <label htmlFor="" className={style2}>price</label>
                <br />
                <input type="number" className={style} />
                <br />
                <label htmlFor="" className={style2}>category</label>
                <br />
                <select name="a" id="a" className={style}>
                  <option value="">a</option>
                </select>
                <br />
                <label htmlFor="" className={style2}>description</label>
                <br />
                <textarea name="" id="" className={style}></textarea>

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

              </div>
              <div className="mt-4 flex  justify-end">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
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
