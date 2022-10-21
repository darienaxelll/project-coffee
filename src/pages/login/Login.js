import GoogleLoginBtn from "../../components/googleLogin/GoogleLoginBtn";
import GoogleLogoutBtn from "../../components/googleLogin/GoogleLogoutBtn";

const Login = () => {
    return(
        <>
            <GoogleLoginBtn clientId="836215362418-aek3ommbe5h4bb8ak7d63r7vrfo2hob8.apps.googleusercontent.com"/>
            <GoogleLogoutBtn/>
        </>
    );
}

export default Login;