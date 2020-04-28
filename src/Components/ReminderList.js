import React, {Component} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import ReminderCard from '../Components/ReminderCard';

/*
const [refreshing, setRefreshing] = React.useState(false);

const onRefresh = React.useCallback(() => {
  setRefreshing(true);

  wait(2000).then(() => setRefreshing(false));
}, [refreshing]);
*/
class ReminderList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          {this.props.data.map((item) => {
            return <ReminderCard key={item.key} item={item} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

export default ReminderList;
