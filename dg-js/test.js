const data = {
    1: {
        leftCondition: {
            label: "变量值",
            value: "variable",
            key: "variable",
        },
        leftConditionValue: {
            label: "其他组件",
            value: "other",
            key: "other",
        },
        operatorValue: undefined,
        rightCondition: undefined,
        rightConditionValue: undefined,
    },
    1698832135621: {
        leftCondition: {
            label: "元件文本",
            value: "elementText",
            key: "elementText",
        },
        leftConditionValue: {
            label: "当前组件",
            value: "currentElement",
            key: "currentElement",
        },
        operatorValue: {
            label: "≠",
            value: "unequal",
            key: "unequal",
        },
        rightCondition: undefined,
        rightConditionValue: "2",
    },
};

const resultArray = [];

for (const key in data) {
    if (data.hasOwnProperty(key)) {
        const subObject = data[key];
        const subArray = [];
        for (const prop in subObject) {
            if (subObject.hasOwnProperty(prop)) {
                const propValue = subObject[prop];
                if (propValue && typeof propValue === "object" && propValue.label) {
                    subArray.push(propValue.label);
                } else if (typeof propValue === "string") {
                    subArray.push(propValue);
                } else if (propValue === undefined) {
                    subArray.push(propValue);
                }
            }
        }
        resultArray.push(subArray);
    }
}

console.log(resultArray);
resultArray.map((item)=>{
    console.log(item[0],item[1],item[2],item[3],[4])
})