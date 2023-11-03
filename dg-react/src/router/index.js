import {Navigate} from 'react-router-dom'
import Test from '../pages/Test'
// 路由表统一管理理由
 const router=([
    {
        path:'/test',  //路径
        element:<Test/>,  //组件
        //子路由
        // children:[
        //     {
        //         path:'analyse',
        //         element:<Analyse/>
        //     },
        //     {
        //         path:'manage',
        //         element:<Manage/>
        //     },
        //     {
        //         path:'sign',
        //         element:<Sign/>
        //     }
        // ]
    },
    {
        path:'/',
        //实现路由重定向
        element:<Navigate to='/test'/>
    }

])
export default router