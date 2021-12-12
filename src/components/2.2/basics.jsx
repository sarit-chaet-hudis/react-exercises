function Basic() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string1 = "I love React!";
  return (
    <div>
      <p>{data[0] + " " + data[1]}</p>
      <p>{number1 + " + " + number2 + " = 11"}</p>
      <p>the string's length is {string1.length}</p>
    </div>
  );
}

export default Basic;
