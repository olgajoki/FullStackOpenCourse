/**
 * unicafe
 * 1.6-
 */

import { useState } from 'react'

const Header = ({header, secondHeader}) => {
  return(
    <>
    <h1>{header}</h1>
    <h1>{secondHeader}</h1>
    </>
  )
}

//show one statline
const StatisticLine = (props) => {
  console.log(props)
  return(
    <>
      {props.text} {props.value} <br></br>
    </>
  )
}

//show stats
const Statistics = (props) => {

  if(props.good === 0 && props.neutral === 0 && props.bad === 0){
    return(
      <p>No feedback given</p>
    )
  }
  return(
    <>
    <StatisticLine text="good" value ={props.good} />
    <StatisticLine text="neutral" value ={props.neutral} />
    <StatisticLine text="bad" value ={props.bad} />
    <StatisticLine text="all" value ={props.total} />
    <StatisticLine text="average" value ={props.average/(props.good + props.bad)} />
    <StatisticLine text="positive" value ={(props.good/props.total*100).toFixed(2) + " %"} />
    </>
    )
}

//handle button click
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  )

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //average from -1 to 1
  const [average, setAverage] = useState(0)

  const total = good + neutral + bad
  const header = "give feedback"
  const secondHeader = "statistics"

  const goodClick = () => {
    setGood(good + 1)
    setAverage(average + 1)
    console.log(average)
  }
  const neutralClick = () => {
    setNeutral(neutral + 1)
  }
  const badClick = () => {
    setBad(bad + 1)
    setAverage(average - 1)
    console.log(average)

  }

  return (
    <div>
      <Header header={header}/>      
      <Button handleClick={goodClick} text="good" />
      <Button handleClick={neutralClick} text="neutral" />
      <Button handleClick={badClick} text="bad" />
      <Header secondHeader={secondHeader}/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} />
    </div>
    
  )
}

export default App

//npm run dev

/*
kurssitiedot
1.1-1.5
*/
/*
const Header = (props) => {
  return(
    <>
    <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  console.log(props)

  return(
    <>
      <p>
      {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>  
      <p>
      {props.part3} {props.exercises3}
      </p>
    </>
  )
}

const Content = (props) => {
  console.log(props.parts)

  return(
    <>
      <Part part1={props.parts[0].name} exercises1={props.parts[0].exercises} />
      <Part part2={props.parts[1].name} exercises2={props.parts[1].exercises} />
      <Part part3={props.parts[2].name} exercises3={props.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {

  return(
    <>
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
*/