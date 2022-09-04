export async function load({ params }){
    const post = await import(`../${params.slug}.md`)
    const { title, published, author } = post.metadata
    const content = post.default
  
    return {
      content,
      title,
      published,
      author,
    }
  }