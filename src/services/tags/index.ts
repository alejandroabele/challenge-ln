async function fetchTags() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BFF_API_ROUTE}/tags`, { cache: 'no-store' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export {
    fetchTags
}