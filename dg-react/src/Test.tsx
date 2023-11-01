// // import React, { Fragment } from "react";
// // import {Select} from "antd";
// //
// // interface TestProps {
// //
// // }
// // const test=[
// //     {keys:'ids',value:[1,2,3,4,5]},
// //     {keys:'ids',value:[{name:'haha',age:'22'},{name:'hah2a',age:'222'},{name:'ha3ha',age:'232'},{name:'ha2ha',age:'232'},{name:'ha4ha',age:'225'}]}
// // ]
// // // const test={1:{name:'haha',age:'22'}}
// // const test1:any=Object.values(test)[0]?.keys as any | 123
// // const Test:React.FC<TestProps>=(props)=> {
// //     const handleChange = (value: string) => {
// //         console.log(`selected ${value}`);
// //     };
// //     Testcode
// //     return (
// //         <Fragment>
// //             <Select
// //                 defaultValue="lucy"
// //                 style={{ width: 120 }}
// //                 onChange={handleChange}
// //                 options={[
// //                     { value: 'jack', label: 'Jack' },
// //                     { value: 'lucy', label: 'Lucy' },
// //                     { value: 'Yiminghe', label: 'yiminghe' },
// //                     { value: 'disabled', label: 'Disabled', disabled: true },
// //                 ]}
// //             />
// //             <div className={'quare'}>
// //                 <img alt="example" style={{ width: '100%' }} src={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'} />
// //             </div>
// //         </Fragment>
// //     );
// // }
// // export default Test
// import {Select,Input} from 'antd'
// import React, {lazy, Suspense} from "react";
// const dataArray = [
//     { name: 'Select', args: { option: 123, value: 222 } },
//     { name: 'Input', args: { option: 123, value: 222 } },
//     // 添加更多的对象
// ];
//
// const components = dataArray.map((item, index) => {
//     // 根据每个对象的属性创建组件
//     const { name, args } = item;
//     console.log(name)
//     // 注意：这里假设您已经定义了与每个组件名称对应的React组件
//     // 例如，定义了一个名为SelectComponent的组件
//     const CustomComponentModule = lazy(() => import(`./${name}`));
//     // const Component = React.createElement(
//     //     name,
//     //     { ...args }, // 使用args作为属性
//     //     null // 子元素，如果有的话
//     // );
//     console.log(CustomComponentModule)
//     return (
//         <div key={index}>
//             <Suspense fallback={<div>Loading...</div>}>
//                 <CustomComponentModule />
//             </Suspense>
//         </div>
//     );
// });
//
// // 最后，将components渲染到您的React组件中
// export const Test=React.memo((props:any)=> {
//     return (
//         <div>
//             {components.map((component) => (
//                 <div>
//                     {component}
//                 </div>
//             ))}
//         </div>
//     );
// })
// export default Test
//

import React, { useState } from "react";

function ConditionalForm() {
  const [conditionItems, setConditionItems] = useState([{ id: 1 }]); // 初始一个条件项

  // 处理添加条件按钮点击事件
  const handleAddCondition = (id: any) => {
    const newCondition = {
      id: Date.now(), // 使用唯一标识符作为条件的ID
    };

    const updatedItems = conditionItems.map((item) => {
      if (item.id === id) {
        return [item, newCondition];
      }
      return item;
    });

    setConditionItems(updatedItems.flat());
  };

  // 处理删除条件按钮点击事件
  const handleDeleteCondition = (id: any) => {
    const updatedItems = conditionItems.filter((item) => item.id !== id);
    setConditionItems(updatedItems);
  };

  return (
    <div>
      {conditionItems.map((item) => (
        <div key={item.id}>
          <form>
            <span>{item.id}</span>
            <select>{/* 下拉框选项 */}</select>
            <select>{/* 下拉框选项 */}</select>
          </form>
          <button onClick={() => handleDeleteCondition(item.id)}>删除</button>
          <button onClick={() => handleAddCondition(item.id)}>添加</button>
        </div>
      ))}
      <button onClick={() => handleAddCondition(conditionItems[0].id)}>
        添加条件
      </button>
    </div>
  );
}

export default ConditionalForm;
