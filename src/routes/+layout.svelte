<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import '$lib/styles/style.scss';
</script>

<Header />

<main>
    <slot></slot>
</main>

<Footer />