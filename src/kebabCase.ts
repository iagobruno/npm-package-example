import { transform } from './transform'

export default function kebabCase(txt: string): string {
  const transformed = transform(txt, {
    char: '-',
  })
  return transformed.toLowerCase()
}
