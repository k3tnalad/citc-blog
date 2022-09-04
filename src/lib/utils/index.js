export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob(`/src/routes/posts/*.md`) 
    // import.meta.glob is a Vite function. It imports any files that match the glob (wildcard string) provided—in this case, all .md files inside src/routes/blog.
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver()
            const postPath = path.slice(11, -3)
            return {
                meta: metadata,
                path: postPath,
            }
        })
    )
    console.log(allPosts)
    return allPosts
}