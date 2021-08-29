import React from 'react';

import { View } from 'react-native';

import Spacings from '@constants/spacings';

import Button from '../Button';

const Buttons = ({ buttons }) => {
  const {
    style,
    direction,
    items,
  } = buttons;

  if (items.length > 1) {
    const containerStyle = {
      flexDirection: direction || null,
      justifyContent: direction === 'row' ? 'space-between' : null,
      alignItems: !direction || direction === 'column' ? 'space-between' : null,
      style,
    };
    const btnContainerStyle = (index) => ({
      flex: direction === 'row' ? 1 : null,
      ...(!direction || direction === 'column' ? { width: '100%' } : {}),
      ...(index === 0
        ? { marginRight: direction === 'row' ? Spacings.s : null, marginBottom: direction === 'row' ? null : Spacings.m }
        : { marginLeft: direction === 'row' ? Spacings.s : null }
      ),
    });
    return (
      <View style={containerStyle}>
        {
          items.map(
            (btn, index) => {
              return (
                <View
                  key={btn.key || btn.text}
                  style={btnContainerStyle(index)}
                >
                  <Button
                    text={btn.text}
                    action={btn.action}
                    cancel={btn.cancel}
                    style={btn.style}
                  />
                </View>
              );
            },
          )
        }
      </View>
    );
  }

  const [btn] = items;
  return (
    <View style={style}>
      <Button
        text={btn.text}
        action={btn.action}
        style={btn.style}
      />
    </View>
  );
};

export default Buttons;
