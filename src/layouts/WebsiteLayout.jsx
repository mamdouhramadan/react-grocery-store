import React from 'react'
import Header from '@components/website/Header'
import Footer from '@components/website/Footer'
import { useSelector } from 'react-redux';
const WebsiteLayout = ({ children }) => {
    const { loading } = useSelector(state => state.general);

    return (
        <div className="main-page">
            {
                loading &&
                <div id="preloder">
                    <div className="loader"></div>
                </div>
            }
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default WebsiteLayout