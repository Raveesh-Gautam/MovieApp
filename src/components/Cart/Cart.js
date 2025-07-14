import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialCart = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 1,
  },
];

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const handleDelete = (title) => {
    setCart(cart.filter((item) => item.title !== title));
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-4">
<h2  style={{ fontFamily: "'Metal Mania'" }} className='d-flex justify-content-center align-item-center fw-bold fst-italic '>CART</h2>
   <div className="d-flex justify-content-around fw-bold mb-3 border-bottom border-dark pb-2">
  <span className="border-bottom border-dark pb-1">ITEM</span>
  <span className="border-bottom border-dark pb-1">PRICE</span>
  <span className="border-bottom border-dark pb-1">QUANTITY</span>
</div>


      {cart.length === 0 ? (
        <p className="text-center text-muted">Cart is empty</p>
      ) : (
        <div className="d-flex flex-column gap-3">
          {cart.map((item, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center border rounded p-3"
            >
              <div className="d-flex align-items-center">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  width="60"
                  height="60"
                  className="rounded"
                />
                <div className="ms-3">
                  <h6 className="mb-1">{item.title}</h6>
                 
                </div>
              </div>
                <div className="d-flex flex-column align-items-start">
                <div className='fw-semi-bold'>{item.price}</div>
                </div>
              <div className="d-flex  align-items-center gap-3">
                <div   style={{ width: '40px', height: '32px', fontSize: '1rem' }}
               className=' d-flex border rounded justify-content-center align-items-center border-success '>{item.quantity}</div>
                
                <button
                  className="btn btn-danger btn-sm mt-2"
                  onClick={() => handleDelete(item.title)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}

          <div className="text-end fw-bold mt-3 fs-5">
            Total: ₹{totalAmount}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
