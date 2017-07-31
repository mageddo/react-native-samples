import React from 'react';


import Expo from "expo";

import Full from "./components/button/full";
import Drawer from "./Drawer";

import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

const AppNavigator = StackNavigator({
	Full: { screen: Full },
	Drawer : { screen : Drawer }
},{

	initialRouteName: "Drawer",
	headerMode: "none",
})

export default class App extends React.Component {
	
	render() {
		return (
		<Root>
				<AppNavigator />
		</Root>
		);
	}
}
