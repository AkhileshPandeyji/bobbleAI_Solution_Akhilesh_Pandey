import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import axios from 'axios'

class FacebookBtn extends Component {
  state = {}
  componentClicked = () => {
    console.log("clicked");
  }
  responseFacebook = (response) => {
    if(response.accessToken !== undefined){
      // this.props.onRegister();
      axios.post("https://reqres.in/api/register",{"email":response.email,"password":response.id}).then((response)=>{
            console.log(response.status);
            if(response.status === 200){
                alert("Registered Successfully");
                this.props.onRegister();
            }
        }).catch((error)=>{
            alert("Error: email->"+response.email+" password->"+response.id);
        });
    }
  }
  render() {
    return (
      <FacebookLogin
        appId="624659878438785"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        render={renderProps => (
          <button class="facebook-btn" onClick={renderProps.onClick}><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18px" height="18px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z" /><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg></div><span style={{paddingRight:5}}></span>Sign up with Facebook</button>
        )}
        callback={this.responseFacebook} />
    );
  }
}

export default FacebookBtn;