import React, { useState } from 'react';
import { GoogleAPI, GoogleLogin, GoogleLogout } from 'react-google-oauth'


const Nav = () => {
	const [isUserLogin, setIsUserLogin] = useState(true);

	const handleSignIn = (boolean) => {
		setIsUserLogin(boolean);
	};
	const handleSignFail = (error) => {
		console.log(error);
	}
	const getGoogleUserData = (googleUser) => {
		// eslint-disable-next-line no-unused-expressions
		googleUser.getAuthResponse().id_token;
    const profile = googleUser.getBasicProfile();
    const name = profile.getName();
    const image = profile.getImageUrl();
    console.log(' Name:', name);
    console.log('Image', image);
	}

	return (
		<GoogleAPI clientId="176030701693-m4582fh2n49a9mg5uu8gg0a781buabnj.apps.googleusercontent.com"
		onUpdateSigninStatus={ handleSignIn }
		onInitFailure={ handleSignFail } >
		<nav className='menu' id='menu'>
			<div className='humburger_btn'>
				<a href="https://www.youtube.com/watch?v=KpvMSDQGmpY&t=1748s" className='menu_btn' id='humburger_btn'>
					<span></span>
				</a>
				<h1 id='header'>Piskel-clone</h1>
			</div>
			{!isUserLogin && <div><GoogleLogin onLoginSuccess={ getGoogleUserData } /></div>}
			{isUserLogin && <div><GoogleLogout /></div>}
		</nav>
		</GoogleAPI>
	);
}

export default Nav;