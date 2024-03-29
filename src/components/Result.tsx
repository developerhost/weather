type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string
  }
}

const Result = (props: ResultsPropsType) => {
  return (
    <div>
      {props.results.cityName && <div> {props.results.cityName}</div>}
      {props.results.country && <div> {props.results.country}</div>}
      {props.results.temperature && <span> {props.results.temperature}°C</span>}
      {props.results.conditionText && 
      <div> 
        <img src={props.results.icon} alt="icon"/>
        <span>{props.results.conditionText}</span>
        </div>}
    </div>
  );
};

export default Result;