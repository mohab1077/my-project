
interface Icolor{
    colors:string[];
    setselect?:React.Dispatch<React.SetStateAction<string[]>>;
    selectedcolors?:string[]| undefined;
    curs?:string;
}

function Colors({colors,curs,setselect,selectedcolors}:Icolor) {
  
   const allcolors = colors.map(c =>  <span
  style={{
        backgroundColor: c,
        cursor: curs ? curs : "default", 
      }}
  className="inline-block rounded-full w-6 h-6 m-1"
  onClick={setselect ? () => setselect([...(selectedcolors || []),c]) : undefined}
  
></span>  );
  return (
   <div>
   {allcolors}
   </div>
  )
}

export default Colors
