import React from 'react';
import data from '../data/data';
import '../styles/scrumboard.scss';
import Tasks from '../components/Tasks';

export default class Scrumboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      isOpen: false,
      tasks: [],
    };
  }
  openModal = () => {
    this.setState({
      isOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };
  handleChange = (e) => {
    this.setState({
      tasks: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: false,
    });
    this.props.addTask(this.state);
    this.setState({ tasks: '' });
  };
  render() {
    return (
      <div className='scrumboard'>
        <nav className='text-light bg-dark py-4'>
          <div className='container d-flex align-items-center'>
            <h2>ChatScrumboard</h2>
            <div className='ms-auto'>
              <p className='mb-0'>Name: {data.fullname}</p>
              <p className='mb-0'>Project: {data.project}</p>
            </div>
          </div>
        </nav>
        <div className='container mt-2'>
          <p className='fs-3 col-md-6'>
            Welcome, {data.fullname} to your scrumboard application 👋
          </p>
        </div>
        <Tasks />
        
        <div className='ps-4'>
        

              <div className='add-task'>
                <div className={this.state.isOpen ? 'show' : 'hide'}>
                  <div id='modal'>
                    <div className='modal-content'>
                      <div
                        className='text-dark'
                        style={{ backgroundColor: '#DCDCDC' }}>
                        <div className='px-2 py-2 d-flex justify-content-between align-items-center'>
                          <h3>Add a new task</h3>
                          <div
                            className='fw-bolder me-4 mb-0 fs-5 px-2 border-1 border-dark border'
                            onClick={() => this.closeModal()}>
                            X
                          </div>
                        </div>
                      </div>
                      <form
                        onSubmit={this.handleSubmit}
                        className='bg-light w-100 px-4 pt-4 pb-5 d-flex flex-column'>
                        <input
                          type='text'
                          name='task'
                          className='border border-2 py-3 px-2'
                          placeholder='Enter a task'
                          onChange={this.handleChange}
                          value={this.state.content}
                        />
                        <button
                          className='ms-auto bg-primary text-light border px-3 rounded py-2 mt-2'
                          type='submit'>
                          CONFIRM
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <button
                  type='submit'
                  className='border mt-2 rounded bg-primary py-2 text-light'
                  onClick={() => this.openModal()}>
                  ADD TASK
                </button>
              </div>
      </div>
      </div>
    );
  }
}
