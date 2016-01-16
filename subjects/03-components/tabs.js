import React from 'react'
import { Tab } from './tab'
import { styles } from'./styles'

const { arrayOf, shape, string } = React.PropTypes;

const Panel = (props) => <div className="TabPanel" style={ styles.panel }>{ props.content }</div>;

export const Tabs = React.createClass({
  propTypes: {
    tabs: arrayOf(
        shape({
          title: string,
          content: string
        })
    )
  },

  getInitialState() {
    return {activeTab: 0}
  },

  render() {
    const { tabs } = this.props
    const { activeTab } = this.state
    const content = tabs[activeTab].content

    return (
        <div>
          <div>
            {tabs.map((tab, index) =>
                <Tab
                    key = { index }
                    isActive = { index === activeTab }
                    title = { tab.title }
                    onChange = { () => this.setState({ activeTab: index }) }
                />
            )}
          </div>
          <Panel content = { content }/>
        </div>
    )
  }
})
