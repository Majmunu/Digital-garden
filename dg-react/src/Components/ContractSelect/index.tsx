import React, { Fragment, useEffect, useState } from "react";
import { Input, Radio, Select } from "antd";
interface ContractSelectProps {}
const ContractSelect: React.FC<ContractSelectProps> = (props) => {
  //合约操作
  const [contractOperation, setContractOperation] = useState({
    time: { day: 0, hour: 0, minute: 0, second: 0 },
    count: { frequency: 0 },
  });
  //单选框状态
  const [radioState, setRadioState] = useState({ time: false, count: false });
  //Select显示的值
  const [selectLabel, setSelectLabel] = useState<string>();
  //导出的值
  // const [exportValue, setExportValue] = useState();
  //处理单选框点击
  const onRadioClick = (e: React.MouseEvent<HTMLElement>) => {
    // @ts-ignore 编辑器有毒提示找不到name
    const name: "time" | "count" = e.target.name;
    setRadioState((prevState) => {
      return { ...prevState, [name]: !prevState[`${name}`] };
    });
  };

  //防抖
  const _debounce = function (fn: Function, t: number) {
    let timeout: any;
    return function (...args: any) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn(...args);
      }, t);
    };
  };
  //处理输入框变化
  // const handleInputChange = _debounce(
  //   (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const value: string = e.target.value;
  //     const name: any = e.target.name;
  //     if (name === "frequency") {
  //       setContractOperation({
  //         ...contractOperation,
  //         count: { ...contractOperation.count, [name]: value },
  //       });
  //     } else {
  //       setContractOperation({
  //         ...contractOperation,
  //         time: { ...contractOperation.time, [name]: value },
  //       });
  //     }
  //   },
  //   300,
  // );
  const handleInputChange = _debounce(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value: string = e.target.value;
      const name: any = e.target.name;
      setContractOperation((prevContractOperation) => {
        const [category, subcategory] = name.split("."); // 使用"."分割name属性
        return {
          ...prevContractOperation,
          [category]: {
            ...prevContractOperation[
              category as keyof typeof prevContractOperation
            ],
            [subcategory]: value,
          },
        };
      });
    },
    300,
  );
  //监听单选框变化
  useEffect(() => {
    switch (true) {
      case radioState.time && !radioState.count:
        console.log(111, contractOperation.time); // 只选中时间
        setSelectLabel(
          `${contractOperation.time.day}天${contractOperation.time.hour}时${contractOperation.time.minute}分${contractOperation.time.second}秒`,
        );
        break;
      case radioState.count && !radioState.time:
        console.log(111, contractOperation.count); // 只选中计数
        setSelectLabel(`${contractOperation.count.frequency}次`);
        break;
      case radioState.time && radioState.count:
        console.log("全部选中", contractOperation); // 同时选中时间和计数
        setSelectLabel(
          `${contractOperation.time.day}天${contractOperation.time.hour}时${contractOperation.time.minute}分${contractOperation.time.second}秒,${contractOperation.count.frequency}次`,
        );
        break;
      default:
        console.log(111, "未选中"); // 都没选中
    }
  }, [radioState, contractOperation]);
  return (
    <Fragment>
      <Select style={{ width: 200 }} value={selectLabel} />
      <Radio
        name={"time"}
        checked={radioState.time}
        onClick={onRadioClick}
        // onClick={(e)=>onRadioClick.bind(null, e,contractOperation.time)}
      >
        <div>
          <Input name={"time.day"} onChange={handleInputChange} />
          <span>天</span>
        </div>
        <div>
          <Input name={"time.hour"} onChange={handleInputChange} />
          <span>时</span>
        </div>
        <div>
          <Input name={"time.minute"} onChange={handleInputChange} />
          <span>分</span>
        </div>
        <div>
          <Input name={"time.second"} onChange={handleInputChange} />
          <span>秒</span>
        </div>
      </Radio>
      <Radio
        name={"count"}
        checked={radioState.count}
        onClick={onRadioClick}
        // onClick={(e)=>onRadioClick.bind(null, e,contractOperation.count)}
      >
        <Input name={"count.frequency"} onChange={handleInputChange}></Input>
        <span>次数</span>
      </Radio>
    </Fragment>
  );
};
export default ContractSelect;

