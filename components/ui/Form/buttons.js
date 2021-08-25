import React from 'react';

import { View } from 'react-native';

import Button from '../Button';

import Spacings from '@constants/spacings';

const FormButton = ({
  button,
  resetForm,
  submitForm,
}) => {
  const action = () => {
    if (button.cancel) {
      resetForm(button.action);
    } else {
      submitForm(button.action);
    }
  };
  return (
    <Button
      text={button.name}
      action={action}
      cancel={button.cancel || false}
    />
  ); 
};

const FormButtons = ({
  buttons,
  resetForm,
  submitForm,
}) => {
  const {
    direction,
    items,
  } = buttons;
  if (items.length > 1) {
    return (
      <View style={{ 
          flexDirection: direction || null,
          justifyContent: direction === 'row' ? 'space-between' : null,
          alignItems: !direction || direction === 'column' ? 'space-between' : null,
        }}
      >
        {
          items.map(
            (btn, index) => {
              return (
                <View key={btn.name} style={{
                    flex: '1',
                    ...(!direction || direction === 'column' ? { width: '100%' } : {}),
                    ...(index === 0 ? { marginRight: direction === 'row' ? Spacings.s : null, marginBottom: direction === 'row' ? null : Spacings.m } : { marginLeft: direction === 'row' ? Spacings.s : null }),
                  }}
                >
                  <FormButton
                    button={btn}
                    resetForm={resetForm}
                    submitForm={submitForm}
                  />
                </View>
              );
            },
          )
        }
      </View>
    )
  }
  return (
    <FormButton
      button={items[0]}
      resetForm={resetForm}
      submitForm={submitForm}
    />
  );
};

export default FormButtons;
