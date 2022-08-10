import { useState } from 'react';

import { StyleSheet, Button, Text, TextInput, View } from 'react-native';

export default function DetailsInput(prop) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  function onUsernameType(usernameValue) {
    setUsername(usernameValue);
  }

  function onEmailType(emailValue) {
    setEmail(emailValue);
  }

  function showDetails() {
    prop.onShowDetails(username, email);
    setUsername('');
    setEmail('');
  }

  return (
    <View>
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
      <View style={styles.inputContainer}>
        <Button onPress={showDetails} title="List details" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
  },
  textLabel: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
  inputText: {
    width: '100%',
    borderWidth: 1,
    marginTop: 5,
    padding: 10,
    color: '#000000',
    borderColor: '#000000',
  },
});
