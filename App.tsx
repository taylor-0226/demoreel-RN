import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { memo, useState } from 'react'

function Label({ title }: {title: string}) {
  console.log(`Rendered: ${title}`)
  return <Text>{title}</Text>
}

const LabelMemo = memo(Label)

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <View style={styles.container}>
      <Button
        title={`Pressed ${count} times`}
        onPress={() => {
          setCount(count + 1)
        }}
      />
      <LabelMemo title="Label with memo" />
      <Label title="Label" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(59, 108, 212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  }
});
