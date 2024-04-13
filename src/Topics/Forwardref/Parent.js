import { useRef } from "react";
import Child from "./Child";
import './Styles.css'

const Parent = () => {
    const ref = useRef();

    const handleClick = () => {
        ref.current.focus();
    }

    return <>
        <Child ref={ref} />
        <button className="common" onClick={handleClick}>Click to Focus</button>
    </>
}

export default Parent;