import React from 'react'
import bgImage from '@assets/img/breadcrumb.jpg';

const Breadcrumb = ({ title }) => {
    return (
        <section className="breadcrumb-section set-bg" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>{title}</h2>
                            <div className="breadcrumb__option">
                                <a href="./index.html">Home</a>
                                <span>{title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb