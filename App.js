import * as React from 'react';
import { View, Text, ScrollView, Image, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [input, setInput] = React.useState('test input');
  const [isOpen, setOpen] = React.useState(false);

  const styles = StyleSheet.create({
    paragraph: {
      fontSize: 16,
    },
    label: {
      fontSize: 11,
      textTransform: 'uppercase'
    }
  });

  return (
    <ScrollView style={{ marginTop: 30 }}>

      <AwesomeBox />

      <Text style={styles.paragraph}>My paragraph</Text>
      <Text style={[styles.label, styles.paragraph]}>My label</Text>

      <View style={{ flex: 1, flexDirection: 'column' }}>
        <Text style={[{ fontSize: 16 }, isOpen && { backgroundColor: 'powderblue' }]} numberOfLines={!isOpen ? 2 : undefined}>
          quam elementum pulvinar etiam non quam lacus
          suspendisse faucibus interdum posuere lorem ipsum dolor
          sit quam elementum pulvinar etiam non quam lacus
          suspendisse faucibus interdum posuere lorem ipsum dolor sit
        </Text>
        {!isOpen
          ? <Button title='Read More' onPress={() => setOpen(true)} />
          : <Button title='Read Less' onPress={() => setOpen(false)} />}
      </View>

      <Text style={{ margin: 20 }}>Scroll here to see more!</Text>

      <Text style={{ padding: 10 }} numberOfLines={2}>
        quam elementum pulvinar etiam non quam lacus
        suspendisse faucibus interdum posuere lorem ipsum dolor
        sit quam elementum pulvinar etiam non quam lacus
      </Text>

      <Image style={{ width: 400, height: 500 }}
        source={{ uri: 'https://www.shutterstock.com/image-photo/diverse-amazon-forest-seen-above-600w-2072628056.jpg' }} />

      <TextInput
        placeholder="What is your name?"
        onChangeText={setInput}
      />

      <Text style={{ margin: 20 }}>{input}</Text>

      <View style={{ padding: 90, color: 'red', backgroundColor: 'yellow' }}>
        <Text>Text with background color</Text>
      </View>

      <Text>Some text</Text>

      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://picsum.photos/64/64',
          }}
        />
      </View>

      <TextInput
        defaultValue="You can type here"
      />

      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"
      />

      <View style={{ flex: 1 }}>

        <View style={{ padding: 8, backgroundColor: 'red' }}>
          <Text>Text with background color</Text>
        </View>

        <Text style={{ height: 40, borderWidth: 1, padding: 10 }}>
          Here's some text!
        </Text>

        <View style={{ height: 20, margin: 16, backgroundColor: 'green' }} />
      </View>

      <View style={{ flex: 1, flexDirection: 'row', }}>
        <Box color="red" />
        <Box color="green" />
        <Box color="blue" />
      </View>

    </ScrollView>
  )
}

export default App;

const Box = (props) => (
  <View style={{ width: 100, height: 100, backgroundColor: props.color, justifyContent: 'center' }}>
    <Text>Simple text</Text>
    <Text>Simple text</Text>
    <Text>Simple text</Text>
    <Text>Simple text</Text>
  </View>
);

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
});

const AwesomeBox = () => (
  <View style={styles.box} />
);