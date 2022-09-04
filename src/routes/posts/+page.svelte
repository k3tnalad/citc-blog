<script>
    export let data;
    console.log(data);
</script>
    
<h1>Blog</h1>

<ul>
    {#each data.posts as post}
        <li>
            <h2><a href={post.path}>{post.meta.title}</a></h2>
            <small>Published on: {post.meta.published}</small>
        </li>
    {/each}
</ul>

