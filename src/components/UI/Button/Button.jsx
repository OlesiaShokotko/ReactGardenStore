import s from "./Button.module.css";

function Button(props) {
  const { title, styleBtn, ...otherProps } = props;

  return (
    <button {...otherProps} className={s[styleBtn]}>
      {title}
    </button>
  );
}

export default Button;
