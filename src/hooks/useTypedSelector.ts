import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import {AppDispatch} from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;