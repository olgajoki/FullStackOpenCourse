const Header = (props) => {
    return(
      <>
      <h1>{props.course}</h1>
      </>
    )
  }

  
const Part = ({part}) => {

    return(
      <>
        <p>
            {part.name} {part.exercises} <br></br>
        </p>
      </>
    )
  }
  
  const Content = ({parts}) => {
  
    return(
      <>
        {parts.map(part =>
            <Part key={part.id} part={part} />
            )}
      </>
    )
  }
  

const Course = ({course}) => {

    return (
        <div>
        <Header course={course.name} />
        <Content parts={course.parts}/>
      </div>
    )
}

export default Course