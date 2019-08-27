import React, { useState } from 'react';
import { GoogleAPI, GoogleLogin, GoogleLogout } from 'react-google-oauth'


const Nav = () => {
	const [isUserLogin, setIsUserLogin] = useState(false);
	const [userNickName, setUserNickName] = useState('');
	const [userFoto, setUserFoto] = useState('');

	const handleSignIn = (boolean) => {
		console.log(boolean);
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
		setUserNickName(name);
		setUserFoto(image);
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
			<div className='google-account-data'>
				{isUserLogin && <h2>{ userNickName }</h2>}
				{isUserLogin && <figure><img className='user-foto' src={ userFoto } alt="" /></figure>}
			</div>
			{!isUserLogin && <div className='google-btn'><GoogleLogin onLoginSuccess={ getGoogleUserData } /></div>}
			{isUserLogin && <div className='google-btn'><GoogleLogout /></div>}
		</nav>
		</GoogleAPI>
	);
}

export default Nav;