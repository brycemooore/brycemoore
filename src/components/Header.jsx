import React from 'react'
import video from '../images/video.mp4'
import logo from '../images/personals_logo.png'
import '../App.css'

export default function Header() {
    return (
        <div styles={{position: 'absolute'}}>
            <video id="video" width="100%" height="100%" autoPlay={true} loop={true} muted={true}>
                <source src={video} type="video/mp4"/>
                Your Browser Does Not Support Video
            </video>
            <img src={logo} alt="Bryce Moore" className="overlay"/>
        </div>
    )
}
