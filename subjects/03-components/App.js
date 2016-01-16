import React from 'react'
import { Tabs } from './tabs'

export const App = React.createClass({
  render() {
    var tabData = this.props.countries.map((item) => {
      let { name: title, description: content } = item
      return {title, content}
    })

    return (
        <div>
          <h1>Countries</h1>
          <Tabs data = { tabData }/>
        </div>
    )
  }
})