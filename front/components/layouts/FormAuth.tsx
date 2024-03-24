import LoginInputField from "../atoms/inputs/LoginInputField";
import FormLayout from "./FormLayout";
import { IModel } from "@/types";

export default function FormAuth({
  config,
  textSubmit,
  onChange,
  onSubmit,
}: {
  config: IModel.IInputGeneric[];
  textSubmit?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <FormLayout
      onSubmit={onSubmit}
      className="text-[#35374B] flex flex-col items-center justify-center my-4"
      textButton={textSubmit}
    >
      {config.map(({ name, id, placeholder, configIcon, type }, index) => (
        <LoginInputField
          key={index}
          onChange={onChange}
          configIcon={configIcon}
          name={name}
          id={id}
          placeholder={placeholder}
          type={type}
        />
      ))}
    </FormLayout>
  );
}
