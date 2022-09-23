import React from 'react';
import axios from 'axios';
import Data from '../data/data';
import Tasks from '../components/Tasks';
import Users from '../components/Users';
import AddTask from '../components/AddTask';
import '../styles/scrumboard.scss';

export default class Scrumboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      isOpen: false,
      tasks: [],
    };
  }
  addTask = (task) => {
    task.id = Math.random().toString(36).slice(2, 9);
    let tasks = [...this.state.tasks, task];
    this.setState({ tasks });
  };
  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };

  componentDidMount() {
    axios
      .get('http://liveapi.chatscrum.com/scrum/api/scrumgoals/')
      .then((res) => {
        this.setState({ tasks: res.data });
        console.log(res);
      });
  }

  render() {
    return (
      <>
        <section className='scrumboard relative mb-5'>
          <nav className='text-light bg-dark py-4'>
            <div className='container d-flex align-items-center'>
              <h2>ChatScrumboard</h2>
              <div className='ms-auto'>
                <p className='mb-0'>Name: {Data.fullname}</p>
                <p className='mb-0'>Project: {Data.project}</p>
              </div>
            </div>
          </nav>
          <div className='container mt-2'>
            <p className='fs-3 col-md-7 col-lg-5'>
              Welcome, {Data.fullname} to your scrumboard application 👋
            </p>
          </div>
          <div className='container d-flex mt-4 justify-content-between'>
            <Tasks data={this.state.tasks} deleteTask={this.deleteTask} />
            <Users />
          </div>
          <div className='container'>
            <AddTask addTask={this.addTask} />
          </div>
        </section>
      </>
    );
  }
}
