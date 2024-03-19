
interface SwitchProps {
  value: boolean;
  toggleLanguage: () => void;
}

export function SwitchLanguage({ value, toggleLanguage }: SwitchProps) {
  return (
    <div
      onClick={toggleLanguage}
      className={`md:w-14 md:h-7 w-12 h-6 flex items-center ${
        value === true ? "bg-blue-200" : "bg-gray-300"
      } rounded-full p-1 cursor-pointer`}
    >
      {/* switch options */}
      <div
        className={`
            ${value === true ? "bg-blue-600" : "bg-white"}
            md:w-6 md:h-6 w-5 h-5 rounded-full shadow-md transition-gpu duration-500 transform ${
              value === true ? "translate-x-6" : null
            }
            `}
      ></div>
    </div>
  );
}
