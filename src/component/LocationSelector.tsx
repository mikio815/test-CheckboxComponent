import "../index.css"; // これがないと Tailwind のスタイルが適用されない



type LocationType = {
    location: ("campus" | "offCampus")[]
  }
  
  type Props = {
    value: LocationType;
    onChange: ((newValue: LocationType) => void) | null; 
  }
  
  const LocationSelector: React.FC<Props> = ({ value, onChange }) => {
    const isDisabled = onChange === null;
    const toggleField = (item: "campus" | "offCampus") => {
        if (isDisabled) return;
  
        const updatedLocation = value.location.includes(item)
            ? value.location.filter((i) => i !== item)
            : [...value.location, item]
  
        onChange({ location: updatedLocation });
    };
  
    const toggleAll = () => {
        if (isDisabled) return;
  
        const isAllSelected = value.location.includes("campus") && value.location.includes("offCampus");
  
        onChange({ location: (isAllSelected ? [] : ["campus", "offCampus"])});
    };
  
    
  
    return (
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox"
              checked={value.location.includes("campus") && value.location.includes("offCampus")}
              onChange={toggleAll}
              disabled={isDisabled}
              className="hidden"
            />
            <span
              className={`w-5 h-5 flex items-center justify-center border rounded-md transition-all
                ${value.location.includes("campus") && value.location.includes("offCampus") ? "bg-blue-500 text-white border-blue-500" : "bg-gray-200 border-gray-400 text-gray-400"}
                ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover: border-blue-400"}
              `}
            >
              ✔︎
            </span>
            すべて
          </label>
  
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox"
              checked={value.location.includes("campus")}
              onChange={() => toggleField("campus")}
              disabled={isDisabled}
              className="hidden"
            />
            <span
              className={`w-5 h-5 flex items-center justify-center border rounded-md transition-all
                ${value.location.includes("campus") ? "bg-blue-500 text-white border-blue-500" : "bg-gray-200 border-gray-400 text-gray-400"}
                ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover: border-blue-400"}
              `}
            >
              ✔︎
            </span>
            学内
          </label>
  
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox"
              checked={value.location.includes("offCampus")}
              onChange={() => toggleField("offCampus")}
              disabled={isDisabled}
              className="hidden"
            />
            <span
              className={`w-5 h-5 flex items-center justify-center border rounded-md transition-all
                ${value.location.includes("offCampus") ? "bg-blue-500 text-white border-blue-500" : "bg-gray-200 border-gray-400 text-gray-400"}
                ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover: border-blue-400"}
              `}
            >
              ✔︎
            </span>
            学外
          </label>
        </div>
    );
  };
  
  export default LocationSelector;
  