import { MdSearch } from "react-icons/md";
import { SearchboxProps } from "@/types";
import { cn } from "@/utils/cn";

const Searchbox = ({
  value,
  onChange,
  onSubmit,
  className = "",
}: SearchboxProps) => {
  return (
    <form
      className={cn(
        "relative flex items-center justify-center h-10",
        className
      )}
      onSubmit={() => onSubmit}
    >
      <input
        id="search"
        type="text"
        placeholder="Search Location..."
        className="text-black w-[230px] px-4 py-2 placeholder:text-gray-600  border border-gray-400 rounded-lg  focus:outline-none focus:border-gray-500 h-full"
        value={value}
        onChange={() => onChange}
      />
      <button type="submit">
        <MdSearch className="absolute text-2xl top-2.5 right-3 " />
      </button>
    </form>
  );
};

export default Searchbox;
