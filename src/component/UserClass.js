import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);   
        
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
            }
        }
    }

  
   async componentDidMount(){
        // console.log("Child component did Mount");
        // api call

        const data = await fetch("https://api.github.com/users/Gulshan7250");
        const json =await data.json();

        this.setState({
            userInfo: json,
        })
        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

      componentWillUnmount(){
        console.log("Component Will Unmount");
    }
    
    render() {
        console.log("rendered");
        // const {name, location} = this.props;
        // console.log("child renderd");
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: 8271124668</h4>
            </div>
        );
    }
}

export default UserClass;

/* 

Constructor (dummy)
Render (dummy)
  <HTML dummy>
ComponentDidMount
     <api call>
     <this.setState>

     ..........UPDATE

     render(API data)
    <HTML IS LOADED WITH NEW API DATA>
componentDidUpdate

*/