import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import colors from "../styles/colors";
import { Fonts } from "../assets/utils/fonts";
import InputField from "../components/form/InputField";
import Notification from "../components/Notification";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Loader from "../components/Loader";

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validEmail: false,
      emailAddress: '',
      loadingVisible: false,
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.goToNextStep = this.goToNextStep.bind(this);
    this.handleCloseNotification = this.handleCloseNotification.bind(this);
  }
  
  handleEmailChange(email) {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ emailAddress: email });

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
      	this.setState({ validEmail: true });
      }
    } else {
      if (!emailCheckRegex.test(email)) {
      	this.setState({ validEmail: false });
      }
    }
  }
  
  handleCloseNotification() {
    this.setState({ formValid: true });
  }
  
  goToNextStep() {
    this.setState({ loadingVisible: true });
    setTimeout(() => {
      if (this.state.emailAddress === 'i@aa.com') {
        this.setState({
          loadingVisible: false,
          formValid: false,
        });
      } else {
        this.setState({
          loadingVisible: false,
          formValid: true,
        });
      }
    }, 2000);
  }
  
  render() {
    const { loadingVisible, formValid, validEmail } = this.state;
    const showNotification = formValid ? false : true;
    return (
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.centerWrapper}>
          <Image
            source={require("../assets/img/bestrongLogoColors.png")}
            style={styles.logo2}
          />
          <Text style={styles.slogan}>A new way to socialize</Text>
        </View>

        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeading}>Forgot Your Password?</Text>
            <Text style={styles.subText}>{"Don't"} worry about it. Enter your email and {"we'll"} sort it out.</Text>
            <InputField
              labelText="email"
              labelTextSize={18}
              labelColor={colors.mainOrange}
              borderColor={colors.mainOrange}
              textColor={colors.mainOrange}
              inputType="email"
              showCheckmark={validEmail}
              checkColor={colors.mainOrange}
              onChangeText={this.handleEmailChange}
              customStyle={{ marginBottom: 30 }}
            />
          <NextArrowButton
            handleNextButton={this.goToNextStep}
          />
          </ScrollView>
        </View>
        <View style={showNotification ? {marginTop: 10} : {}}>
            <Notification
              showNotification={showNotification}
              handleCloseNotification={this.handleCloseNotification}
              type="Error:"
              firstLine="Email address doesn't match anything : /"
              secondLine="in our database."
             />
          </View>
        <Loader
          modalVisible={loadingVisible}
          animationType="fade"
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
    fontFamily: Fonts.JosefinSansBold
  },

  scrollViewWrapper: {
    marginTop: 5,
    flex: 1,
    padding: 30
  },

  scrollView: {
    flex: 1
  },

  centerWrapper: {
    alignItems: "center"
  },

  slogan: {
    fontFamily: Fonts.JosefinSansBold,
    color: colors.peach,
    marginBottom: 15
  },

  logo2: {
    height: 60,
    width: 140,
    marginTop: 30,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  
  loginHeading: {
    fontFamily: Fonts.JosefinSansBold,
    fontSize: 30,
    letterSpacing: -1,
    color: colors.peach,
    marginBottom: 10
  },  
  
  subText: {
    color: colors.peach,
    fontSize: 20,
    fontFamily: Fonts.JosefinSansRegular,
    marginBottom: 20
  }
});
