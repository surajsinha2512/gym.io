import React from 'react';
import { StateContext } from '../Context/StateContext';
import { LOCAL_STORAGE_LOGIN_KEY } from '../Constants';

const Home = () => {

    const [loginUserInfo, setLoginUserInfo] = React.useState("");

    React.useEffect(()=> {
        console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_LOGIN_KEY)))
      setLoginUserInfo(JSON.parse(localStorage.getItem(LOCAL_STORAGE_LOGIN_KEY)));
      
    }, [])



    return (
        <>
        <div>Welcome hello{loginUserInfo?.data?.name}</div>
        </>
    )
}

export default Home;