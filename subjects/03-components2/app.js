import React from 'react'
import { Tabs } from './tabs'
import { styles } from './styles'

const DATA = [
  {id: 1, name: 'USA', description: 'Land of the Free, Home of the brave'},
  {id: 2, name: 'Brazil', description: 'Sunshine, beaches, and Carnival'},
  {id: 3, name: 'Russia', description: 'World Cup 2018!'},
  {id: 4, name: 'Argentina', description: 'World Cup 1978!'}
]

const { object } = React.PropTypes;

export const App = React.createClass({
  childContextTypes: {
    styles: object
  },

  getChildContext: function() {
    return { styles };
  },

  render() {
    var tabData = DATA.map((item) => {
      let { name: title, description: content } = item
      return {title, content}
    })

    return (
        <div>
          <h1>Countries</h1>
          <tabs>
            <tab title = 'Tab1'>Tab 1 content</tab>
            <tab title = 'Tab2'>Tab 2 content</tab>
            <tab title = 'Tab3'>Tab 3 content</tab>
          </tabs>
        </div>
    )
  }
})