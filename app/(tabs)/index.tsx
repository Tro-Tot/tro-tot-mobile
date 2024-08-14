import { Text } from 'react-native';
import { Button } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Map } from 'lucide-react-native';
import Colors from '@/constants/Colors';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Button>Hi</Button>
      <Text className="text-red-500">Hello world</Text>
      <Map size={30} color={Colors.primaryLightBackgroundColor} />
    </SafeAreaView>
  );
}
