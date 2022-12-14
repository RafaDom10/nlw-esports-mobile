import { TouchableOpacity, ImageBackground, ImageSourcePropType, TouchableOpacityProps, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { THEME } from '../../theme';

export interface CardGameProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;

}

interface Props extends TouchableOpacityProps {
  data: CardGameProps;
}

export function CardGame({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={data.cover} style={styles.cover}>
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.name}
          </Text>
          <Text style={styles.ads}>
            {data.ads}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}