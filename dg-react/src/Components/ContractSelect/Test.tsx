import { Radio } from 'antd';
import { useState } from 'react';

export const YourComponent = () => {
    const [radioState, setRadioState] = useState({
        count: false,
        time: false,
    });

    const handleRadioChange = (name:any) => {
        setRadioState((prevState) => {
            const updatedState = { ...prevState };
            // @ts-ignore
            updatedState[name] = !prevState[name];
            return updatedState;
        });
    };

    return (
        <div>
            <Radio
                name="count"
                checked={radioState.count}
                onChange={() => handleRadioChange('count')}
            >
                Count
            </Radio>
            {/*<Radio*/}
            {/*    name="time"*/}
            {/*    checked={radioState.time}*/}
            {/*    onChange={() => handleRadioChange('time')}*/}
            {/*>*/}
            {/*    Time*/}
            {/*</Radio>*/}
        </div>
    );
};