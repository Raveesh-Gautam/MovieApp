import React from 'react'
import products from '../productsArr'
import styles from './Products.module.css';
const Products = () => {
  return (
    
    <div className={styles.products}>
        <ul className={styles.products_ul} style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {products.map((ele,id)=>(
            <div key={id} className={styles.products_ul_key}>
                <div className={styles.manage}>
            <li className={styles.products_ul_title}>{ele.title}</li>
            <img  className={styles.products_ul_img} src={ele.imageUrl} alt=''/>
            <div className={styles.cardandprice}>
            <li className={styles.products_ul_price}>${ele.price}</li>
            <button className={styles.addCart}>ADD TO CARD</button>
            </div>
            </div>
            </div>
        ))}
    </ul>
    </div>
  )
}

export default Products