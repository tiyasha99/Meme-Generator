import React from "react";
class Header extends React.Component {
  render(){
    return(
      <header>
        <p>{this.props.name}</p>
      </header>
      
    )
  }
}

export default Header;