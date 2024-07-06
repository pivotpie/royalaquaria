import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Icon,
  LinearGradient,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View } from 'react-native';

const OnboardingScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <LinearGradient
        endX={100}
        endY={100}
        startX={0}
        startY={0}
        {...GlobalStyles.LinearGradientStyles(theme)['Linear Gradient'].props}
        color1={theme.colors['Strong']}
        color2={theme.colors['Medium']}
        color3={theme.colors['Strong']}
        style={StyleSheet.applyWidth(
          GlobalStyles.LinearGradientStyles(theme)['Linear Gradient'].style,
          dimensions.width
        )}
      >
        <ImageBackground
          resizeMode={'cover'}
          {...GlobalStyles.ImageBackgroundStyles(theme)['Image Background']
            .props}
          source={Images.picture1}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ImageBackgroundStyles(theme)['Image Background']
                .style,
              {
                alignItems: 'center',
                height: 600,
                justifyContent: 'flex-end',
                width: 400,
              }
            ),
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', justifyContent: 'flex-end' },
              dimensions.width
            )}
          >
            <ImageBackground
              resizeMode={'cover'}
              {...GlobalStyles.ImageBackgroundStyles(theme)['Image Background']
                .props}
              source={Images.picture2}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageBackgroundStyles(theme)['Image Background']
                    .style,
                  {
                    alignContent: 'center',
                    alignItems: 'center',
                    height: 500,
                    marginLeft: -10,
                    paddingLeft: 35,
                    paddingRight: 35,
                    width: 400,
                  }
                ),
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors['Surface']}
                name={'AntDesign/minus'}
                size={48}
              />
              <Spacer left={8} right={8} bottom={10} top={10} />
              {/* Get Aquariym at */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Background'],
                      fontFamily: 'Poppins_400Regular',
                      fontSize: 25,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Get Aquarium At'}
              </Text>
              {/* Your Doorstep */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Background'],
                      fontFamily: 'Poppins_700Bold',
                      fontSize: 25,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Your Doorstep'}
              </Text>
              {/* Spacer 2 */}
              <Spacer left={8} right={8} bottom={10} top={10} />
              {/* Text 3 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Light'],
                      fontFamily: 'Poppins_300Light',
                      fontSize: 15,
                      textAlign: 'center',
                    }
                  ),
                  dimensions.width
                )}
              >
                {
                  'Royal Aquaria delivers your favorite marine species at your location\n'
                }
              </Text>
              {/* Spacer 3 */}
              <Spacer left={8} right={8} bottom={20} top={20} />
              {/* View 2 */}
              <View
                style={StyleSheet.applyWidth(
                  { borderRadius: 64, paddingBottom: 25, paddingTop: 25 },
                  dimensions.width
                )}
              >
                {/* View 3 */}
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      borderRadius: 64,
                      flexDirection: 'row',
                      justifyContent: 'center',
                    },
                    dimensions.width
                  )}
                >
                  <Touchable
                    onPress={() => {
                      try {
                        navigation.navigate('HomeScreen');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          backgroundColor: 'rgba(75, 116, 138, 0.87)',
                          borderRadius: 64,
                          flex: 1,
                          flexDirection: 'row',
                          paddingBottom: 10,
                          paddingLeft: 25,
                          paddingRight: 25,
                          paddingTop: 10,
                        },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors['Background'],
                              flex: 1,
                              fontFamily: 'Poppins_400Regular',
                              fontSize: 20,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Get Started\n'}
                      </Text>
                      <Icon
                        size={24}
                        color={theme.colors['Light Inverse']}
                        name={'AntDesign/right'}
                      />
                      {/* Icon 2 */}
                      <Icon
                        size={24}
                        color={theme.colors['Medium Inverse']}
                        name={'AntDesign/right'}
                      />
                      {/* Icon 3 */}
                      <Icon
                        size={24}
                        color={theme.colors['Strong Inverse']}
                        name={'AntDesign/right'}
                      />
                    </View>
                  </Touchable>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ImageBackground>
      </LinearGradient>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingScreen);
