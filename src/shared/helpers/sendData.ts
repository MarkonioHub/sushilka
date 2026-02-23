export async function sendData<T> (url: string, body: object) : Promise<T> {
  try {
    const response = await fetch(`${import.meta.env.VITE_VUE_API_URL}/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    if (!response.ok) throw new Error(response.statusText)
    return await response.json()
  } catch (error) {
    throw new Error(`Error send data /${url}, text error: ${error}`)
  }
}
