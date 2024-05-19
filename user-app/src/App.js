import React from 'react';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

class App extends React.Component {
  state = {
    idx: 4,
    users: [
      { name: "Mehmet", state: "online", id: 1 },
      { name: "Ali", state: "offline", id: 2 },
      { name: "Fırat", state: "busy", id: 3 }
    ]
  }

  addMethod = (name) => {
    console.log('App modülü içerisinde', name)
    //[...arrayadi,nesne]  spread operatörü
    let id = this.state.idx;
    let user = {
      name: name,
      state: 'online',
      id: id
    }

    let tUsers = [...this.state.users, user]

    this.setState({
      users: tUsers,
      idx: id + 1
    })
  }

  deleteMethod = (id) => {

    let tUsers = this.state.users.filter(user => {
      return user.id !== id
    })

    this.setState({
      users: tUsers
    })
  }

  stateChangeHandler = (data) => {
    console.log(data.state, data.id)
    let tUsers = this.state.users.map(user => {
      if (user.id === data.id) {
        user.state = data.state;
      }
      return user;
    })

    this.setState({
      users: tUsers
    })
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="col-4">
            <UserList users={this.state.users} delMethod={this.deleteMethod}
              stateChange={this.stateChangeHandler} />
            <hr />
            <AddUser addMethod={this.addMethod} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
