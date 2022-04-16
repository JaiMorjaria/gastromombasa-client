import React from "react";
import {Link } from "react-router-dom";
import Check from '@material-ui/icons/Check';
import Fab from '@material-ui/core/Fab'

const Success = () => {


    return(
    <div style={{display:'flex', height:'100vh', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>

        <Fab style={{backgroundColor:'#4BB543', color: '#fff', }} component={Link} to='/'> 
            <Check />
        </Fab>
        <div style={{paddingTop: 20, fontSize: 24}}>      
            You have successfully submitted an appointment request. We will be in touch shortly.
            </div>
 
    </div>
    )
}
export default Success