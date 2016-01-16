import React from 'react'
import { styles } from './styles'

const { arrayOf, bool, func, shape, string } = React.PropTypes;

export const Tab = React.createClass({
  propTypes: {
    isActive: bool.isRequired,
    onChange: func.isRequired,
    title: string.isRequired
  },

  onClick() {
    this.props.onChange(event.target.key)
  },

  render() {
    const { isActive, title } = this.props;
    const style = isActive ? styles.activeTab : styles.tab

    return (
        <div className="Tab" onClick={ this.onClick } style={style}>{title}</div>
    )
  }
})

