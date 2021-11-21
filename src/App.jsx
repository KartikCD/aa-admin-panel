import React from "react";
import "./styles/App.scss";
import Layout from "./layout/Layout";
import Contacts from "./contacts/Contacts";
import Subscribers from "./subscribers/Subscribers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PATHS } from "./constants";
import { PlanTrip } from "./plan-trip/PlanTrip";

export const App = React.memo(() => {
	return (
		<BrowserRouter>
			<React.Fragment>
				<Routes>
					<Route path={PATHS.HOME} exact element={<Layout />} />
					<Route
						path={PATHS.CONTACTS}
						exact
						element={<Layout comp={<Contacts />} />}
					/>
					<Route
						path={PATHS.SUBSCRIBERS}
						exact
						element={<Layout comp={<Subscribers />} />}
					/>
					<Route
						path={PATHS.PLANTRIP}
						exact
						element={<Layout comp={<PlanTrip />} />}
					/>
				</Routes>
			</React.Fragment>
		</BrowserRouter>
	);
});
