import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HomeComponent from "./components/HomeComponent";


function App(props: any) {
  console.log("App", props);
  // {Object.keys(props.games)
  return <HomeComponent />;
}
const actions = {
  addGame(gameName: string) {
    return {
      type: "addGame",
      payload: { gameName: "Abs" },
    };
  },
};

const mapStateToProps = (state: any) => ({ games: state.games });

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
