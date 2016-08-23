
import React, { Component } from 'react';
import {
  ActivityIndicator,
  TextInput,
  StyleSheet,
  View,
  Switch,
  Text,
} from 'react-native';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    }
  }

  componentWillMount() {
    if (this.props.filter) {
      this.setState({
        filter: this.props.filter,
      });
      alert(this.state.filter);
    }
  }

  render() {
    return (
      <View style={styles.searchBar}>
        <TextInput
          value={this.state.filter}
          ref="searchBar"
          autoCapitalize="none"
          autoCorrect={false}
          onChange={this.props.onSearchChange}
          placeholder="请输入搜索关键词..."
          onFocus={this.props.onFocus}
          style={styles.searchBarInput}
        />
        <ActivityIndicator
          animating={this.props.isLoading}
          style={styles.spinner}
        />
        <View>
          <Switch
            onValueChange={value => this.props.onSwitchChange(value)}
            value={this.props.is8Star} />
          <Text>只显示8星以上</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 15,
    padding: 3,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: 30,
  },
  spinner: {
    width: 30,
  },
});
