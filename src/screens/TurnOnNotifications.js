import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { transparentHeaderStyle } from '../styles/navigation';
import colors from '../styles/colors';
import GradientButton from '../components/buttons/GradientButton';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Fonts } from "../assets/utils/fonts";
import { NavigationActions } from 'react-navigation';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const navigateToTabsAction = NavigationActions.navigate({
  routeName: 'LoggedIn',
});

export default class TurnOnNotifications extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: false,
    headerTintColor: colors.peach,
    title: 'Turn on Notifications',
    headerLeft: null,
  });

  constructor(props) {
    super(props);

    this.state = {
      pressStatusNotifyBtn: false,
      pressStatusSkipBtn: false,
    };

    this.handleNotifyBtnHideUnderlay = this.handleNotifyBtnHideUnderlay.bind(this);
    this.handleNotifyBtnShowUnderlay = this.handleNotifyBtnShowUnderlay.bind(this);
    this.handleSkipBtnHideUnderlay = this.handleSkipBtnHideUnderlay.bind(this);
    this.handleSkipBtnShowUnderlay = this.handleSkipBtnShowUnderlay.bind(this);
  }

  handleNotifyBtnHideUnderlay() {
    this.setState({ pressNotifyBtn: false });
  }

  handleNotifyBtnShowUnderlay() {
    this.setState({ pressNotifyBtn: true });
  }

  handleSkipBtnHideUnderlay() {
    this.setState({ pressSkipBtn: false });
  }

  handleSkipBtnShowUnderlay() {
    this.setState({ pressSkipBtn: true });
  }

  render() {
  	const { pressNotifyBtn, pressSkipBtn } = this.state;

  	return (
  	  <View style={styles.wrapper}>
  	    <View style={styles.content}>
  	      <Icon
  	        name="speech"
  	        size={56}
  	        style={styles.icon}
  	      />
  	      <Text style={styles.title}>
  	        Notifications!
  	      </Text>
  	      <Text style={styles.description}>
  	        {"You'll"} be notified when someone contacts you, or any other important account activity.
  	      </Text>
  	      <TouchableOpacity
  	        style={[{ backgroundColor: pressNotifyBtn ? colors.mainOrange : colors.peach }, styles.notifyButton]}
  	        onPress={() => this.props.navigation.dispatch(navigateToTabsAction)}
  	        onShowUnderlay={this.handleNotifyBtnShowUnderlay}
  	        onHideUnderlay={this.handleNotifyBtnHideUnderlay}
  	        underlayColor={colors.peach}
  	      >
  	        <Text style={[{ color: colors.white }, styles.buttonText]}>Yes, {"I'd"} like notifications</Text>
  	      </TouchableOpacity>
  	      <TouchableOpacity
  	        style={[{ backgroundColor: pressSkipBtn ? colors.mainPurple : 'transparent' }, styles.skipButton]}
  	        onPress={() => this.props.navigation.dispatch(navigateToTabsAction)}
  	        onShowUnderlay={this.handleSkipBtnShowUnderlay}
  	        onHideUnderlay={this.handleSkipBtnHideUnderlay}
  	        underlayColor={colors.peach}
  	      >
  	        <Text style={[{ color: colors.peach }, styles.buttonText]}>{"I'll"} pass for now</Text>
  	      </TouchableOpacity>
  	    </View> 
  	  </View>
  	);
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    color: colors.peach,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: colors.peach,
    //fontFamily: Fonts.JosefinSansBold,
  },
  description: {
    fontSize: 16,
    paddingRight: 30,
    marginTop: 15,
    lineHeight: 22,
    //fontFamily: Fonts.JosefinSansRegular
  },
  notifyButton: {
  	width: 260,
  	paddingTop: 12,
  	paddingBottom: 12,
  	borderRadius: 5,
  	marginTop: 40,
  },
  buttonText: {
  	fontSize: 18,
  	fontWeight: '600',
  	alignSelf: 'center',
  },
  skipButton: {
  	borderColor: colors.peach,
  	width: 170,
  	borderWidth: 1,
  	paddingTop: 12,
  	paddingBottom: 12,
  	borderRadius: 5,
  	marginTop: 15,
  }
});

TurnOnNotifications.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
};