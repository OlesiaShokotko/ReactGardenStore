import s from "./Button.module.css";

function Button(props) {
  const { title, ...otherProps } = props;

  return (
    <button {...otherProps}>
      {title}
    </button>
  );
}

export default Button;
