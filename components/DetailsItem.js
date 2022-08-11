import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function DetailsItem(props) {
  let usernameVal = ` ${props.usernameValue}`;
  let emailVal = ` ${props.emailValue}`;
  return (
    <View style={styles.itemContainer} key={props.uniqueKey}>
      <Pressable
        onPress={props.onDeleteItem.bind(this, props.uniqueKey)}
        style={(pressData) => pressData.pressed && styles.pressedItem}
      >
        <Text style={styles.itemText}>Your username is:{usernameVal}</Text>
        <Text style={styles.itemText}>Your email is:{emailVal}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 5,
    borderRadius: 6,
    backgroundColor: '#68884e',
  },
  pressedItem: {
    backgroundColor: '#4f633e',
    borderRadius: 6,
  },
  itemText: {
    padding: 5,
    fontWeight: 'bold',
    color: 'white',
  },
});
