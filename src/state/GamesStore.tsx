import { createStore, applyMiddleware } from "redux";
import { rootMiddleware } from "../middleware/rootMiddleware";
import rootReducer from "../reducers/rootReducer";


// clean up, strongly type everything

const middleware = applyMiddleware(rootMiddleware);


const store = createStore(rootReducer, middleware);

export default store;
