export function useConfig(key: string) {
  // @ts-ignore
  const config = window.MODx?.config || {}

  return key in config ? config[key] : undefined
}
