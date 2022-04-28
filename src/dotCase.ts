import { transform } from './transform'

export default function dotCase(txt: string): string {
  return transform(txt, {
    char: '.',
  })
}
