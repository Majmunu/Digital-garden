import React from 'react';

import Text from "./Text";
import Buttons from "./Buttons";
import ConditionalForm from "./Test";

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

function App() {
  return (
    <div className="App haha">
        <Text/>
      <Buttons/>
        {/*<ConditionalForm/>*/}
      {/*  <Suspense fallback={<div>Loading...</div>}>*/}
      {/*      <CustomComponentModule />*/}
      {/*  </Suspense>*/}
      {/*  <Collapse*/}
      {/*      items={[{ key: '1', label: 'This is default size panel header', children:  <Suspense  fallback={<div>Loading...</div>}>*/}
      {/*              <CustomComponentModule />*/}
      {/*          </Suspense> }]}*/}
      {/*  />*/}
      {/*  <Collapse*/}
      {/*      items={[{ key: '1', label: 'This is default size panel header'  }]}>*/}
      {/*      <Suspense fallback={<div>Loading...</div>}>*/}
      {/*          <CustomComponentModule />*/}
      {/*      </Suspense>*/}

      {/*      </Collapse>*/}
      {/*  <ConfigProvider*/}
      {/*      theme={{*/}
      {/*          components: {*/}
      {/*              Button: {*/}
      {/*                  colorPrimary: '#00b96b',*/}
      {/*                  algorithm: true, // 启用算法*/}
      {/*              },*/}
      {/*              Radio: {*/}
      {/*                  buttonBg: 'var(--main-bg-color)',*/}
      {/*              }*/}
      {/*          },*/}
      {/*      }}*/}
      {/*  >*/}
      {/*      <Test c={[<Select/>,<InputNumber/>]}/>*/}
      {/*<Radio.Group*/}
      {/*    options={optionsWithDisabled}*/}
      {/*    optionType="button"*/}
      {/*    buttonStyle="solid"*/}
      {/*/>*/}
      {/*  </ConfigProvider>*/}
    </div>
  );
}

export default App;

