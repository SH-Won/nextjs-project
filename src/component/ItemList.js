import React from 'react'
import {Grid} from 'semantic-ui-react';
import styles from './ItemList.module.css';
import Link from 'next/link';

function ItemList({posts}) {
    return (
      <div style={{marginTop:'1rem'}}>
        <Grid columns={3}>
          <Grid.Row>
            {posts.map((post) => (
              <Grid.Column key={post._id}>
                <Link href={`/view/${post._id}`}>
                <a>
                <div className={styles.img_container}>
                <img 
                className={styles.img}
                src={post.images[0]} 
                alt={post.title} 
                />
                </div>
                <div className={styles.information}>
                <strong>{post.title}</strong>
                <strong>{post.price}</strong>
                </div>
                </a>
                </Link>
              </Grid.Column>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    );
}

export default ItemList
