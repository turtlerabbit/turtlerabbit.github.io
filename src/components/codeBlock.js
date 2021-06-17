import React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'
import styled from 'styled-components'

const Pre = styled.pre`
  text-aling: left:
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 0.5em;

  & .token-line {
    line-height: 1.5em;
    height: 1.5em;
  }
  font-family: 'consolas', Courier, monospace;
  font-size: 15px;
`

const LineNo = styled.span`
  display: inline-block;
  width:2em;
  user-select: none;
  opacity: 0.3;
`

export default ({children, className}) => {
  const matches = className.match(/language-(?<lang>.*)/)
  //const language = className.replace(/language-/, '')

  return (
    <Highlight 
      {...defaultProps} 
      code={children.trim()} 
      language={
        matches && matches.groups && matches.groups.lang
            ? matches.groups.lang
            : ''
      } 
      theme={theme}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <Pre className={className} style={{...style, padding: '10px'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}