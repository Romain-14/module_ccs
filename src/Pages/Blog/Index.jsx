import React from "react";
import styles from './blog.module.css';

function Blog() {
    return (
        <>
            <h2 id={`${styles.title}`}>Blog de ouf</h2>
            <article className={`${styles.card}`}>
                <h3>title</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum exercitationem nostrum libero aliquid est
                    perferendis pariatur nihil consequatur cupiditate, repellat
                    voluptas possimus quaerat harum reprehenderit!
                </p>
            </article>
        </>
    );
}

export default Blog;
