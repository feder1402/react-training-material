import React from 'react'
import { styles } from './styles'

const { bool, func, string } = React.PropTypes;

export const Tab = React.createClass({
  propTypes: {
    isActive: bool.isRequired,
    onChange: func.isRequired,
    title: string.isRequired
  },

  render() {
    const { isActive, onChange, title } = this.props;

    return (
        <div
            onClick = { onChange }
            style = { isActive ? styles.activeTab : styles.tab }
        >
          { title }
        </div>
    )
  }
})

