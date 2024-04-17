export function useCheckSchema(values: Record<string, any>) {
  try {
    // eslint-disable-next-line no-eval
    const obj = eval('(' + values.schema + ')')
    if (obj) {
      return obj
    }
  } catch (e) {
    return false
  }
}
