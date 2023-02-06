import React, { Component } from "react";
import withRouter from "../lib/withRouter";
import {api} from "../lib/Api";
import { Container } from "@mui/system";


class Author extends React.Component {
    state = {
        "authors":[]
    };
        
    render(){
        return (
            <div>
                {this.props.params.id}
            </div>
        );
    }

    async componentDidMount(){
        const authors = await api.get();
        this.setState({authors: authors});
    }
}
export default withRouter(Author);