import { useState } from 'react';

import { StyleSheet, Button, Text, TextInput, View, Modal } from 'react-native';

export default function DetailsInput(props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  function onUsernameType(usernameValue) {
    setUsername(usernameValue);
  }

  function onEmailType(emailValue) {
    setEmail(emailValue);
  }

  function showDetails() {
    props.onShowDetails(username, email);
    setUsername('');
    setEmail('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.wholeContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>Username</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={onUsernameType}
            placeholder="Enter username"
            value={username}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textLabel}>Email</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={onEmailType}
            placeholder="Enter email"
            value={email}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttton}>
            <Button onPress={showDetails} title="List details" />
          </View>
          <View style={styles.buttton}>
            <Button onPress={props.onCancel} title="Cancel" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  wholeContainer: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttton: {
    width: '30%',
  },
  textLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  inputText: {
    fontSize: 18,
    borderRadius: 6,
    width: '100%',
    borderWidth: 1,
    marginTop: 5,
    padding: 10,
    color: '#000000',
    borderColor: '#000000',
  },
});
