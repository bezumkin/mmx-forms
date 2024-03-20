export function useLexicon(key: string, placeholders?: Record<string, string | number>, amount?: number | string) {
  // @ts-ignore
  const {lexicon} = window.mmxForms || {lexicon: {}}
  if (key in lexicon) {
    let value = lexicon[key]
    if (placeholders) {
      Object.keys(placeholders).forEach((i: string) => {
        value = value.replaceAll('{' + i + '}', placeholders[i])
      })
      if (amount !== undefined) {
        const tmp = value.split('|')
        const idx = pluralRule(Number(amount), tmp.length)
        if (tmp[idx]) {
          value = tmp[idx]
        }
      }
    }
    return value
  }
  console.warn(`Could not load lexicon key: "${key}"`)

  return key
}

function pluralRule(choice: number, choicesLength: number) {
  if (choice === 0) {
    return 0
  }

  const teen = choice > 10 && choice < 20
  const endsWithOne = choice % 10 === 1
  if (!teen && endsWithOne) {
    return 1
  }
  if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
    return 2
  }

  return choicesLength < 4 ? 2 : 3
}
