import React from 'react'

const { bool, func, object, string } = React.PropTypes;

export const Tab = React.createClass({
  contextTypes: {
    styles: object
  },

  propTypes: {
    isActive: bool.isRequired,
    onChange: func.isRequired,
    title: string.isRequired
  },

  render() {
    const { isActive, onChange, title } = this.props
    const { styles } = this.context

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

