export default async (api, setFunct) => {
  const result = await fetch(api)
  const resultJson = await result.json()
  return setFunct(resultJson)
}
