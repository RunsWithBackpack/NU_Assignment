import React, { Component } from "react"
import { connect } from "react-redux"
import { deleteTask } from "./Store"
import {
  TasksWrapper,
  MyItems,
  HrLine,
  TableHeaderWrapper,
  TableHeaderColumn,
  TaskListItemEven,
  TaskListItemOdd,
  IndivTaskColumn,
  DeleteButton,
} from "./styled"

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
  }
}

const mapDispatchToProps = {
  deleteTask: deleteTask,
}

class Count extends Component {
  handleClick = taskName => {
    this.props.deleteTask(taskName)
  }

  render() {
    return (
      <TasksWrapper>
        <MyItems>
          My items ({this.props.tasks.length})
        </MyItems>
        <HrLine />
        <TableHeaderWrapper>
          <TableHeaderColumn flexsize="2">Name</TableHeaderColumn>
          <TableHeaderColumn>Assigned</TableHeaderColumn>
          <TableHeaderColumn flexsize="0.5">Delete</TableHeaderColumn>
        </TableHeaderWrapper>

        {this.props.tasks.length > 0 &&
          this.props.tasks.map((task, idx) => {
            return (
              <TaskListItemOdd key={task.name}>
                <IndivTaskColumn flexsize="2">
                  {task.name}
                </IndivTaskColumn>
                <IndivTaskColumn>
                  {task.timestamp}
                </IndivTaskColumn>
                <IndivTaskColumn flexsize="0.5">
                  <DeleteButton onClick={() => this.handleClick(task.name)}>
                    X
                  </DeleteButton>
                </IndivTaskColumn>
              </TaskListItemOdd>
            )
          })}
      </TasksWrapper>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)
