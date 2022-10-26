
export const jsonFetcher = (...args) => fetch(...args).then(res => res.json())
export const paginatedJsonFetcher = (...args) => fetch(...args).then(res => res.json()).then(res => res.results)