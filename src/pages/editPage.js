import React, { Component } from 'react'
import MDPreview from '../components/mdPreview'
import MDEditor from '../components/mdEditor'

const styles = {

  container: {
    position: 'fixed',
    top: '0%',
    left: '0%',
    width: '100%',
    height: '100%',
  },

  editor: {
    position: 'absolute',
    top: '0%',
    left: '0%',
    width: '50%',
    height: '100%',
		boxSizing: 'border-box',
		border: 'none',
		background: 'aliceblue',
  },

  preview: {
    position: 'absolute',
    top: '0%',
    left: '50%',
    width: '50%',
    height: '100%',
    paddingLeft: '50px',
    paddingRight: '50px',
		paddingTop: '20px',
		paddingBottom: '20px',
    boxSizing: 'border-box',
		overflow: 'auto',
  },
}

export default class EditPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      source: '',
    }
  }

  render() {
    return (
      <div style={styles.container}>
				<div style={styles.editor}>
					<MDEditor 
        	  value={this.state.source}
        	  onChange={e => this.setState({ source: e.target.value })}
        	/>
				</div>

        <div style={styles.preview}>
          <MDPreview source={this.state.source} />
        </div>
      </div>
    )
  }
}
