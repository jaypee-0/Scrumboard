import React from 'react';

export class AddTask extends React.Component {
  state = {
    content: '',
  };
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
      ...this.state,
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: false,
    });
    this.props.addTask(this.state);
    this.setState({ content: '' });
  };
  render() {
    return (
      <div className=''>
        <div className='add-task'>
          <div className={this.state.isOpen ? 'd-block' : 'd-none'}>
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
            className='border mt-4 px-3 rounded bg-primary py-2 text-light'
            onClick={() => this.openModal()}>
            ADD TASK
          </button>
        </div>
      </div>
    );
  }
}

export default AddTask;
