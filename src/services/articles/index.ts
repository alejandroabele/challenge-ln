async function fetchArticles() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BFF_API_ROUTE}/articles`, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()

}

export {
    fetchArticles
}