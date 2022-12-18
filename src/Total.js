// const Total = (props) => {
//     return (
//       <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
//     )
//   }
//   export default Total

const Total = (props) => {
    const total = props.parts.reduce((acc, part) => acc + part.exercises, 0)
    return <p>Number of exercises {total}</p>
  }
export default Total  