import React from 'react'
import PropTypes from 'prop-types'
import CodeMirror from './codeMirror'

import 'codemirror/keymap/vim'

export default function Editor(props) {

  return (
    <CodeMirror
			mode="markdown"
			theme="monokai"
			value={props.value}
			height="300px"
			tabSize={2}
			lineNumbers={true}
      keyMap="vim"
			onChange={props.onChange}
		/>
  )
}

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

Editor.defaultProps = {
  value: ''
}
