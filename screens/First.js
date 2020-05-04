import React from "react";

import {
  Keyboard,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Dimensions,
  KeyboardAvoidingView,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import { KeyboardAvoidingSpace } from "./KeyboardAvoidingSpace";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const { height } = Dimensions.get("window");
class First extends React.Component {
  state = {
    friends: "",
    career: "",
  };
  componentDidMount() {
    this.text.focus();
  }
  render() {
    let friendsFontSize = 24 - Math.round(this.state.friends.length / 35);
    friendsFontSize = friendsFontSize < 10 ? 10 : friendsFontSize;

    let careerFontSize = 24 - Math.round(this.state.career.length / 35);
    careerFontSize = careerFontSize < 10 ? 10 : careerFontSize;

    const opacity = "FF";
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <SafeAreaView style={{ flex: 1 }}>
          <Text>
            How do you see yourself in five years? What would make you happy?
          </Text>
          <TextInput
            ref={(ref) => (this.text = ref)}
            placeholder="Friends & Social life"
            style={{
              backgroundColor: `#FF0000${opacity}`,
              fontSize: friendsFontSize,
              flex: this.state.friendsFocus ? undefined : 1,
              height: this.state.friendsFocus ? 200 : undefined,
            }}
            multiline
            onFocus={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              );
              this.setState({ friendsFocus: true });
            }}
            onBlur={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              );

              this.setState({ friendsFocus: false });
            }}
            value={this.state.friends}
            onChangeText={(x) => this.setState({ friends: x })}
            autoCorrect={false}
          />
          <TextInput
            placeholder="Career & Education"
            style={{
              backgroundColor: `#FFA500${opacity}`,

              fontSize: careerFontSize,
              flex: this.state.careerFocus ? undefined : 1,
              height: this.state.careerFocus ? 200 : undefined,
            }}
            multiline
            onFocus={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              );
              this.setState({ careerFocus: true });
            }}
            onBlur={() => {
              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              );

              this.setState({ careerFocus: false });
            }}
            value={this.state.career}
            onChangeText={(x) => this.setState({ career: x })}
            autoCorrect={false}
          />
          <TextInput
            placeholder="Health & Fitness"
            style={{
              backgroundColor: `#FFFF00${opacity}`,
              fontSize: 24,
              flex: 1,
            }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />
          <TextInput
            placeholder="Finances"
            style={{
              backgroundColor: `#008000${opacity}`,
              fontSize: 24,
              flex: 1,
            }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />
          <TextInput
            placeholder="Fun & Recreation"
            style={{
              backgroundColor: `#0000FF${opacity}`,
              fontSize: 24,
              flex: 1,
            }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />
          <TextInput
            placeholder="Love & Relationships"
            style={{
              backgroundColor: `#4b0082${opacity}`,
              fontSize: 24,
              flex: 1,
            }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />

          <TextInput
            placeholder="Personal development"
            style={{
              backgroundColor: `#EE82EE${opacity}`,
              fontSize: 24,
              flex: 1,
            }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />

          <TextInput
            placeholder="Family"
            style={{ backgroundColor: "white", fontSize: 24, flex: 1 }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />
          <KeyboardAvoidingSpace />
        </SafeAreaView>
      </View>
    );
  }
}
export default First;
