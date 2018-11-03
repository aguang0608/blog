import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import HLJS from 'highlight.js'

import 'highlight.js/styles/github.css'

export default class CodeBlock extends PureComponent {

  constructor(props) {
    super(props)

    this.setRef = this.setRef.bind(this)
  }

  setRef(el) {
    this.codeEl = el
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    HLJS.highlightBlock(this.codeEl)
  }

  render() {
    return (
      <pre>
        <code
					ref={this.setRef}
					className={`language-${this.props.language}`}
				>
        	{this.props.value}
        </code>
      </pre>
    )
  }
}

CodeBlock.defaultProps = {
  language: ''
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string
}
