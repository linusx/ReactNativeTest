import React, {Component} from 'react';
import {View, Image} from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

class ReminderCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <BouncyCheckbox
          isChecked={false}
          textColor="#000"
          unfillColor="white"
          text={this.props.item.text}
          fontFamily="ChalkboardSE-Bold"
          onPress={(checked) => console.log('Checked: ', checked)}
          iconComponent={
            <Image
              style={{height: 10, width: 10}}
              source={require('../../assets/blank.png')}
            />
          }
        />
      </View>
    );
  }
}

export default ReminderCard;
