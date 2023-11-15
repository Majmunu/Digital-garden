import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterslice";

export const store = configureStore({
   reducer:{
         counter:counterReducer
   }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

//文件的作用?，它是用来创建store的，store是redux的核心，它是一个对象，里面有很多属性，比如getState()，dispatch()，subscribe()等等
//RootState是什么？它是一个类型，是store.getState()的返回值类型，store.getState()返回的是一个对象，这个对象的类型就是RootState
//AppDispatch是什么？它是一个类型，是store.dispatch的类型，store.dispatch是一个函数，它的参数类型就是AppDispatch