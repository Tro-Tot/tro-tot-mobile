import { Text } from 'react-native';
import { Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Map } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Button>Hi</Button>
      <Text className="text-red-500">Hello world</Text>
    </SafeAreaView>
  );
}
