import React, { Component } from "react"
import { connect } from "react-redux"
import { addTask } from "./Store"
import { TaskForm, TaskInput, Hr, AddItemButton } from "./styled"

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = {
  addTask: addTask,
}

class Input extends Component {
  state = { task: "" }

  handleChange = evt => {
    let newTask = evt.target.value
    this.setState({
      task: newTask,
    })
    console.log("input state", this.state)
  }

  handleSubmit = evt => {
    console.log("IN HANDLE SUBMIT", this.state.task)
    evt.preventDefault()

    let date = new Date()

    const daysOfTheWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    let hour = date.getHours()
    let minutes = date.getMinutes().toString()
    if (minutes.length < 2) minutes = "0" + minutes
    let dayOfWeek = daysOfTheWeek[date.getDay()]
    let month = date.getMonth()
    let dateNum = date.getDate()

    let assignedAt =
      "" +
      hour +
      ":" +
      minutes +
      " on " +
      dayOfWeek +
      ", " +
      month +
      "/" +
      dateNum

    this.props.addTask({ name: this.state.task, timestamp: assignedAt })
    this.setState({
      task: "",
    })
  }

  render() {
    return (
      <div>
        <TaskForm onSubmit={this.handleSubmit}>
          <TaskInput onChange={this.handleChange} value={this.state.task} />
          <AddItemButton type="submit">Add item</AddItemButton>
        </TaskForm>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
