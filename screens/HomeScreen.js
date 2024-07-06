import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Circle,
  Icon,
  LinearGradient,
  ScreenContainer,
  SimpleStyleScrollView,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const HomeScreen = props => {
  const { theme } = props;
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
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'row', marginTop: 10 },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-end',
                backgroundColor: 'rgb(71, 57, 57)',
                borderBottomRightRadius: 25,
                borderTopRightRadius: 25,
                justifyContent: 'center',
                padding: 10,
                paddingRight: 15,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={theme.colors['Background']}
              name={'AntDesign/appstore1'}
              style={StyleSheet.applyWidth(
                { marginLeft: 20 },
                dimensions.width
              )}
            />
          </View>
          <Spacer bottom={0} left={50} right={50} top={0} />
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: 'rgb(71, 57, 57)',
                borderBottomLeftRadius: 25,
                borderTopLeftRadius: 25,
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                padding: 5,
                paddingLeft: 5,
              },
              dimensions.width
            )}
          >
            <Circle
              {...GlobalStyles.CircleStyles(theme)['Circle'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.CircleStyles(theme)['Circle'].style,
                  {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: theme.colors['Background'],
                    borderWidth: 2,
                    padding: 5,
                  }
                ),
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                {...GlobalStyles.ImageStyles(theme)['Image'].props}
                source={Images.mainqimg407c4b6f60302d6e9c55695adef129e0pjlq}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.ImageStyles(theme)['Image'].style,
                    { borderRadius: 64, height: 30, width: 30 }
                  ),
                  dimensions.width
                )}
              />
            </Circle>

            <View
              style={StyleSheet.applyWidth(
                { paddingLeft: 10 },
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
                      fontFamily: 'Poppins_600SemiBold',
                      fontSize: 14,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Hello John'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Background'],
                      fontFamily: 'Poppins_400Regular',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Welcome Back!'}
              </Text>
            </View>
          </View>
        </View>
        {/* Spacer 2 */}
        <Spacer bottom={15} left={0} right={0} top={15} />
        <SimpleStyleScrollView
          bounces={true}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          horizontal={true}
          style={StyleSheet.applyWidth(
            { alignItems: 'center', justifyContent: 'center', marginLeft: 20 },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Background'],
                fontFamily: 'Poppins_500Medium',
                fontSize: 18,
                margin: 10,
                marginBottom: 5,
                marginRight: 20,
              }),
              dimensions.width
            )}
          >
            {'Fish'}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Light Inverse'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 18,
                margin: 10,
                marginBottom: 5,
                marginRight: 20,
              }),
              dimensions.width
            )}
          >
            {'Coral'}
          </Text>
          {/* Text 3 */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Light Inverse'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 18,
                margin: 10,
                marginBottom: 5,
                marginRight: 20,
              }),
              dimensions.width
            )}
          >
            {'Tank'}
          </Text>
          {/* Text 4 */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Light Inverse'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 18,
                margin: 10,
                marginBottom: 5,
                marginRight: 20,
              }),
              dimensions.width
            )}
          >
            {'Substraces'}
          </Text>
          {/* Text 5 */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Light Inverse'],
                fontFamily: 'Poppins_400Regular',
                fontSize: 18,
                margin: 10,
                marginBottom: 5,
                marginRight: 20,
              }),
              dimensions.width
            )}
          >
            {'Accessories'}
          </Text>
        </SimpleStyleScrollView>
        {/* Scroll View 2 */}
        <SimpleStyleScrollView
          bounces={true}
          horizontal={false}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          style={StyleSheet.applyWidth({ padding: 25 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(71, 57, 57)',
                borderRadius: 25,
                height: 270,
                marginBottom: 10,
                padding: 5,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <View>
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.exoticfreshwaterfish}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { borderRadius: 25, height: 200, width: null }
                    ),
                    dimensions.width
                  )}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Text 2 */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: theme.colors['Light Inverse'],
                            fontFamily: 'Poppins_400Regular',
                            fontSize: 18,
                            marginLeft: 10,
                            marginRight: 20,
                            marginTop: 5,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Fish'}
                    </Text>

                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors['Error'],
                          borderRadius: 25,
                          marginLeft: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Text 3 */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors['Background'],
                              fontFamily: 'Poppins_500Medium',
                              fontSize: 15,
                              marginLeft: 10,
                              marginRight: 20,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'$ 69.99'}
                      </Text>
                    </View>
                  </View>
                  {/* Spacer 3 */}
                  <Spacer bottom={0} left={100} right={80} top={0} />
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'stretch',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Circle
                      {...GlobalStyles.CircleStyles(theme)['Circle'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.CircleStyles(theme)['Circle'].style,
                          { backgroundColor: theme.colors['Medium'], margin: 5 }
                        ),
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Background']}
                        name={'AntDesign/right'}
                        size={30}
                      />
                    </Circle>
                  </View>
                </View>
              </View>
            </Touchable>
          </View>
          {/* View 4 */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(71, 57, 57)',
                borderRadius: 25,
                height: 270,
                marginBottom: 10,
                padding: 5,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <View>
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.exoticfreshwaterfish}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { borderRadius: 25, height: 200, width: null }
                    ),
                    dimensions.width
                  )}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Text 2 */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: theme.colors['Light Inverse'],
                            fontFamily: 'Poppins_400Regular',
                            fontSize: 18,
                            marginLeft: 10,
                            marginRight: 20,
                            marginTop: 5,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Fish'}
                    </Text>

                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors['Error'],
                          borderRadius: 25,
                          marginLeft: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Text 3 */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors['Background'],
                              fontFamily: 'Poppins_500Medium',
                              fontSize: 15,
                              marginLeft: 10,
                              marginRight: 20,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'$ 69.99'}
                      </Text>
                    </View>
                  </View>
                  {/* Spacer 3 */}
                  <Spacer bottom={0} left={100} right={80} top={0} />
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'stretch',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Circle
                      {...GlobalStyles.CircleStyles(theme)['Circle'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.CircleStyles(theme)['Circle'].style,
                          { backgroundColor: theme.colors['Medium'], margin: 5 }
                        ),
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Background']}
                        name={'AntDesign/right'}
                        size={30}
                      />
                    </Circle>
                  </View>
                </View>
              </View>
            </Touchable>
          </View>
          {/* View 3 */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(71, 57, 57)',
                borderRadius: 25,
                height: 270,
                marginBottom: 10,
                padding: 5,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <View>
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.exoticfreshwaterfish}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { borderRadius: 25, height: 200, width: null }
                    ),
                    dimensions.width
                  )}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Text 2 */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: theme.colors['Light Inverse'],
                            fontFamily: 'Poppins_400Regular',
                            fontSize: 18,
                            marginLeft: 10,
                            marginRight: 20,
                            marginTop: 5,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Fish'}
                    </Text>

                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors['Error'],
                          borderRadius: 25,
                          marginLeft: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Text 3 */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors['Background'],
                              fontFamily: 'Poppins_500Medium',
                              fontSize: 15,
                              marginLeft: 10,
                              marginRight: 20,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'$ 69.99'}
                      </Text>
                    </View>
                  </View>
                  {/* Spacer 3 */}
                  <Spacer bottom={0} left={100} right={80} top={0} />
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'stretch',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Circle
                      {...GlobalStyles.CircleStyles(theme)['Circle'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.CircleStyles(theme)['Circle'].style,
                          { backgroundColor: theme.colors['Medium'], margin: 5 }
                        ),
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Background']}
                        name={'AntDesign/right'}
                        size={30}
                      />
                    </Circle>
                  </View>
                </View>
              </View>
            </Touchable>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              {
                backgroundColor: 'rgb(71, 57, 57)',
                borderRadius: 25,
                height: 270,
                padding: 5,
              },
              dimensions.width
            )}
          >
            <Touchable>
              <View>
                <Image
                  resizeMode={'cover'}
                  {...GlobalStyles.ImageStyles(theme)['Image'].props}
                  source={Images.exoticfreshwaterfish}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ImageStyles(theme)['Image'].style,
                      { borderRadius: 25, height: 200, width: null }
                    ),
                    dimensions.width
                  )}
                />
                <View
                  style={StyleSheet.applyWidth(
                    { flexDirection: 'row' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
                  >
                    {/* Text 2 */}
                    <Text
                      accessible={true}
                      {...GlobalStyles.TextStyles(theme)['Text'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TextStyles(theme)['Text'].style,
                          {
                            color: theme.colors['Light Inverse'],
                            fontFamily: 'Poppins_400Regular',
                            fontSize: 18,
                            marginLeft: 10,
                            marginRight: 20,
                            marginTop: 5,
                          }
                        ),
                        dimensions.width
                      )}
                    >
                      {'Fish'}
                    </Text>

                    <View
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors['Error'],
                          borderRadius: 25,
                          marginLeft: 10,
                        },
                        dimensions.width
                      )}
                    >
                      {/* Text 3 */}
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              color: theme.colors['Background'],
                              fontFamily: 'Poppins_500Medium',
                              fontSize: 15,
                              marginLeft: 10,
                              marginRight: 20,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'$ 69.99'}
                      </Text>
                    </View>
                  </View>
                  {/* Spacer 3 */}
                  <Spacer bottom={0} left={100} right={80} top={0} />
                  {/* View 2 */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'stretch',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Circle
                      {...GlobalStyles.CircleStyles(theme)['Circle'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.CircleStyles(theme)['Circle'].style,
                          { backgroundColor: theme.colors['Medium'], margin: 5 }
                        ),
                        dimensions.width
                      )}
                    >
                      <Icon
                        color={theme.colors['Background']}
                        name={'AntDesign/right'}
                        size={30}
                      />
                    </Circle>
                  </View>
                </View>
              </View>
            </Touchable>
          </View>
        </SimpleStyleScrollView>
      </LinearGradient>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
