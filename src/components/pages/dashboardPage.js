import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {Dimmer,Loader} from 'semantic-ui-react'
import List from '../common/list'
import { increaseLikes } from '../../actions/character'
import { decreaseLikes } from '../../actions/character'
import { reset } from '../../actions/character'
import { fetchCharacterSaga } from '../../actions/character'
import { Button } from "semantic-ui-react";
class Dashboard extends React.Component {
    state = {}

    componentDidMount(){
        this.props.fetchCharacterSaga()
    }
    render() {
        const {character} = this.props
        if(character.fetching){return (<Dimmer active><Loader>Loading</Loader></Dimmer>)}
        return (
            <div>
                <h1>Dashboard</h1>
                <Button onClick={this.props.increaseLikes} color='blue'>Like to this character</Button>
                <Button onClick={this.props.decreaseLikes} >Dislike to this character</Button>
                <br />
                <br />
                <Button onClick={this.props.reset} color='red'>Reset</Button>
                <br />
                <Link to="/detail">go to detail page</Link>
                <br />
                <Link to="/state">go to State Page</Link>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    likes: state.character.likes,
    character:state.character
})

export default connect(mapStateToProps, { increaseLikes, decreaseLikes,reset,fetchCharacterSaga })(Dashboard);