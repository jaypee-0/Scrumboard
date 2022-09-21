import React from 'react';
import { Link } from 'react-router-dom';

export class Signin extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='col-12 mt-2 mt-md-5'>
          <div className='text-center'>
            <h3>Sign in here</h3>
          </div>
          <form className='d-flex flex-column col-md-6 col-lg-5 mx-auto'>
            <label>Email</label>
            <input type='text' className='py-2 border border-3 mb-4 ' required />
            <label>Password</label>
            <input type='text' className='py-2 border border-3 mb-4 ' required />
            <label>User type</label>
            <select name='' id='' className='border border-3 mb-4 py-2' required>
              <option>Developer</option>
              <option>Owner</option>
            </select>
            <Link to={'/scrumboard'}>
              <button className='border-0 bg-primary rounded ms-auto text-light py-3 px-4'>
                Sign in
              </button>
            </Link>
            <p>
              Don't have an account?{' '}
              <span>
                <Link to={'/sign-up'}>sign up</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
