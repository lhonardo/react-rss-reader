import React from 'react';

class SelectUsers extends React.Component {
  render() {
    var users = [];

    for (var j = 0; j < this.props.users.length; j++){
      users.push(
        <div key={j} onClick={(e) => this.props.userClick(e)}>
            <h3 id={this.props.users[j]["id_user"]}>{this.props.users[j]["name"]}</h3>
        </div>
      );
    }

    return (<div> {users} </div>)

  }
}


export default SelectUsers;
