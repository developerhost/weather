import { useState } from "react";
import Title from "/Users/canon/workspace/react/weather/src/components/Title/Title";
import Form from "/Users/canon/workspace/react/weather/src/components/Form";
import Result from "/Users/canon/workspace/react/weather/src/components/Result";
import './App.css';

type ResultsStateType = {
  country: string,
  cityName: string,
  temperature: string,
  conditionText: string,
  icon: string, 
  [prop: string]: any;
}

function App() {
// Form.tsxから持ってきた部分

  const [city, setCity] = useState<string>("");
  // city=ユーザーが入力した都市名
  // setCity=stateにデータを書き込んだり操作したりする仕組み
  // useState ""は初期データ

  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  })

  const getWeather = (e: any) => {
    e.preventDefault();
    fetch(`https://api.weatherapi.com/v1/current.json?key=b934c90fc5074bf8b87141933220402&q=${city}&aqi=no`)
    .then(res => res.json())
    .then(data => {
      setResults({
        country: data.location.country,
        cityName: data.location.name,
        temperature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon
      })
    })

  }

  return (
    <div className="wrapper">
      <div className="container">
      <Title></Title>
      <Form setCity={setCity} getWeather={getWeather}/>
      <Result results={results}/>  

      </div>
    </div>
  );
}

export default App;
