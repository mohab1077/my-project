
interface Icolor{
    colors:string[];
}

function Colors({colors}:Icolor) {
  
   const allcolors = colors.map(c =>  <span
  style={{ backgroundColor: c }}
  className="inline-block rounded-full w-6 h-6 m-1"
></span>  );
  return (
   <div>
   {allcolors}
   </div>
  )
}

export default Colors
