import React from "react";
import Form from "./Form";

class Comments extends React.Component {
    state = {
        comments: []
    }

    handleSubmit = (comment) => {
        this.setState({comments:[...this.state.comments, comment]})

    }

    render() {
        return(
            <div>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default Comments;