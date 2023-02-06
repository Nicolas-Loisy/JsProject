import React, { Component } from "react";
import withRouter from "../lib/withRouter";
import {api} from "../lib/Api";
import { Container } from "@mui/system";
import { Card, CardContent, Grid, Typography } from "@mui/material";


class Author extends React.Component {

            
    render(){
        return (
            <div>
                {this.props.params.id}

                <Container>
                    <Grid container spacing={2}>
                        {
                            this.state.author.quotes.map(quote=>{
                                return (
                                    <Grid item xs={12} key={quote.id} sm={4}> 
                                        <Card>
                                            <CardContent>
                                                <Typography variant="body2">{quote.content}</Typography>
                                                <Typography color="text.secondary">{this.state.author.name}</Typography>

                                            </CardContent>
                                        </Card>
                                    </Grid>
                                )
                            })        
                        }
                    </Grid>
                </Container>
            </div>
        );
    }

    async componentDidMount(){
        api.getAuthor(this.props.params.id).then(author =>{
            this.setState({author});
        });
    }

	state = {
		author:{
			id: "", 
			name: "", 
			quotes: []
		}
	}; 
}
export default withRouter(Author);