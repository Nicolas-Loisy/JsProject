import React, { Component } from "react";
import { Box, Container } from "@mui/system";

import {api} from "../lib/Api";


export default class AuthorsList extends React.Component {
    state = {
        "authors":[]
    };
        
    render(){
        return ( 
            <Container maxWidth = "sm">
                {
                    this.state.authors.map((v)=>{
                        return(
                            <dr>
                                <td>{v.id}</td> 
                                <td>{v.name}</td>
                                <br/>
                            </dr>
                        );
                    })
                }
            </Container>
        )
    }

    async componentDidMount(){
        const authors = await api.getAuthors();
        this.setState({authors: authors});
    }
}