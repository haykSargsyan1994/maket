import { combineReducers } from "redux";
import { continentsReducer } from "./continentsReducer";
import { countriesReducer } from "./countriesReducer";
import { capitalsReducer } from "./capitalsReducer";

export const rootReducer =combineReducers({
    continentsReducer,
    countriesReducer,
    capitalsReducer
})

