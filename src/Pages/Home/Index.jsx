import React from "react";
import styles from './home.module.css';


function Home() {
	console.log(styles);
	
    return (
        <>
            <h2>Welcome to my home</h2>

            <article className={`${styles.card}`}>
				<h3>title</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum exercitationem nostrum libero aliquid est perferendis pariatur nihil consequatur cupiditate, repellat voluptas possimus quaerat harum reprehenderit!</p>
			</article>
        </>
    );
}

export default Home;
