import React, { Component } from "react";

import Button from "@mui/material/Button";
import { Card, CardContent, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import {api} from "../lib/Api";

export default class QuotesList extends React.Component {
    state = {
        "quotes":[]
    };
        
    render(){
        return ( 
            <Container maxWidth = "sm">
                <Button>Valider</Button>
                {
                    this.state.quotes.map((v)=>{
                        return(
                                <Box mt={3}>

                                    {/* <Quote author={this.state.author} quote={quote}/> */}


                                    <Card>
                                        <CardContent>
                                            <Typography color="text.secondary">
                                                {v.actor}    
                                            </Typography>
                                            <Typography>
                                                {v.content}
                                            </Typography>
                                            <Typography>
                                                Author : {v.author.name}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                        );
                    })
                }
            </Container>
        )
    }

    async componentDidMount(){
        const quotes = await api.getQuotes();
        this.setState({quotes: quotes});
    }
}