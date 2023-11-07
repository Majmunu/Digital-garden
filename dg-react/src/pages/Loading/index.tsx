import React, { Fragment } from "react";
import Boxes from "./Spring";
interface LoadingPageProps {

}
const LoadingPage:React.FC<LoadingPageProps>=(props)=> {
    return (
        <Fragment>
            <div className={'min-h-screen'}>
                <Boxes/>
                <p>Loading...</p>
            </div>
        </Fragment>
    );
}
export default LoadingPage