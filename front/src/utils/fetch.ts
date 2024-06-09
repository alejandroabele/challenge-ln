const fetchBff = async (url: string, options = {}) => {
    const baseUrl = process.env.NEXT_PUBLIC_BFF_API_ROUTE;
    const res = await fetch(`${baseUrl}${url}`, { ...options, cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

export { fetchBff };
