import assert from 'node:assert'
import {downloadFile, readZipFile, writeTextFile} from './utilities.js'

const ZIP_URL =
  'https://github.com/apollographql/apollo-rs/archive/refs/heads/main.zip'
const CACHE_FILE = new URL('../.cache/apollo-rs.zip', import.meta.url)
const DATA_DIRECTORY = new URL('../data/', import.meta.url)

await Promise.any(
  [ZIP_URL, `https://ghfast.top/${ZIP_URL}`].map((url) =>
    downloadFile({url, cacheFile: CACHE_FILE}),
  ),
)

function* getData(feature) {
  const FIXTURE_FILENAME_PREFIX = `apollo-rs-main/crates/apollo-parser/test_data/${feature}/`

  for (const file of readZipFile(CACHE_FILE)) {
    if (
      !file.name.startsWith(FIXTURE_FILENAME_PREFIX) ||
      !file.name.endsWith('.graphql')
    ) {
      continue
    }

    let name = file.name.slice(FIXTURE_FILENAME_PREFIX.length)

    assert.ok(name.startsWith('err/') || name.startsWith('ok/'))

    const testCase = {
      name: `apollo-rs/${feature}/${name}`,
      error: name.startsWith('err/'),
      input: file.data,
    }

    yield testCase
  }
}

const features = ['parser']
await Promise.all([
  writeTextFile(
    new URL('./apollo-rs.js', DATA_DIRECTORY),
    `export default ${JSON.stringify(
      features.flatMap((feature) => [...getData(feature)]),
      undefined,
      2,
    )}`,
  ),

  writeTextFile(
    new URL('../index.js', import.meta.url),
    "export {default} from './data/apollo-rs.js'",
  ),
])
