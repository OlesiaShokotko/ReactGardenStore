import { forwardRef } from "react";
import s from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  return <input type='text' ref={ref} {...props} className={s.input_elem} />;
});

export default Input;
