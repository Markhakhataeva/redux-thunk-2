import {useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import * as AllActionCreators from "../redux/action-creator/action";

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(AllActionCreators,dispatch);
}