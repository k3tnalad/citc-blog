export async function load({ params }){
    const post = await import(`../${params.slug}.md`)
    const {title, published, author} = post.metadata;
    const Content = post.default;

    return {
        Content,
        published,
        title,
        author,
    }
}