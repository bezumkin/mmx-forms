import moment from 'moment'

export function useDatetime(date: string | null) {
  return date ? moment(date).format('DD.MM.yyyy HH:mm') : ''
}
