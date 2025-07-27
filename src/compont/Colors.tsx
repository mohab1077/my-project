import { memo } from "react";

interface Icolor {
  colors: string[];
  setselect?: React.Dispatch<React.SetStateAction<string[]>>;
  selectedcolors?: string[] | undefined;
  curs?: string;
}

function Colors({ colors, curs, setselect, selectedcolors }: Icolor) {

  const allcolors = colors.map(c => <span
    style={{
      backgroundColor: c,
      cursor: curs ? curs : "default",
    }}
    className="inline-block rounded-full w-6 h-6 m-1"
    onClick={setselect
      ? selectedcolors?.includes(c)
        ? () => setselect(selectedcolors.filter((a) => a !== c))
        : () => setselect([...(selectedcolors || []), c])
      : undefined}

  ></span>);
  return (
    <div>
      {allcolors}
    </div>
  )
}

export default memo(Colors)
