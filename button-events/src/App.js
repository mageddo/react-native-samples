import React from "react";

import Laser from "./Laser";
import Toggle from "./Toggle";

class App extends React.Component {

	render(){
		return <div>
						<Laser />
						<br/><hr />
						<Toggle />
					</div>
	}
}

export default App;