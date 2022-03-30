import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HomeComponent from "./components/HomeComponent";


function App(props: any) {
  console.log("App", props);
  // {Object.keys(props.games)
  return <HomeComponent />;
  // return <div>{JSON.stringify(props.games)}
  
  // <button onClick={()=>props.actions.addGame('Jeffs Paradise')}> add Game</button>
  
  // </div>
}
export default App
