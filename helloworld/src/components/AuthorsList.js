import React, { Component } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import { Card, CardContent, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";


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

    componentDidMount(){
        axios.get('http://localhost:3000/authors?_embed=quotes')
        .then(response => this.setState({"authors" : response.data}));
    }

}