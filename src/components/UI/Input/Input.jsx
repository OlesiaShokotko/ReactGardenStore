import { forwardRef } from "react";
import s from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  const {className} = props
  return <input type="text" ref={ref} {...props} className={s[className]}/>;
});

export default Input;
