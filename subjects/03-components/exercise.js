////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - Render a tab for each country with its name in the tab and
//   its description in the panel
// - Make it so that you can click on a tab and it will appear active
//   while the others appear inactive
// - Make it so the panel renders the correct content for the selected tab
//
// Got extra time?
//
// - Make <Tabs> generic so that it doesn't know anything about
//   country data (Hint: good propTypes help)
////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { render } from 'react-dom'
import { App } from './app'


const DATA = [
  {id: 1, name: 'USA', description: 'Land of the Free, Home of the brave'},
  {id: 2, name: 'Brazil', description: 'Sunshine, beaches, and Carnival'},
  {id: 3, name: 'Russia', description: 'World Cup 2018!'}
]

render(<App countries = { DATA }/>, document.getElementById('app'))
