import { createStore } from "redux";
import Reducer from "./reducers";

export const ConfigureStore = () => {

    const store = createStore(
        Reducer,
    )
    return store
}