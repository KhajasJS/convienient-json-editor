import Editor, { Schema } from '../lib/index'
import Head from 'next/head'
import { prettyPrintJson } from 'pretty-print-json'
import { useState } from 'react'

const schema: Schema = {
  type: 'object',
  properties: {
    number: {
      type: 'number'
    },
    object: {
      type: 'object',
      properties: {
        subProp1: {
          type: 'number'
        },
        subProp2: {
          type: 'number'
        }
      }
    }
  }
}

const App = (): JSX.Element => {
  const [json, setJson] = useState({
    number: 100,
    object: {
      subProp1: 1,
      subProp2: 2
    }
  })
  const toHtml = (prettyPrintJson ?? window.prettyPrintJson).toHtml
  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/pretty-print-json@0.4/dist/pretty-print-json.css' />
        <script src='https://cdn.jsdelivr.net/npm/pretty-print-json@0.4/dist/pretty-print-json.min.js' />
      </Head>
      <Editor schema={schema} value={json} onChange={setJson} />
      <p>Output Json</p>
      <pre dangerouslySetInnerHTML={{ __html: toHtml(json) }} />
    </>
  )
}

export default App
