
import Part from "./Part"

const Content = (props) => {
    return (
      <div>
        <p>
        <Part name={props.part1} exercises={props.exercises1} />
      <Part name={props.part2} exercises={props.exercises2} />
      <Part name={props.part3} exercises={props.exercises3} />
        </p>
      </div>
    )
  }
  export default Content