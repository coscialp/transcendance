import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router";
import { isLogged } from "../../utils/isLogged";
import { NavBar } from "../navbar/navbar";
import './settings.css'


const ip = window.location.hostname;

export function Settings() {
	const [cookies] = useCookies();
	const [unauthorized, setUnauthorized] = useState(false);
	const [newNick, setNewNick] = useState("");

	useEffect(() => {
		let mount = true;
		if (mount) {
			isLogged(cookies).then((res) => { setUnauthorized(res.unauthorized) });
		}
		return (() => { mount = false; });
	}, [cookies])

	if (!cookies.access_token || unauthorized) {
		return (<Redirect to="/" />);
	}


	function handleNewNickname(e: any) {
		if (newNick !== "") {
		axios.request({
			url: '/user/me/nickname',
			method: 'patch',
			baseURL: `http://${ip}:5000`,
			headers: {
			  "Authorization": `Bearer ${cookies.access_token}`,
			},
			data: {
				"nickname": newNick,
			}
		  })
		  window.alert("Nickname successfully changed to " + newNick + " !")
		setNewNick("");
		e.preventDefault();
		}
	}

	function handle2FA() {
		axios.request({
			url: '/user/2FA/activate',
			method: 'patch',
			baseURL: `http://${ip}:5000`,
			headers: {
			  "Authorization": `Bearer ${cookies.access_token}`,
			},
		  })
	}

		return (
				<div>
					<NavBar page="Settings" />
					<div className="SettingsElement">
						<div className="SettingsMain">
                            <div className="change Nickname">
								Change your Nickname !
								<div className="change Nick input" >
										<input type="text" className="changeNickPlaceholder" placeholder="New Nickname..." value={newNick} onChange={(e) => {setNewNick(e.target.value)}} />
										<button className="changeNickbtn" onClick={handleNewNickname} >Change !</button>
								</div>
							</div>
							<div className="2FA">
								2FA
								<input className="ToggleSwitch" type="checkbox" id="switch" onClick={handle2FA} /><label className="ToggleSLabel" htmlFor="switch">Toggle</label>
							</div>
						</div>
					</div>
				</div>
	);
}