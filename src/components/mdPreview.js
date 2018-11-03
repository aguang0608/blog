import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'

import CodeBlock from './codeBlock'

import 'github-markdown-css/github-markdown.css'

export default class MDPreview extends Component {

  render() {
    return (
      <ReactMarkdown
        renderers={{ code: CodeBlock }}
        className="markdown-body"
        {...this.props}
      />
    )
  }
}

