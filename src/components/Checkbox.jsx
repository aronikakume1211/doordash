import React from 'react';

const Checkbox = ({ label, price, isChecked, handleCheckboxChange }) => {
    return (
        <div className="checkbox">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <div>
                <p className='checkbox-label'> {label}</p>
                <p className='checkbox-price'>+${price}</p>
            </div>
        </div>
    );
};

export default Checkbox;
