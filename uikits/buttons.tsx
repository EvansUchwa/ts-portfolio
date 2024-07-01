import { FormBtnPropsType } from "@/types/form";

export function FormBtn(props: FormBtnPropsType) {
  const { text, isValid } = props;
  return (
    <div className="formBtn">
      <button disabled={!isValid}>{text}</button>
    </div>
  );
}
