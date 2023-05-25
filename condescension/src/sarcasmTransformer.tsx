export const sarcasmTransformer = (normieSpeak: string) => {
  let res = ''
  for (let i = 0; i < normieSpeak.length; i++) {
    res += i % 2 == 0 ? normieSpeak.charAt(i).toLowerCase() : normieSpeak.charAt(i).toUpperCase()
  }
  return res
}
