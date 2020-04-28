/**
 * Advanced Reminders Home Screen
 * https://github.com/linusx
 *
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import axios from 'axios';
import {View, StatusBar, SafeAreaView} from 'react-native';
import {ModernHeader} from '@freakycoder/react-native-header-view';
import LoadingError from './LoadingError';
import LoadingCard from './LoadingCard';
import ReminderList from './ReminderList';

const API = 'http://vp2k.com/api/';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoading: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    const {data} = await axios.get(API);
    this.setState({items: data.items, isLoading: false}, () => {
      return;
    });
  }

  renderElement() {
    const {items, isLoading, error} = this.state;

    if (error) {
      return <LoadingError message={error.message} />;
    }

    if (isLoading) {
      return <LoadingCard />;
    }

    return <ReminderList data={items} />;
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{flex: 1}}>
          <ModernHeader
            text="Advanced Reminders"
            leftIconType="Entypo"
            leftIconName="add-to-list"
            leftIconOnPress={() => {
              alert('Adding New Reminder');
            }}
            leftIconColor="grey"
            rightIconType="Entypo"
            rightIconName="dots-three-vertical"
            rightIconColor="grey"
            rightIconOnPress={() => {
              alert('Settings');
            }}
          />
          {this.renderElement()}
        </SafeAreaView>
      </View>
    );
  }
}

export default Home;
