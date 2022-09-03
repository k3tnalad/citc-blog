<script>
    export let data;
    const {published, title, author, Content} = data;
</script>


<article>
    <h1>{title}</h1>
    <p>Published: {published}</p>
    <small>{author}</small>
    <Content />
</article>