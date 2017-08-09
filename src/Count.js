import React, { Component } from "react"
import { connect } from 'react-redux';
import { deleteTask } from './Store'


const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}


const mapDispatchToProps = {
  deleteTask: deleteTask,
}


class Count extends Component {
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  // this.handleSubmit = this.handleSubmit.bind(this)


    // method = () => {
    //     // It is a bound method, means `this` is preserved
    // }

    // methodWithParams = (params) => {
    //     // Bound method with passed parameters
    // }

  // handleChange = (evt) => {
  //   let newTask = evt.value
  //   this.setState({
  //     task: newTask
  //   })
  // }

  handleClick = (taskName) => {
    this.props.deleteTask(taskName)
  }

  // handleSubmit = (evt) => {
  //   evt.preventDefault()
  //   this.props.addTask({name: this.state.task, timestamp: Date.now()})
  // }


  render() {
    // console.log("Count state.tasks", this.props.tasks)


    return (
      <div className="tasksWrapper">

        <h2 className="myItems">My items ({this.props.tasks.length})</h2>
        <hr />
        <div className="tableHeaderWrapper">
          <div className="tableHeader name"><h3>Name</h3></div>
          <div className="tableHeader assigned"><h3>Assigned</h3></div>
          <div className="tableHeader delete"><h3>Delete</h3></div>
        </div>

        { this.props.tasks.length > 0 && this.props.tasks.map((task, idx) => {
          let evenOrOdd = idx % 2 === 0 ? "taskListItemEven" : "taskListItemOdd";
          return (
            // <p key={task.name}>
            //   <span>{task.name}</span>
            //   <span>{task.timestamp}</span>
            //   <button className="deleteIt" onClick={() => this.handleClick(task.name)}>X</button>
            // </p>
            <div className={evenOrOdd} key={task.name}>
              <div className="indivTask name"><p>{task.name}</p></div>
              <div className="indivTask assigned"><p>{task.timestamp}</p></div>
              <div className="indivTask delete"><button className="deleteIt" onClick={() => this.handleClick(task.name)}>X</button></div>
            </div>
          )
        })
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
