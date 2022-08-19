# MODULE CSS

- permet d'avoir le même nom de class/id avec des styles différents, chacun lié à son composant

- les css modules sont reconnues par l'outil CRA, il faut par contre respecter un nommage spécifique sur les noms de fichier ex : (blog.module.css) uniquement blog pourra être changer pour correspondre au composant lié

## EXEMPLE

- le fichier du composant Blog

```jsx
    import styles from './blog.module.css';
    function Blog() {
        return (
            <>
                <h2 id={`${styles.title}`}>Blog de ouf</h2>
                <article className={`${styles.card}`}>
                    {/* reste du code*/}
                </article>
            </>
        );
    }
    export default Blog;
```

- le fichier CSS du composant Blog

```css
    .card {
        background-color: green;
        color: #fff;
    }

    #title {
        color: red;
        font-size: 3rem;
    }
```

- importer le fichier css en lui donner le nom <code>styles</code>
- <code>styles</code> -> sera un objet sous forme de propriété la key sera le nom des <code>className</code> et <code>id</code>, avec une valeur cryptée

on injecte les class/id en chainant sur styles et leur key dans un gabarit ES6 en tant que valeur de l'attribut <code>className</code> ou <code>id</code>