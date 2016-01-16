////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - render DATA.title in an <h1>
// - render a <ul> with each of DATA.items as an <li>
// - now only render an <li> for mexican food (hint: use DATA.items.filter(...))
// - sort the items in alphabetical order by name (hint: use sort-by https://github.com/staygrimm/sort-by#example)
//
// Got extra time?
// - add a select dropdown to make filtering on `type` dynamic
// - add a button to toggle the sort order
// - Hint: you'll need an `updateThePage` function that calls `render`,
//   and then you'll need to call it in the event handlers of the form controls
////////////////////////////////////////////////////////////////////////////////
import React from 'react'
import { render } from 'react-dom'
import sortBy from 'sort-by'

const DATA = {
  title: 'Menu',
  items: [
    {id: 1, name: 'tacos', type: 'mexican'},
    {id: 2, name: 'burrito', type: 'mexican'},
    {id: 3, name: 'tostada', type: 'mexican'},
    {id: 4, name: 'hush puppies', type: 'southern'}
  ]
}

function isNonEmptyArray(props, propName, componentName) {
  if (props[propName].length === 0) {
    return new Error(componentName + ": " + props[propName] + " array should not be empty")
  }
}

const {arrayOf, func, number, shape, string} = React.PropTypes

const Chooser = React.createClass({
  propTypes: {
    options: isNonEmptyArray,
    onChange: func.isRequired,
    selected: string
  },

  render()
  {
    const {options, onChange} = this.props
    const selected = this.props.selected ? this.props.selected : options[0];

    return (
        <select value={selected} onChange={(e) => onChange(e.target.value)}>
          {options.map((option) => <option key={option}>{option}</option>)}
        </select>
    )
  }
})

const MenuItem = (props: {key: id, name: name}) => <li key={props.key}>{props.name}</li>;
const Menu = React.createClass({
  propTypes: {
    data: shape({
      title: string.isRequired,
      items: arrayOf(
          shape({
            id: number.isRequired,
            name: string.isRequired,
            type: string.isRequired
          })
      )
    })
  },

  getInitialState()
  {
    return {
      foodType: 'mexican',
      sortOrder: 'ascending'
    }
  },

  handleTypeChange(foodType)
  {
    this.setState({ foodType })
  },

  handleSortChange(sortOrder)
  {
    this.setState({ sortOrder })
  },

  render()
  {
    const { data: { title, items } } = this.props
    const {foodType, sortOrder} = this.state
    var types = []

    items.forEach((item) => {
      if (types.indexOf(item.type) === -1) {
        types.push(item.type)
      }
    })

    const sortComparator = sortOrder === 'ascending'
        ? (a, b) => a.name > b.name
        : (a, b) => a.name < b.name

    return (
        <div>
          <h1>{title}</h1>
          <Chooser
              options={types}
              selected={foodType}
              onChange={this.handleTypeChange}
          />
          <ul>
            {items
                .filter((item) => item.type === foodType)
                .sort(sortComparator)
                .map((item) => MenuItem(item))
            }
          </ul>
          <div>
            Sort By:{' '}
            <Chooser
                options={['ascending', 'descending']}
                selected={sortOrder}
                onChange={this.handleSortChange}
            />
          </div>
        </div>
    )
  }
})

render(<Menu data={DATA}/>, document.getElementById('app'), function () {
  require('./tests').run()
})