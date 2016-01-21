import React from 'react'

const { bool, func, number, object, string } = React.PropTypes;

export const Tab = React.createClass({
  contextTypes: {
    styles: object
  },

  propTypes: {
    isActive: bool.isRequired,
    index: number.isRequired,
    onChange: func.isRequired,
    title: string.isRequired
  },

  componentDidMount() {
    if (this.props.isActive) {
      this.props.onChange(this.props.index, this.props.children)
    }
  },

  render() {
    const { children, index, isActive, onChange, title } = this.props
    const { styles } = this.context

    return (
        <div
            onClick = { () => onChange(index, children) }
            style = {{ ...styles.tab, ...(isActive? styles.activeTab : {}) }}
        >
          { title }
        </div>
    )
  }
})

