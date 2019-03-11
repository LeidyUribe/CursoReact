import React from 'react'
import {Button,Segment} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

class StatePage extends React.Component{
    state = {
        likes:0
    }

    addLike = () =>{
        this.setState({
            likes:this.state.likes +1
        })
    }

    render(){
        const {likes} = this.state
        return(
            <Segment>
                <h1>Local state</h1>
                <Button onClick={this.addLike} color='red' content='like' icon='heart' label={{basic:true,color:'red',pointing:'left',content:likes}}></Button>
                <br/>
                <Link to="/">go to dashboard</Link>
            </Segment>
        )
    }
}
const mapStateToProps = (state) => ({
    likes: state.character.likes
})
export default connect(mapStateToProps, {})(StatePage);