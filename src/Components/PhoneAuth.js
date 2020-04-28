import React, {Component} from 'react';
import {View, Image} from 'react-native';
import PhoneAuthComponent from 'react-native-phone-auth-component';
import axios from 'axios';

const API = 'http://vp2k.com/api/';

class PhoneAuth extends Component {
  state = {
    phone: '',
    code: '',
  };

  constructor(props) {
    super(props);
  }

  // here is where you connect to your api to redeem a user's code
  // I'm using Firebase in this example but of course you don't have to
  // To avoid confusion, I'm storing the API address in process.env.URL. You don't have to do this
  signInWithPhone(phone){
    this.setState({phone});

    return axios.post(API + '/sign-in', {
        phone,
      })
      .then((tok) => {
        return Promise.resolve();
      })
      .catch((e) => {
        alert('There was an error or something');
        return Promise.reject();
      });
  }

  redeemCode(code){
    return axios.post(process.env.URL + '/redeemCode', {
        phone: this.state.phone,
        code,
      })
      .then((res) => {
        let tok = res.data.token;
        firebase
          .auth()
          .signInWithCustomToken(tok)
          .then(() => {
            return Promise.resolve();
          })
          .catch((e) => {
            alert(e.error);
            return Promise.reject();
          });
      })
      .catch((e) => {
        alert(e.response.data.error);
        return Promise.reject();
      });
  }

  render(){
    return (
      <View style={{flex: 1}}>
        {/*           ^^^^^^^^ */}
        {/* Make sure to have flex: 1 on parent! */}

        <PhoneAuthComponent
          signInWithPhone={phone => this.signInWithPhone(phone)}
          redeemCode={code => this.redeemCode(code)}
          codeLength={4}
          buttonTextColor={'black'}
          spinnerColor={'black'}
        />
      </View>
    );
  }
}

export default PhoneAuth;
