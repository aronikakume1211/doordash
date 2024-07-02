import React, { useState } from 'react'
import Modal from './Modal';
import Checkbox from './Checkbox';

function MenuList(props) {
    const { id, name, content, price } = props.menu;
    const [showModal, setShowModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    let [count, setCount] = useState(1);
    const [details, setDetails] = useState([
        {
            id: 1,
            title: 'French fries',
            price: 3.5,
        },
        {
            id: 2,
            title: 'Bottled fries',
            price: 3.2
        },
        {
            id: 3,
            title: 'chiken fries',
            price: 3.4
        },
        {
            id: 4,
            title: 'Helal fries',
            price: 3.4
        }
    ]);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    const increment = () => {
        setCount(++count);
    }
    const decrement = () => {
        if (count < 2) return;
        setCount(--count);
    }
    return (
        <div className='menu_list' key={id} >
            <h3 onClick={handleOpenModal}>{name}</h3>
            <p className='menu_content' onClick={handleOpenModal}>{content}</p>
            <p className='menu_price'>${price}</p>
            <div className="add_to_cart_btn">
                <button>Add</button>
            </div>
            <Modal show={showModal} handleClose={handleCloseModal}>

                <h2>{name}</h2>
                <p><b>Recommended Beverages</b></p>
                <p>(Optional)•Choose up to 5</p>
                {
                    details.map((dtl, index) => {
                        return (
                            <Checkbox

                                label={dtl.title}
                                price={dtl.price}
                                isChecked={isChecked}
                                handleCheckboxChange={handleCheckboxChange}
                            />
                        )
                    })
                }
                <div className="modal_footer">
                    <div className="btns">
                        <button className='minus' onClick={decrement}>-</button>
                        <input type="number" name="0" id="" value={count} />
                        <button className='plus' onClick={increment}>+</button>
                        <button className="addcart">Add to cart - ${count * price}</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default MenuList
