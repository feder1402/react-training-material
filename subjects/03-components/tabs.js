import React from 'react'
import { Tab } from './tab'

const { arrayOf, shape, string } = React.PropTypes;

const Panel = (props) => <div className="TabPanel" style={ styles.panel }>{ props.content }</div>;

export const Tabs = React.createClass({
  propTypes: {
    data: arrayOf(
        shape({
          title: string,
          content: string
        })
    )
  },

  getInitialState() {
    return {activeTab: 0}
  },

  onChange(activeTab) {
    this.setState({ activeTab })
  },

  render() {
    const { data } = this.props
    const { activeTab } = this.state
    const content = data[activeTab].content

    return (
        <div>
          <div className = "Tabs">
            {data.map((item, index) =>
                <Tab
                    isActive = { index === activeTab }
                    key = { index }
                    title = { item.title }
                    onChange = { () => this.onChange( index ) }
                />
            )}
          </div>
          <Panel className = "Panel" content = { content }/>
        </div>
    )
  }
})
