import React from "react";
import Close from '@material-ui/icons/Close'
import Fab from '@material-ui/core/Fab'
import {Link} from 'react-router-dom'

const Failure = () => {

    return(
        <div style={{display:'flex', height:'100vh', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
    
            <Fab style={{backgroundColor:'#FC100D', color: '#fff', }} component={Link} to='/'> 
                <Close />
            </Fab>
            <div style={{paddingTop: 20, fontSize: 24}}>      
                 There was a problem with your request. Please try again later.
            </div>
     
        </div>
        )
}
export default Failure