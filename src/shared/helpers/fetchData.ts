export async function fetchData<T> (url: string) : Promise<T> {
  try {
    const response = await fetch(`${import.meta.env.VITE_VUE_API_URL}/${url}`)
    if (!response.ok) throw new Error(response.statusText)
    return await response.json()
  } catch (error) {
    throw new Error(`Error fetching /${url}:`)
  }
}
