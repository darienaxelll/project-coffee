import {useEffect, useState} from "react";
import {gapi} from "gapi-script";
import {GoogleLogin} from 'react-google-login';

const GoogleLoginBtn = ()  => {

    const [data, setData] = useState(null);

    const clientId = '836215362418-aek3ommbe5h4bb8ak7d63r7vrfo2hob8.apps.googleusercontent.com';

    const onSuccess = (res) => {
        console.log('LOGIN SUCCESS! Current user: ', res.profileObj);

        const user = res.profileObj;
        const accessToken = res.accessToken;

        localStorage.setItem(accessToken, "bearer_token")
        console.log("Access token set")
        setData(user);
        console.log(data);
        return data;
    };

    const onFailure = () => {
        console.log('FAILED LOGIN');
    };

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    return(
        <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    );
}

export default GoogleLoginBtn;
