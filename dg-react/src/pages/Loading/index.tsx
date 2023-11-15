import React, { Fragment } from "react";
import Boxes from "./Spring";
import {useAppDispatch,useAppSelector} from '../../hooks'
import {incremented,amountAdded} from "../../features/counter/counterslice";
import {Button} from "antd";

interface LoadingPageProps {

}
const LoadingPage:React.FC<LoadingPageProps>=(props)=> {
    //从store中获取指定数据
   const value=useAppSelector(state=>state.counter.value)
    //获取dispatch，用于触发reducer的action
   const dispatch=useAppDispatch()
    return (
        <Fragment>
            <div className={'min-h-screen'}>
                <p>Loading...</p>
                <h1>count is{value}</h1>
                <Button onClick={()=>dispatch(incremented())}>increment</Button>
                <Button onClick={()=>dispatch(amountAdded(5))}>increment by 5</Button>
            </div>
        </Fragment>
    );
}
export default LoadingPage