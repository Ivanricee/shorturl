const API_URL = 'https://api.shrtco.de/v2/'
export const getShortenenUrl = async url => {
  const urlShorten = `${API_URL}shorten?url=${url}`
  const resultUrlShorten = await fetch(urlShorten)
  return resultUrlShorten
}
