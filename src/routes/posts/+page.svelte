<script>
    import '../../lib/styles/style.scss';
    import { fade, fly } from 'svelte/transition'
    export let data;
</script>
    
<h1>Blog</h1>

<div class="blogPosts-container">
{#each data.posts as post}
    <div transition:fade="{{duration: 150, x:50}}" class="blogPost">
        <h2><a href={post.path && console.log(post.path)}>{post.meta.title}</a></h2>
        <section class="blogPost_details">
            <small class="desc">Some short description of an article</small>
            <small>Published on: {post.meta.published}</small>
        </section>
    </div>
{/each}
</div>

<style lang="scss">
    .blogPosts-container {
        display: flex;
        justify-items: center;
        align-items: center;
        flex-direction: column;
    }
    div.blogPost {
        background: black;
        border-radius: 10px;
        padding: 1em 2em;
        width: 80%;
        margin-bottom: 1rem;
        box-shadow: 0 0 3px hsl(0, 20%, 100%);
        h2, a {
            font-size: large;
            font-weight: normal;
            text-decoration: none;
            color: inherit;
            margin-bottom: 1em;
        }
        h2:hover > a:hover {
            box-shadow: 0 0 4px #3c896d;
            color: #3c896d;
        }
        section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #6c757d;
        }
     }

</style>