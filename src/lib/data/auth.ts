import { authHandlers } from '$lib/stores/store';

export async function handleSignUpAuthenticate(
	email: string,
	password: string,
	confirmPassword: string
) {
	try {
		if (password !== confirmPassword) {
			console.log('Password does not match');
			console.log(password);
			console.log(confirmPassword);
			return;
		}

		// if (displayName.length < 3) {
		// 	console.log('Display name is null');
		// 	return;
		// }

		await authHandlers.signup(email, password);

		let error = false;

		// await authHandlers.updateUserName(displayName);

		console.log('Successfully signed up');

		await authHandlers.login(email, password);

		window.location.href = '/user/account/register';
	} catch (err) {
		let error = true;
		console.log(' There was an auth error', err);
	}
}

export async function handleUpdateDisplayName(displayName: string) {
	try {
		if (displayName.length < 3) {
			console.log('Display name is null');
			return;
		}

		await authHandlers.updateUserName(displayName);

		console.log('Successfully Update display name');

		window.location.href = '/';
	} catch (err) {
		let error = true;
		console.log(' There was an auth error', err);
	}
}

export async function handleAuthenticate(email, password) {
	// if (authenticating) {
	// 	return;
	// }
	if (!email || !password) {
		// error = true;
		return;
	}

	// authenticating = true;

	try {
		await authHandlers.login(email, password);
		window.location.href = '/';
	} catch (err) {
		console.log(' There was an auth error', err);
		// error = true;
		// authenticating = false;
	}
}
export async function handleAuthenticateGoogle() {
	try {
		await authHandlers.loginWithGoogle();
		console.log('Successfully logged in');
		window.location.href = '/';
	} catch (err) {
		console.log(' There was an auth error', err);
	}
}