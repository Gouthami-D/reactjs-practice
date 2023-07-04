import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log(props);

        this.state={
            count:0,
            count2:4
        }
        console.log("construcor")
    }

    componentDidMount=()=>{
        console.log("Component Did mount")
    }
    
    render(){

        const {name,email,designation} =this.props
        const {count,count2}=this.state
        console.log("render")

        return(
            <>
            {/* <h1>Count: {this.state.count}</h1> before destructuring */}
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            {/* NEVER UPDATE STATE VARIABLES DIRECTLY. LIKE this.state.count=this.state.count+1 */}
            {/* whenever react comes to the setState() function to update the value it goes to the this.state{} object and updates only the variables in the function and does not touches all the variables in the global state i.e, this.state */}
            <button onClick={()=>{
                this.setState({
                    count:count+1,
                    count2:count2+1
                })
            }}>Click</button>
            
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{designation}</h2>
            </>
        )
    }
}

export default UserClass