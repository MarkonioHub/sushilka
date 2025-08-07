export function useParamsListClassMod(parameters: Array<string>) {
  if (parameters?.length === 2) {
    return "double"
  } else if (parameters?.length === 3) {
    return "triple"
  }
  return ""
}
