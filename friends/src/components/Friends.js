import React from "react"
import { axiosAuth } from "../utils/axiosAuth"
import AddFriend from "./AddFriend"
import { Route } from "react-router-dom"

class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        axiosAuth()
            .get("/api/friends")
            .then(response => {
                console.log({response})
                this.setState({
                    friends: response.data
                })
            })
            .catch(error => {
                console.log("Error with axiosAuth call from Friends component", error)
            })
    }

    render(){
        return(
            <div className="friends-wrapper">
                <header>
                    <h1>Friends: </h1>
                </header>
                {this.state.friends.map(friend => {
                    return <div>
                            <h3>{friend.name}</h3>
                            <p>Age: {friend.age}</p>
                            <p>Email: {friend.email}</p>
                        </div>
                })}
                <Route component={AddFriend}/>
            </div>
        )
    }
}

export default Friends