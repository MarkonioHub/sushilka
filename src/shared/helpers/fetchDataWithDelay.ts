interface ApiResponse {
  data: [],
  next?: number
}

export const fetchDataWithDelay = async (url: string, delayMs: number): Promise<ApiResponse> => {
  try {
    await new Promise(resolve => setTimeout(resolve, delayMs))
    const response = await fetch(`${import.meta.env.VITE_VUE_API_URL}/${url}`)
    if (!response.ok) throw new Error(response.statusText)
    return await response.json()
  } catch (error) {
    console.error(`Error fetching /${url}:`, error)
    return {
      data: []
    }
  }
}
