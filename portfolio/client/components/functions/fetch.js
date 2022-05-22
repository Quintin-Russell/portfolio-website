export default async (api, setFunct) => {
  try {
    const result = await fetch(api)
    const resultJson = await result.json()
    return setFunct(resultJson)
  } catch (e) {
    window.alert('Oops! Something went wrong. Please reload the page.')
  }
}
