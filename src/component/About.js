import { Component } from "react"
import User from "./User"
import UserClass from "./UserClass"

class About extends Component{
  constructor(props){
    super(props);

    console.log("Parent Constructor")
  }

  componentDidMount(){
    console.log("Parent Component Did Mount");
  }
  render(){
    console.log(" Parent Render");
    return (
    <div>
      <h1>About</h1>
      <h2>This is Namaste React Web Series</h2>
      <UserClass/>
    </div>
  )
  }
}
/*
- Parent Constructor
- Parent render

   - First Constructor
   - First render

   - Second Constructor
   - Second render

   <DOM UPDATED -in SINGLE BATCH>
   - First ComponentDidMount
  - Second ComponentDidMount

- Parent ComponentDidMount
*/

export default About;
