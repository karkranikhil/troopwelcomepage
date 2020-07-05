import React from "react"
import { Helmet } from "react-helmet"
import './style.css'
const Welcome = () => (
    <>
        <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Poppins:700" rel="stylesheet"/>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
                    <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"/>
        </Helmet>
        <div className="wrapper">
            <h1>coming soon<span className="dot">.</span></h1>
            <div className="icons">
                <a href="https://twitter.com/karkra_nikhil" target="_blank"><i className="fa fa-twitter"></i></a>
                <a href="https://www.youtube.com/channel/UCAYCXLokF9UNrGmblxKPRXA" target="_blank"><i className="fa fa-youtube-play"></i></a>
                <a href="https://www.facebook.com/salesforcetroop" target="_blank"><i className="fa fa-facebook"></i></a>
            </div>
        </div>
        </>
)

export default Welcome

