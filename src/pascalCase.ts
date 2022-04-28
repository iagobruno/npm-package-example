import camelCase from './camelCase'

export default function pascalCase(txt: string): string {
  const transformed = camelCase(txt)
  return transformed.charAt(0).toUpperCase() + transformed.slice(1)
}
