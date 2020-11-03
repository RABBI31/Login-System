import React from 'react' ;
import { useAuth0 } from '@auth0/autho-react';

const loginbutton = () => {
    const {loginWithRedirect } = useAuth0();
    return (
        <button onclick={()=> loginWithRedirect()}>
            Log In
        </button>
    )
}
export default loginbutton