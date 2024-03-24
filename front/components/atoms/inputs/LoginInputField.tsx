import { EInputsTypes } from "@/types/emuns";
import { IconType } from "react-icons";

export default function LoginInputField({
  configIcon,
  name,
  id,
  placeholder = "",
  type,
  required = true,
  onChange,
}: {
  configIcon?: {
    icon: IconType;
    className?: string;
  };
  name: string;
  id: string;
  placeholder?: string;
  type?: EInputsTypes;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="mt-3 relative w-full flex justify-center">
      <div className="relative w-4/5">
        <input
          onChange={onChange}
          placeholder={placeholder}
          className="outline-none ring-0 pr-2 pl-11 rounded-full py-2 relative border-solid border-[2px] border-[#35374B]/50 w-full bg-white placeholder:text-[#35374B]"
          type={type ? type : EInputsTypes.text}
          required={required}
          name={name}
          id={id}
        />
        <div className="absolute left-1 top-1/2 -translate-y-1/2 w-10 h-full flex justify-center items-center">
          <>
            {configIcon?.icon && (
              <configIcon.icon
                className={
                  configIcon?.className ? configIcon?.className : "h-6 w-6"
                }
              />
            )}
          </>
        </div>
      </div>
    </div>
  );
}
