import React from 'react'
import { Tabs } from './tabs'
import { styles } from './styles'

const { object } = React.PropTypes;

export const App = React.createClass({
  childContextTypes: {
    styles: object
  },

  getChildContext: function () {
    return {styles};
  },

  render() {
    return (
        <div>
          <h1>Flexible tabs</h1>
          <Tabs>
            <Tab title="Tab1">Content for Tab 1</Tab>
            <Tab title="Tab2">Content for Tab 2</Tab>
            <Tab title="Tab3">Content for Tab 3</Tab>
            <Tab title="Tab4">Content for Tab 4</Tab>
          </Tabs>
        </div>
    )
  }
})