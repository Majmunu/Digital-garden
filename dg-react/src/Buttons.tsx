import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, Select, Space } from "antd";
interface ButtonsProps {}
const options = [
  { value: "jack", label: "Jack" },
  { value: "lucy", label: "Lucy" },
  { value: "Yiminghe", label: "yiminghe" },
  { value: "disabled", label: "Disabled", disabled: true },
];
const Buttons: React.FC<ButtonsProps> = (props) => {
  const [conditionItems, setConditionItems] = useState([{ id: 1 }]); // 初始一个条件项
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  // 处理添加条件按钮点击事件

  // 处理添加条件按钮点击事件
  const handleAddCondition = (id?: any) => {
    const newCondition = {
      id: Date.now(), // 使用唯一标识符作为条件的ID
    };
    if(conditionItems.length)
    {
      const updatedItems = conditionItems.map((item) => {
        if (item.id === id) {
          return [item, newCondition];
        }
        return item;
      });
      setConditionItems(updatedItems.flat());
    }
    else{
      setConditionItems([newCondition])
    }

  };
  console.log(conditionItems)
  // 处理删除条件按钮点击事件
  const handleDeleteCondition = (id: any) => {
    const updatedItems = conditionItems.filter((item) => item.id !== id);
    setConditionItems(updatedItems);
  };
  return (
    <Fragment>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {conditionItems.map((item) => (
          <Fragment key={item.id}>
            <Form.Item name={item.id} key={item.id}>
              <div>
                <span>{item.id}</span>
                <Form.Item name={[item.id, "street"]}>
                  <Select options={options} />
                </Form.Item>
                <Form.Item name={[item.id, "street1"]}>
                  <Select options={options} />
                </Form.Item>
                <Form.Item name={[item.id, "street2"]}>
                  <Select options={options} />
                </Form.Item>
                <Form.Item name={[item.id, "street3"]}>
                  <Select options={options} />
                </Form.Item>
              </div>
            </Form.Item>
            <Button onClick={() => handleDeleteCondition(item.id)}>删除</Button>
            <Button onClick={() => handleAddCondition(item.id)}>添加</Button>
          </Fragment>
        ))}
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Button
        onClick={() =>
          handleAddCondition(conditionItems.length&&conditionItems[0].id)
        }
      >
        添加条件
      </Button>
    </Fragment>
  );
};
export default Buttons;
