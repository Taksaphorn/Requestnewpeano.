import React, { useState } from 'react';
import './form.css';

const RequestNewPEA = (props) => {
    const [dtm, setDTM] = useState('');
    const [peaNo, setPEANo] = useState('');

    const handleDTMChange = (event) => {
        const value = event.target.value;
        // Check if the entered value is not a number
        if (!isNaN(value)) {
            setDTM(value);
        }
    };

    const handlePEANoChange = (event) => {
        const value = event.target.value;
        // Check if the entered value is not a number
        if (!isNaN(value)) {
            setPEANo(value);
        }
    };

    return (
        <div className='RequestNewPEA'>
            <div className='h2'>
                <h2>กรอกข้อมูล</h2>
            </div>
            <div className='user'>
                DTM : <input type='text' value={dtm} onChange={handleDTMChange} /><br/>
            </div>
                <div className='user1'>
                    PEA No. : <input type='text' value={peaNo} onChange={handlePEANoChange} />
                </div>
            <button type="submit" className="send-button">ยืนยัน</button>
            <button type="cancel" className="cancel-button">ยกเลิก</button>
        </div>
    );
}

export default RequestNewPEA;
