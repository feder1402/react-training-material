import React from 'react'
import { Tab } from './tab'
import { styles } from'./styles'

const Panel = (props) => <div className="TabPanel" style={ styles.panel }>{ props.content }</div>;

export const Tabs = React.createClass({
  getInitialState() {
    return { activeTab: 0 }
  },

  onTabChange(activeTab, content) {
    this.setState({ activeTab, content })
  },

  render() {
    const { children } = this.props
    const { activeTab, content } = this.state

    var index = -1;
    const tabs = React.Children.map(children, (child) =>
        React.cloneElement(child,
            {
              key: ++index,
              isActive:  index === activeTab,
              index: index,
              onChange: this.onTabChange
            }))
    return (
        <div>
          <div>
          </div>
          {tabs}
          <Panel content = { content }/>
        </div>
    )
  }
})
