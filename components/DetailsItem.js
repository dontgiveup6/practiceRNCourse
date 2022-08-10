import { StyleSheet, Text, View } from 'react-native';

export default function DetailsItem(props) {
  let usernameVal = ` ${props.usernameValue}`;
  let emailVal = ` ${props.emailValue}`;
  return (
    <View style={styles.itemContainer} key={props.uniqueKey}>
      <Text style={styles.itemText}>Your username is:{usernameVal}</Text>
      <Text style={styles.itemText}>Your email is:{emailVal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 5,
    backgroundColor: '#68884e',
    padding: 5,
  },
  itemText: {
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
});
