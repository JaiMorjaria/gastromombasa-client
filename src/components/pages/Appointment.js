import {Paper, Typography} from '@material-ui/core'
import React from 'react'
import FormComplete from '../../FormUI/FormComplete'
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import {useTheme, useMediaQuery} from '@material-ui/core'


const Appointment = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('xs'))
  return(
    <div style={{width: '40wh'}}>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100wh', flexDirection: 'column'}}>
      <h1 style={{paddingTop: 50, paddingBottom: 10}}>Contact Us</h1>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}} >
              <div>
                <Paper elevation={4}>
                  <FormComplete />
                </Paper>
              </div> 
          </div>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: isMatch? 'column-reverse': 'row', paddingTop: 40, width: 800, paddingRight: 50}}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <EmailIcon color='secondary'/>
            <Typography noWrap>gastromombasa@gmail.com</Typography>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <LocationOnIcon style={{color: '#85d3d9'}} />
            <Typography noWrap>The Mombasa Hospital, Suite 5</Typography>
          </div>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <PhoneIcon style={{color: '#f3ff00'}}/>
            <Typography noWrap>+254 719 669425</Typography>
          </div>

          
          

        </div>
      </div>
    </div>

  )
}
export default Appointment