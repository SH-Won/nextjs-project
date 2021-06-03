import React from 'react'
import styles from './Item.module.css';

function Item({post}) {

    return (
        <section className={styles.wrap}>
            <div className={styles.imgs_container}>
           {post.images && post.images.map((image,index) => 
            <div className={styles.img_container} key={index}>
            <img src={image} />
            </div>
            )}
            </div>
            <div className={styles.information}>
                <strong>{post.title}</strong>
                <p>{post.description}</p>
                <strong>{post.price}</strong>
            </div>
            
        </section>
    )
}

export default Item
