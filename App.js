
import React from "react";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  CheckBox,
  Switch,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView
} from "react-native";

const defaultList = [""];

export default class ToDoApp extends React.Component {
  constructor(props) {
    super();
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    this.state = {
      list: props.list,
      doneList: props.doneList
    };
    this.doneList = [...props.doneList];
    this.list = [...this.state.list];
  }

  UNSAFE_(nextProps, nextState) {
    this.doneList = [];
    this.list = [...nextState.list];
  }
  render() {
    return (
      <ScrollView style={styles.App}>
        <View id="list" style={styles.widgetUl}>
          <View style={styles.header}>
            <Text style={(styles.textHd, styles.App)} lassName="title">
              Insurance Verification{" "}
            </Text>
          </View>
        </View>
        <View id="list" style={styles.widgetUl}>
          <View className="add_reset_section" style={styles.addResetSection}>
            <TextInput
              style={styles.input}
              ref={ref => (this.newItem = ref)}
              placeholder="First Name"
            />
            <TextInput
              style={styles.input}
              ref={ref => (this.newItem = ref)}
              placeholder="Last Name"
            />
            <TextInput
              style={styles.input}
              ref={ref => (this.newItem = ref)}
              placeholder="DOB"
            />
            <TextInput
              style={styles.input}
              ref={ref => (this.newItem = ref)}
              placeholder="Insurance ID"
            />
            <TextInput
              style={styles.input}
              ref={ref => (this.newItem = ref)}
              placeholder="Group ID"
            />
          </View>
          
          
        </View>
        {this.state.list.map((value, i) => {
          
        })}
        <View id="list" style={styles.widgetUl}>
          <TouchableOpacity
            onPress={this._handleRemoveDoneItems}
            title="Remove"
            style={styles.buttonRemove}
          >
            <Text style={styles.textBt}>Submit </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  

  

  
}
ToDoApp.propTypes = {
  list: PropTypes.array
};

ToDoApp.defaultProps = {
  list: defaultList,
  doneList: []
};

class ToDoList extends React.Component {
  constructor(props) {
    super();
    this.state = { value: props.item, checked: false };
  }
  UNSAFE_(nextProps) {
    if (nextProps.item !== this.props.item)
      this.setState({ ...this.state, value: nextProps.item, checked: false });
  }
  _handleCheckBoxClick = e => {
    this.setState({
      checked: !this.state.checked
    });
    this.props.removeItem(this.props.id);
  };

  render() {
    /** RENDER  **/
    let text = this.state.checked ? (
      <Text>{this.state.value}</Text>
    ) : (
      this.state.value
    );
    let checked = this.state.checked ? "checked" : " ";
    return (
      <View id="list" style={styles.widgetUl}>
        <View
          className="main"
          style={styles.main }
          style={{ flex: 11, flexBasis: 250, flexDirection: "row" }}
        >
          {Platform.OS === "android" ? (
            <CheckBox
              onValueChange={this._handleCheckBoxClick}
              value={this.state.checked}
            />
          ) : (
            <Switch
              onValueChange={this._handleCheckBoxClick}
              value={this.state.checked}
            />
          )}

          <Text style={styles.textBd}>{text}</Text>
        </View>
      </View>
    );
  }

  UNSAFE_() {}
}
const styles = StyleSheet.create({
  App: {
    textAlign: "center",
    fontSize: 30,
    paddingTop: 10
  },
  widgetUl: {
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    alignItems: "center"
  },
  header: {
    flexBasis: 250,
    flex: 1,
    padding: 20
  },
  footer: {
    flexBasis: 250,
    flex: 1
  },
  main: {
    flex: 1,
    flexBasis: 250,
    padding: 10
  },
  addResetSection: {
    flex: 3,
    padding: 0
  },
  input: {
    paddingBottom: 15,
    paddingTop: 5,
    fontSize: 20,
    paddingLeft: 5
  },
  textBt: {
    color: "#fff"
  },
  textBd: {
    fontSize: 20
  },
  textHd: {
    fontSize: 30
  },
  button: {
    alignItems: "center",
    backgroundColor: "#f44336",
    padding: 12,
    marginRight: 5,
    flex: 2
  },
  buttonRemove: {
    alignItems: "center",
    backgroundColor: "#f44336",
    padding: 12,
    marginRight: 5,
    flexBasis: 150
  }
});
