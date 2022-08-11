import { useState } from 'react';

import { Button, FlatList, StyleSheet, View } from 'react-native';

import DetailsInput from './components/DetailsInput';
import DetailsItem from './components/DetailsItem';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [details, setDetails] = useState([]);

  function onAddDetail() {
    setModalVisible(true);
  }

  function onCancel() {
    setModalVisible(false);
  }

  function showDetails(username, email) {
    setDetails((currentDetails) => [
      ...currentDetails,
      { usernameProp: username, emailProp: email },
    ]);

    onCancel();
  }

  function deleteDetail(id) {
    setDetails((currentDetails) => {
      return currentDetails
        .map((detail, index) => ({ ...detail, id: index }))
        .filter((detail) => detail.id != id);
    });
  }

  return (
    <View style={styles.Appcontainer}>
      <View style={{ marginBottom: 16 }}>
        <Button title="Add Details" onPress={onAddDetail} />
      </View>
      <DetailsInput
        visible={modalVisible}
        onShowDetails={showDetails}
        onCancel={onCancel}
      />
      <FlatList
        data={details}
        alwaysBounceVertical={false}
        renderItem={(itemData) => {
          return (
            <DetailsItem
              usernameValue={itemData.item.usernameProp}
              emailValue={itemData.item.emailProp}
              uniqueKey={itemData.index}
              onDeleteItem={deleteDetail}
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
