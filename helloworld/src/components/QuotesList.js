import React, { Component } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import { Card, CardContent, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";

import {api} from "../lib/Api";

export default class QuotesList extends React.Component {
    state = {
        "quotes":[]
    };
    // render(){
    //     return <div>
    //         <Button>Valider</Button>
    //         <Card>
    //             <CardContent>
    //                 { quote }
    //             </CardContent>
    //         </Card>

    //         <ul>
    //             {
    //                 this.state.quotes.map(item => <li>Perso : {item.actor} Citation : {item.content}</li>)
    //             }
    //         </ul>
    //     </div> 
        
    render(){
        return ( 
            <Container maxWidth = "sm">
                <Button>Valider</Button>
                {
                    this.state.quotes.map((v)=>{
                        return(
                                <Box mt={3}>
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

    // async componentDidMount(){
    //     //axios.get("http://localhost:3000/quotes?_expand=author")
    //     //.then(response => this.setState({"quotes" : response.data}));
    //     const quotes = await api.getQuotes();
    //     setState({quotes:quotes});
    // }

    async componentDidMount(){
        //axios.get("http://localhost:3000/quotes?_expand=author")
        //.then(response => this.setState({"quotes" : response.data}));
        const quotes = await api.getQuotes();
        this.setState({quotes: quotes});
    }
    

}