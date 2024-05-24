import React from 'react';
import { StateContext } from '../Context/StateContext';
import { LOCAL_STORAGE_LOGIN_KEY, LOCAL_STORAGE_USER_INFO } from '../Constants';
import { ToastContainer, toast } from 'react-toastify';
import Header from './header';
import AboutUs from './About';
import Pricing from './PricingCom';
import Footer from './Footer';

const Home = () => {

    const [loginUserInfo, setLoginUserInfo] = React.useState("");

    React.useEffect(() => {
        setLoginUserInfo(JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_INFO)));

        toast.success("Login successfully");

    }, [])



    return (
        <>
            <Header />
            {/* <div>Welcome {loginUserInfo?.emailOrPhone}</div> */}
            <ToastContainer type="warning" style={{ width: "40%" }} bodyStyle={{ width: "100%" }} />
            <Pricing/>
            <AboutUs/>
            <Footer/>
        </>
    )
}

export default Home;