import React from 'react';

class SelectUsers extends React.Component {
  render() {
    var users = [];

    for (var j = 0; j < this.props.users.length; j++){
      users.push(
        <ul className="list-group" key={j} onClick={(e) => this.props.userClick(e)}>
            <li className="list-group-item" id={this.props.users[j]["id_user"]}>{this.props.users[j]["name"]}</li>
        </ul>
      );
    }

    return (
      <div>
        <h2>Para começar selecione um usuario:</h2>

        {users}
      </div>
    )

  }
}


export default SelectUsers;
