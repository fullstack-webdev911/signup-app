import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from './Button'

class AppBarExampleComposition extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Paper style={{height:'500px',width:'25%',marginLeft:'720px',marginTop:'150px',textAlign:'center',display:'inline-block'}} zDepth={5}> 
            <h3 style={{fontSize:'20px',color:'gray',marginTop:'50px'}} >LOGIN</h3>
            <div style={{marginTop:'60px'}}>
            <p style={{width:'62%'}}>Username</p>
            <TextField
              id="text-field-default"
              /><br />
            <p style={{width:'62%'}}>Password</p>
            <TextField
              type="password"
            /><br />
            </div>
            <Button />
            <div class="TopNavigation">
              <ul>
                <li style={{listStyle:'none',font:'15px Greorgia',display:'inline',color:'#666666',float:'left',marginLeft:'70px'}}><a href="" style={{textDecoration:'none',color:'#666666'}}>Forgost Passwork</a></li>
                <li style={{listStyle:'none',font:'15px Greorgia',display:'inline',color:'#666666',float:'left',marginLeft:'110px'}}><a href="" style={{textDecoration:'none',color:'#666666'}}>Signup</a></li>
              </ul>
            </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AppBarExampleComposition;