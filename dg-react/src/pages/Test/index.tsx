import React, { Fragment } from "react";
import styles from './style.module.less'
interface TestProps {

}
const Test:React.FC<TestProps>=(props)=> {
    return (
        <Fragment>
            <span className={styles.test}>Test</span>
        </Fragment>
    );
}
export default Test