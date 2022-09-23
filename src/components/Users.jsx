import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export class Users extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      loading: true,
      isOpen: true,
    };
  }

  componentDidMount() {
    axios
      .get("http://liveapi.chatscrum.com/scrum/api/scrumusers/")
      .then((res) => {
        this.setState({ users: res.data, loading: false });
      });
  }

  toggleModal = () => {
    if (this.state.isOpen) {
      this.setState({
        isOpen: false,
      });
    } else {
      this.setState({ isOpen: true });
    }
  };

  render() {
    return (
      <div className="w-100">
        <h4 className="bg-dark text-light py-3 ps-2 fs-6" onClick={() => this.toggleModal()}>Connected users</h4>
        <div className={`users-list ${this.state.isOpen ? "d-block" : "d-none"}`}>
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            this.state.users.map(({ nickname, id }) => (
              <div className="py-3 border" key={id}>
                <span className="mx-2"><FA icon={faUser} /></span>
                <span>{nickname}</span>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Users;
