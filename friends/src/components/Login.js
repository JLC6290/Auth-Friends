import React from "react"
import { axiosAuth } from "../utils/axiosAuth"

class Login extends React.Component {
    state = {
        creds: {
            username: "",
            password: ""
        }
    }

    handleChange = event => {
        this.setState({
            creds: {
                ...this.state.creds,
                [event.target.name]: event.target.value
            }
        })
    }

    login = event => {
        event.preventDefault()
        axiosAuth()
            .post("/api/login", this.state.creds)
            .then(response => {
                localStorage.setItem('token', JSON.stringify(response.data.payload))
                this.props.history.push("/friends")
            })
            .catch(error => {
                console.log({ error })
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                        type="text"
                        name="username"
                        value={this.state.creds.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        value={this.state.creds.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login