export function useCheckSchema(text: string) {
  const required = ['schema', 'form', 'export', 'builder', 'theme']
  try {
    // @ts-ignore
    // eslint-disable-next-line no-eval
    const obj = eval('(' + text + ')')
    if (obj) {
      required.forEach((i) => {
        if (!(i in obj)) {
          obj[i] = {}
        }
      })
      return JSON.stringify(obj, null, 2)
    }
  } catch (e) {}

  return false
}
