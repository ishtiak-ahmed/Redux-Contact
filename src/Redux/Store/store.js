import { createStore } from "redux";
import contactReducers from "../Reducers/reducers";

export const store = createStore(contactReducers);