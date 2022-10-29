import { NavigationContainer } from '@react-navigation/native';
import { JCRootNavigation } from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      <JCRootNavigation />
    </NavigationContainer>
  );
}
