import  React  from "react";
import { Link } from "react-router-dom";
class Detail extends React.Component{
    state = {}
    render(){
        return(
            <div>
                <h1>Detail</h1>
                <Link to="/">go to dashboard</Link>
            </div>
        )
    }    
}

export default Detail;