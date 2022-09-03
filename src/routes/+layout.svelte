<script>
    import Header from "$lib/components/Header.svelte";
    import '$lib/styles/style.scss';
</script>

<Header />

<main>
    <slot></slot>
</main>

<footer>This footer should be visible at all pages</footer>