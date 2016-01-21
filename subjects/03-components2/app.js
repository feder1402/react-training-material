import React from 'react'
import { Tabs } from './tabs'
import { Tab } from './tab'
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
            <Tab title="Tab1">
              Content for <h1>Tab 1</h1>
            </Tab>
            <Tab title="Tab2">
              Content for <h2>Tab 2</h2>
            </Tab>
            <Tab title="Tab3">
              Content for <h3>Tab 3</h3>
            </Tab>
            <Tab title="Surprise!">
              <img src="./flamingo.jpg" height="200" width="200"/>
              <h2>Is Back!</h2>
            </Tab>
          </Tabs>
        </div>
    )
  }
})