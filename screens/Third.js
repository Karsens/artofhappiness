import React from "react";

import {
  Keyboard,
  View,
  Text,
  TextInput,
  SafeAreaView,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");
class First extends React.Component {
  componentDidMount() {
    this.text.focus();
  }
  render() {
    const HEIGHT = height / 15;
    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <SafeAreaView>
          <Text>
            What could you do this month to bring you closer to happiness?
          </Text>
          <TextInput
            autoFocus
            ref={(ref) => (this.text = ref)}
            placeholder="Friends & Social life"
            style={{ backgroundColor: "red", fontSize: 24, height: HEIGHT }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />
          <TextInput
            placeholder="Career & Education"
            style={{ backgroundColor: "orange", fontSize: 24, height: HEIGHT }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />
          <TextInput
            placeholder="Health & Fitness"
            style={{ backgroundColor: "yellow", fontSize: 24, height: HEIGHT }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />
          <TextInput
            placeholder="Finances"
            style={{ backgroundColor: "green", fontSize: 24, height: HEIGHT }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />
          <TextInput
            placeholder="Fun & Recreation"
            style={{ backgroundColor: "blue", fontSize: 24, height: HEIGHT }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />
          <TextInput
            placeholder="Love & Relationships"
            style={{ backgroundColor: "indigo", fontSize: 24, height: HEIGHT }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />

          <TextInput
            placeholder="Personal development"
            style={{ backgroundColor: "violet", fontSize: 24, height: HEIGHT }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />

          <TextInput
            placeholder="Family"
            style={{ backgroundColor: "white", fontSize: 24, height: HEIGHT }}
            multiline
            numberOfLines={2}
            autoCorrect={false}
          />
        </SafeAreaView>
      </View>
    );
  }
}
export default First;
