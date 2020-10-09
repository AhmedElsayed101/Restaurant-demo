import { combineReducers } from "redux";
import { Dishes } from "./dishes";
import { Leaders } from "./leaders";
import { Comments } from "./comments";
import { Promotions } from "./promotions";


const Reducer = combineReducers ({
    
    dishes : Dishes,
    leaders : Leaders,
    comments : Comments,
    promotions : Promotions
})


export default Reducer