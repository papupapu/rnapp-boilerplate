import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import Text from '@components/ui/Text';
import Buttons from '@components/ui/Buttons';

import Spacings from '@constants/spacings';
import Colors from '@constants/colors';
import Typography from '@constants/typography';

const Feedback = ({
  title,
  subtitle,
  paragraphs,
  buttons,
}) => {
  return (
    <View style={styles.container}>
      {
        title
          && (
            <View style={styles.title}>
              <Text fontSize={Typography.l} color={Colors.font0} align="center" bold>{title}</Text>
              {
                subtitle
                  && (
                    <Text fontSize={Typography.l} color={Colors.font0} align="center">{subtitle}</Text>
                  )
              }
            </View>
          )
      }
      {
        paragraphs
          && paragraphs.map(
            (p) => (
              <View key={p} style={styles.paragraph}>
                <Text align="center" light>{p}</Text>
              </View>
            )
          )
      }
      {
        buttons
          && <Buttons buttons={buttons} />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacings.xl,
  },
  title: {
    justifyContent: 'center',
    marginBottom: Spacings.m,
  },
  paragraph: {
    marginBottom: Spacings.s,
  },
});

export default Feedback;
