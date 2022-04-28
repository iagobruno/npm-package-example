import snakeCase from './snakeCase'

export default function constantCase(txt: string): string {
  return snakeCase(txt).toUpperCase()
}
