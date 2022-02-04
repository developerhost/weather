type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}

// const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
// }

const Form = (props: FormPropsType) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)}/>
      {/* onChangeハンドラーでinputに入力されたデータをsetCityに渡す */}
      {/* eはinputの中のさまざまなデータ e>target>valueというデータ構造 */}

      <button type="submit">Get Weather</button>
    </form>
  );
  }

export default Form;