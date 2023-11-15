//Ducks pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number;
}
const initialState: CounterState = {
    value:0
}
const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        incremented(state){
            //it's okay to do this because immer is used under the hood
            state.value++;
        },
        //state是immutable的，所以不能直接修改，只能返回一个新的state，action是一个对象，里面有payload属性，是从组件传过来的
        amountAdded(state,action:PayloadAction<number>){
            state.value += action.payload;
        }

    }
});
export const {incremented,amountAdded} = counterSlice.actions;
export default counterSlice.reducer;
//这个文件的作用？它是用来创建slice的，slice是redux的核心，它是一个对象，里面有很多属性，比如reducer，actions等
//counterSlice.reducer是什么？它是一个函数，它的参数是state和action，返回值是一个新的state