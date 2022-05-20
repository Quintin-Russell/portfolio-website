export default async (api, data, funct) => {
  try {
    const params = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const response = await fetch(api, params)
    if (response.ok) return funct
  } catch (e) {
    window.alert('Oops! Something went wrong. Please reload the page.')
  }
}
