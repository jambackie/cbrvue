export default async function () {
  let code = ''
  try {
    code = await fetch('http://ip-api.com/json')
    code = await code.json()
    code = code.countryCode.toUpperCase()
  } catch (e) {
    console.error(e)
  }

  const lang = navigator.language.slice(0, 2).toUpperCase()

  return {
    code,
    lang,
  }
}
