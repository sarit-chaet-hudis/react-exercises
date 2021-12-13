function Button(props) {
  return (
    <button style={{ fontWeight: props.weight }}>{props.ButtonText}</button>
  );
}

export default Button;
