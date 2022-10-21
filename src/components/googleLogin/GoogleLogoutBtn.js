import {GoogleLogout} from "react-google-login";

const GoogleLogoutBtn = () => {
    const clientId = '836215362418-aek3ommbe5h4bb8ak7d63r7vrfo2hob8.apps.googleusercontent.com';

    const onSuccess = () => {
        window.localStorage.clear();
        console.log('SUCCESSFUL LOGOUT')
    };

    return(
        <GoogleLogout
            clientId={clientId}
            buttonText="Log out"
            onLogoutSuccess={onSuccess}
        />
    );
}

export default GoogleLogoutBtn;