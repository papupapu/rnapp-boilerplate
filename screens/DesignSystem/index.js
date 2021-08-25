import React from 'react';

import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import SafeAreaView from '@components/ui/SafeAreaView';
import Form from '@components/ui/Form';
import Card from '@components/ui/Card';
import Input from '@components/ui/Input';
import Button from '@components/ui/Button';
import Text from '@components/ui/Text';

import Colors from '@constants/colors';
import Spacings from '@constants/spacings';
import Typography from '@constants/typography';

const DesignSystem = () => {
  const txt = 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua.';
  const fakeOnPress = () => {};
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ ...styles.content, ...styles.horizontalSpacing}}>
            <Form
              fields={[
                {
                  name: 'first',
                  label: 'First input',
                  deleteButton: true,
                  leftIcon: (
                    <Ionicons
                      name="search-outline"
                      size={22}
                      color={Colors.font2}
                    />
                  ),
                },
                {
                  name: 'second',
                  label: 'Second input',
                  type: 'email',
                  deleteButton: true,
                  required: true,
                  errorFeedback: 'Please enter a valid email address',
                },
                {
                  name: 'third',
                  label: 'Third input',
                  type: 'password',
                  required: true,
                  minLength: 8,
                  errorFeedback: 'Please enter a valid password (min 8 chars)',
                },
              ]}
              buttons={{
                direction: 'row', 
                items: [
                  {
                    name: 'Reset',
                    cancel: true,
                    // action: (fromValues) => { console.log(formValues); },
                  },                
                  {
                    name: 'Submit',
                    action: (formValues) => { console.log(formValues); },
                  },
                ],
              }}
              style={{ padding: Spacings.m }}
            />
            <Form
              fields={[
                {
                  name: 'first',
                  label: 'First input',
                },
                {
                  name: 'second',
                  label: 'Second input',
                  type: 'email',
                  required: true,
                  errorFeedback: 'Please enter a valid email address',
                },
                {
                  name: 'third',
                  label: 'Third input',
                  type: 'password',
                  required: true,
                  minLength: 8,
                  errorFeedback: 'Please enter a valid password (min 8 chars)',
                },
              ]}
              buttons={{
                items: [
                  {
                    name: 'Submit',
                    action: (formValues) => { console.log(formValues); },
                  },                  
                  {
                    name: 'Reset',
                    cancel: true,
                    // action: (fromValues) => { console.log(formValues); },
                  },
                ],
              }}
              style={{ padding: Spacings.m }}
            />
            <Form
              fields={[
                {
                  name: 'first',
                  label: 'First input',
                },
                {
                  name: 'second',
                  label: 'Second input',
                  type: 'email',
                  required: true,
                  errorFeedback: 'Please enter a valid email address',
                },
                {
                  name: 'third',
                  label: 'Third input',
                  type: 'password',
                  required: true,
                  minLength: 8,
                  errorFeedback: 'Please enter a valid password (min 8 chars)',
                },
              ]}
              buttons={{
                items: [             
                  {
                    name: 'Submit',
                    action: (formValues) => { console.log(formValues); },
                  },
                ],
              }}
              style={{ padding: Spacings.m }}
            />        
            <View style={styles.section}>
              <View style={styles.section__tit}>
                <Text
                  fontSize={Typography.xl}
                  color={Colors.font0}
                  bold
                >
                  Card
                </Text>
              </View>
              <View style={styles.section__desc}>
                <Text color={Colors.font1} fontSize={Typography.s}>
                  For the Card to correctly display it's shadow, the component should set it's own horizontal margins.
                </Text>
              </View>              
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Generic card
                </Text>
              </View>
            </View>
            <Card style={styles.horizontalSpacing} onPress={fakeOnPress}>
              <View style={{ padding: Spacings.m }}>
                <Text>Card component</Text>
              </View>
            </Card>
            <View style={styles.section}>
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Just border
                </Text>
              </View>
            </View>            
            <Card style={styles.horizontalSpacing} justBorder onPress={fakeOnPress}>
              <View style={{ padding: Spacings.m }}>
                <Text>Card component</Text>
              </View>
            </Card>
            <View style={styles.section}>
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Custom border radius
                </Text>
              </View>
            </View>            
            <Card borderRadius={0} style={{ ...styles.horizontalSpacing }} onPress={fakeOnPress}>
              <View style={{ padding: Spacings.m }}>
                <Text>Card component</Text>
              </View>
            </Card>
            <View style={styles.section}>
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Just border and custom border radius
                </Text>
              </View>
            </View>            
            <Card style={styles.horizontalSpacing} justBorder borderRadius={0} onPress={fakeOnPress}>
              <View style={{ padding: Spacings.m }}>
                <Text>Card component</Text>
              </View>
            </Card>            
            <View style={styles.section}>
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Custom background color
                </Text>
              </View>
            </View>            
            <Card backgroundColor={Colors.secondary} style={{ ...styles.horizontalSpacing }} onPress={fakeOnPress}>
              <View style={{ padding: Spacings.m }}>
                <Text>Card component</Text>
              </View>
            </Card>            
            <View style={styles.section}>
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  No touch action
                </Text>
              </View>
            </View>            
            <Card style={styles.horizontalSpacing}>
              <View style={{ padding: Spacings.m }}>
                <Text>Card component</Text>
              </View>
            </Card>
            <View style={styles.section} />
            <View style={styles.section}>
              <View style={styles.section__tit}>
                <Text
                  fontSize={Typography.xl}
                  color={Colors.font0}
                  bold
                >
                  Input
                </Text>
              </View>
              <View style={styles.section__desc}>
                <Text color={Colors.font1} fontSize={Typography.s}>
                  {txt}
                </Text>
              </View>
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Generic input
                </Text>
              </View>
              <Input
                name="first"
                initialValue={''}
                onValueUpdate={() => {}}
                keyboardType="default"
                autoCapitalize="none"
              />
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  With label
                </Text>
              </View>
              <Input
                name="first"
                label="Input label"
                initialValue={''}
                onValueUpdate={() => {}}
                keyboardType="default"
                autoCapitalize="none"
              />
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  With placeholder
                </Text>
              </View>
              <Input
                name="first"
                placeholder="Input placeholder"
                initialValue={''}
                onValueUpdate={() => {}}
                keyboardType="default"
                autoCapitalize="none"
              />
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  With left icon
                </Text>
              </View>
              <Input
                name="first"
                initialValue={''}
                onValueUpdate={() => {}}
                keyboardType="default"
                autoCapitalize="none"
                leftIcon={<Ionicons
                  name="search-outline"
                  size={22}
                  color={Colors.font2}
                />}
              />              
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Required
                </Text>
              </View>
              <Input
                name="first"
                label="Mandatory"
                initialValue={''}
                isValid={false}
                onValueUpdate={() => {}}
                keyboardType="default"
                autoCapitalize="none"
                required
              />
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Required with customizable error feedback
                </Text>
              </View>
              <Input
                name="first"
                label="Mandatory"
                initialValue={''}
                isValid={false}
                errorFeedback="Customizable error feedback"
                onValueUpdate={() => {}}
                keyboardType="default"
                autoCapitalize="none"
                required
              />
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Delete button
                </Text>
              </View>
              <Input
                name="first"
                label="Input label"
                initialValue={''}
                onValueUpdate={() => {}}
                keyboardType="default"
                autoCapitalize="none"
                deleteButton
              />
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Password
                </Text>
              </View>
              <Input
                name="first"
                label="Input label"
                initialValue={''}
                onValueUpdate={() => {}}
                keyboardType="default"
                autoCapitalize="none"
                password
              />
            </View>
            <View style={styles.section}>
              <View style={styles.section__tit}>
                <Text
                  fontSize={Typography.xl}
                  color={Colors.font0}
                  bold
                >
                  Button
                </Text>
              </View>
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Generic
                </Text>
              </View>
              <Button
                text="Click me!"
                action={() => {}}
              />
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Cancel
                </Text>
              </View>
              <Button
                text="No thanks!"
                action={() => {}}
                cancel
              />              
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Disabled
                </Text>
              </View>
              <Button
                text="Click me!"
                action={() => {}}
                disabled
              />
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Custom content
                </Text>
              </View>
              <Button action={() => {}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Ionicons
                    name="bulb"
                    size={18}
                    color={Colors.white}
                  />
                  <Text
                    style={{ marginHorizontal: Spacings.xs }}
                    color={Colors.white}
                    bold
                  >
                    Click me!
                  </Text>
                  <Ionicons
                    name="bulb"
                    size={18}
                    color={Colors.white}
                  />
                </View>
              </Button>
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Custom style
                </Text>
              </View>
              <Button
                text="Click me!"
                action={() => {}}
                style={{ backgroundColor: Colors.secondary, borderRadius: 0 }}
              />
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Custom style + Custom text style
                </Text>
              </View>
              <Button
                text="Click me!"
                action={() => {}}
                style={{ backgroundColor: Colors.secondary, borderRadius: 0 }}
                textStyle={{ color: Colors.primary, fontSize: Typography.xl }}
              />
              <View style={styles.section__subtit}>
                <Text color={Colors.primary} bold>
                  Custom style disabled
                </Text>
              </View>
              <Button
                text="Click me!"
                action={() => {}}
                style={{ backgroundColor: Colors.secondary, borderRadius: 0 }}
                disabled
              />              
            </View>            
            <View style={styles.section}>
              <View style={styles.section__tit}>
                <Text
                  fontSize={Typography.xl}
                  color={Colors.font0}
                  bold
                >
                  Fonts
                </Text>
              </View>
              {
                Object.keys(Typography).map(
                  size => (
                    <View key={`tp-${size}`}>
                      <View style={styles.section__subtit}>
                        <Text color={Colors.primary} bold>
                          Size: {size.toUpperCase()}
                        </Text>
                      </View>
                      <Text fontSize={Typography[size]} bold>
                        {txt}
                      </Text>
                      <Text fontSize={Typography[size]}>
                        {txt}
                      </Text>
                      <Text fontSize={Typography[size]} light>
                        {txt}
                      </Text>
                    </View>
                  )
                )
              }
            </View>
          </View>
        </ScrollView>        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  horizontalSpacing: {
    marginHorizontal: Spacings.m,
  },
  content: {
    flex: 1,
    marginVertical: Spacings.m,
    backgroundColor: Colors.white,
  },
  section: {
    padding: Spacings.m,
  },
  section__tit: {
    paddingBottom: Spacings.xs,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  section__desc: {
    marginTop: Spacings.m,
  },
  section__subtit: {
    alignSelf: 'flex-start',
    marginTop: Spacings.m,
    marginBottom: Spacings.s,
  },
});

export default DesignSystem;
