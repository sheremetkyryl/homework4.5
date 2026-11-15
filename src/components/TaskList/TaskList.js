import { Component } from "react";
import styles from './TaskList.module.css'

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: 1, text: "Task1" },
        { id: 2, text: "Task2" },
        { id: 3, text: "Task3" },
      ],
    };
  }
  addTask = () => {
    const text = prompt("Your text")
    const newTask = {
      text: text
    }
    this.setState(prevState => ({
      tasks: [...prevState.tasks, newTask]
    }))
  }
  deleteTask = (id) => {
    this.setState({
        tasks: this.state.tasks.filter(task => task.id !== id)
    })
  }
  render() {
    return (
        <div className={styles.container}>
        <h1 className={styles.text}>Task List</h1>

        <button className={styles.button} onClick={this.addTask}>Add Task</button>

        <ul className={styles.list}>
          {this.state.tasks.map(task => (
            <li className={styles.item} key={task.id}>
              <p>{task.text}</p>
              <button 
              className={styles.itemButton} 
              onClick={() => this.deleteTask(task.id)}>Delete</button>
            </li>
          ))}
            
        </ul>
      </div>
    )
  }
}
