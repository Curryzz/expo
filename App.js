import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
//引入导航
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

//引入其他屏幕
import Home from "./view/Home";
import History from "./view/History";
import Language from "./view/Language";
import HomeScreen from "./view/HomeScreen";
import OnShowScreen from "./view/OnShowScreen";
import ComingSoonScreen from "./view/ComingSoonScreen";
import TheatreScreen from "./view/TheatreScreen";
import MovieDetailScreen from "./view/MovieDetailScreen";
import SearchScreen from "./view/SearchScreen";
import CitySelectScreen from "./view/CitySelectScreen";

// 引入其他自定义组件
import HomeBar from "./components/HomeBar";
import MoreHeader from "./components/MoreHeader";
import SearchBar from "./components/SearchBar";

import f1 from "./assets/f1.png"
import f2 from "./assets/f2.png"

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
// 创建一个栈导航
const Stack = createNativeStackNavigator();

// 引入仓库
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
        <Stack.Navigator>
          {/* 首页 */}
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                header: ({ navigation }) => <HomeBar navigation={navigation} />,
                animation: "none",
              }}
          />
          {/* 更多电影 */}
          <Stack.Screen
              name="More"
              options={{
                header: ({ navigation }) => (
                    <MoreHeader navigation={navigation} type="moreMovie" />
                ),
                headerBackVisible: false,
                headerShadowVisible: false,
                animation: "none",
              }}
          >
            {() => (
                <TopTab.Navigator>
                  <TopTab.Screen name="正在热映" component={OnShowScreen} />
                  <TopTab.Screen name="即将上映" component={ComingSoonScreen} />
                </TopTab.Navigator>
            )}
          </Stack.Screen>
          {/* 影院 */}
          <Stack.Screen
              name="Theatre"
              component={TheatreScreen}
              options={{
                header: ({ navigation }) => (
                    <MoreHeader navigation={navigation} type="theatre" />
                ),
                headerBackVisible: false,
                headerShadowVisible: false,
                animation: "none",
              }}
          />
          {/* 电影详情 */}
          <Stack.Screen
              name="MovieDetail"
              component={MovieDetailScreen}
              options={{
                animation: "none",
                title: "电影详情",
                headerTitleAlign: "center",
              }}
          />
          {/* 电影搜索 */}
          <Stack.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={{
                header: ({ navigation }) => <SearchBar navigation={navigation} />,
                animation: "none",
                headerBackVisible: false,
                headerShadowVisible: false,
              }}
          />
          {/* 选择城市 */}
          <Stack.Screen
              name="City"
              component={CitySelectScreen}
              options={{
                animation: "none",
                title: "选择城市",
                headerTitleAlign: "center",
              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    // <View style={styles.container}>
    //   <Text>hello curry!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
