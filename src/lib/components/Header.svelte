<header>
    <a class="title" href="/"><h3>Coffee in the coffin</h3></a>
    <nav>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/posts">Posts</a>
    </nav>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #44403c;
        padding: 1rem;
        letter-spacing: .1em;
        border: black solid 3px;
    }
    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 1rem;
    }

    a {
        text-decoration: none;
        color: #10b981;
        cursor: pointer;
    }
    a.title {
        color: aliceblue;
    }
    a:hover {
        text-decoration: dotted;
        color: #66e1b8;
    }
</style>