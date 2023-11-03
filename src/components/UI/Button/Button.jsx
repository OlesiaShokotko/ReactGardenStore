import s from "./Button.module.css";

function Button(props) {
  const { title, style, ...otherProps } = props;
  console.log(title)

  return (
    <button {...otherProps} style={style} className={s.button_elem}>
      {title}
    </button>
  );
}

export default Button;
