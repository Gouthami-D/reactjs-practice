import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log(props);

        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default"
            }
        }
        console.log("construcor is called")
    }

    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/Gouthami-D");
        const json= await data.json();
        
       
        this.setState({ 
            userInfo:json
        })
        
        console.log(json,"jsonS")
        console.log("ComponentDid Mount")
    }
    componentDidUpdate(){
    console.log("ComponentDid UPdate")
    }S

    componentWillUnmount(){
        console.log("Component Will unmountS")
    }
    
    render(){

        const {login,id,avatar_url} =this.state.userInfo
        // const {count,count2}=this.state
        // const{name,location}=this.props
        console.log("render is called")

        return(
            <>
            {/* <h1>Count: {this.state.count}</h1> before destructuring */}
            {/* <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1> */}
            {/* NEVER UPDATE STATE VARIABLES DIRECTLY. LIKE this.state.count=this.state.count+1 */}
            {/* whenever react comes to the setState() function to update the value it goes to the this.state{} object and updates only the variables in the function and does not touches all the variables in the global state i.e, this.state */}
            {/* <button onClick={()=>{
                this.setState({
                    count:count+1,
                    count2:count2+1
                })
            }}>Click</button> */}
            <img src={avatar_url}/>
            <h2>{login}</h2>
            <h2>{id}</h2>
            {/* <h2>{designation}</h2> */}
            </>
        )
    }
}

export default UserClass