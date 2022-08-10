import { useState } from 'react';

import { FlatList, StyleSheet, View } from 'react-native';

import DetailsInput from './components/DetailsInput';
import DetailsItem from './components/DetailsItem';

export default function App() {
  const [details, setDetails] = useState([]);

  function showDetails(username, email) {
    setDetails((currentDetails) => [
      ...currentDetails,
      { usernameProp: username, emailProp: email },
    ]);
  }

  return (
    <View style={styles.Appcontainer}>
      <DetailsInput onShowDetails={showDetails} />
      <FlatList
        data={details}
        alwaysBounceVertical={false}
        renderItem={(itemData) => {
          return (
            <DetailsItem
              usernameValue={itemData.item.usernameProp}
              emailValue={itemData.item.emailProp}
              uniqueKey={itemData.index}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Appcontainer: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 40,
  },
});
