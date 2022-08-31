export const validateUrl = url => {
  const urlRegex =
    /^(http(s?):\/\/)?(?:www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_.~#?&//=]*)$/
  return urlRegex.test(url)
}
export const throtle = (callback, delay) => {
  let inThrothle = false
  return (...args) => {
    const [event] = args
    if (event.target) event.preventDefault()
    if (inThrothle) return

    callback(...args)
    inThrothle = true
    setTimeout(() => {
      inThrothle = false
    }, delay)
  }
}
export const CopyUrl = async (url = 'nourl') => {
  let error = ''
  try {
    await navigator.clipboard.writeText(url)
  } catch (err) {
    error = err
  }
  return error
}
