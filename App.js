import * as React from 'react';
import { View, Text, ScrollView, Image, TextInput } from 'react-native';

const App = () => {
  const [input, setInput] = React.useState('');

  (
    <ScrollView style={{ marginTop: 30 }}>
      <Text style={{ margin: 20 }}>Scroll here to see more!</Text>
      <Text style={{ padding: 10 }} numberOfLines={2}>
        quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit
      </Text>
      <Image style={{ width: 400, height: 500 }} source={{ uri: 'https://www.shutterstock.com/image-photo/diverse-amazon-forest-seen-above-600w-2072628056.jpg' }} />
      <TextInput
        placeholder="What is your name?"
        onChangeText={setInput}
      />
      <Text style={{ margin: 20 }}>Made you look!</Text>
      <View style={{ padding: 90, color: 'red', backgroundColor: 'yellow' }}>
        <Text>Text with background color</Text>
      </View>
    </ScrollView>
  )
}

export default App;