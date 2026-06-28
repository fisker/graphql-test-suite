type TestCase = {
  readonly name: string,
  readonly error: boolean,
  readonly input: string,
}

declare const Suite: readonly TestCase[]

export default Suite
