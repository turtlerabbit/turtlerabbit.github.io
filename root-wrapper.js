import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from './src/components/codeBlock'

const components = {
  'p.inlineCode': props => (
    <code {...props} style={{ backgroundColor: 'lightyellow', padding: 0, fontSize: 17 }} />
  ),
  code: CodeBlock
}

 export const wrapRootElement = ({element}) => 
  (<MDXProvider components={components}>{element}</MDXProvider>)