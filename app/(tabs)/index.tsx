import { StyleSheet } from 'react-native';
import { Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Button>Hi</Button>
    </SafeAreaView>
  );
}
