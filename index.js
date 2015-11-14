import React from 'react'
import ReactDOM from 'react-dom'
import { Cond, T, Clause } from 'react-cond'

let Positive = () => (
  <h5> i am Positive </h5>
)

let Negative  = () => (
  <h5> i am Negative </h5>
)

let Zero = () => (
  <h5>i am Zero</h5>
)

class ExampleApplication extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      test: 0
    }
  }

  // {[ x => x > 0, <Positive key={0} /> ]}
  // {[ x => x == 0, <Zero key={1} /> ]}
  // {[ x => x < 0, <Negative key={2}/> ]}
  render() {
    return (
      <Cond value={this.state.test}>
        <Clause test={x => x > 0}> <Positive /> </Clause>
        <Clause test={x => x == 0}> <Zero /> </Clause>
        <Clause test={x => x < 0}> <Negative /> </Clause>
      </Cond>
    )
  }
}

ReactDOM.render(
  <ExampleApplication  />,
  document.getElementById('container')
);
