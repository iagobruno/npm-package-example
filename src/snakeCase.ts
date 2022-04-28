import { transform } from './transform'

export default function snakeCase(txt: string): string {
  const transformed = transform(txt, {
    char: '_',
  })
  return transformed.toLowerCase()
}
