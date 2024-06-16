import React, { useState } from 'react';
import "./ToggleStyle.css";

const Toggle = () => {
    // 1. enabling state : useState(initialize value)
    // 2. initialize state : useState(false)
    // 3. reading state
    // 4. update state
    // note: phải viết hook useState ở trên cùng không viết trong vòng lặp câu điều kiện
    // và chỉ dùng trong function hoặc component chứ không dùng trong class
    const [on, setOn] = useState(false);
    // initialize value: boolean, number, string, undefined, null, array, object
    // re-render để cập nhật ra Dom
    const handleToggle = () => {
        setOn((on)=> !on)
    }
    return (
        <div>
            <div className={`toggle ${on? 'active':''}`} onClick={handleToggle}>
                <div className={`spinner ${on? 'active':''}`}>
                </div>
            </div>
        </div>
    );
};

export default Toggle;