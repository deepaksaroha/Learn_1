import { forwardRef } from "react";

const Child = (ref) => {
    return <>
        <input className="common"
            ref={ref}
            name="focus-input"
        />
    </>
}

export default forwardRef(Child);