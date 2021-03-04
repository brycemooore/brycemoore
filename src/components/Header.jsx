import React from 'react'
import video from '../images/video.mp4'
import logo from '../images/personals_logo.png'
import '../App.css'
import TextLoop from 'react-text-loop';

export default function Header() {
    return (
        <div className="headerContainer">
            <video id="video" autoPlay={true} loop={true} muted={true}>
                <source src={video} type="video/mp4"/>
                Your Browser Does Not Support Video
            </video>
            <div className="overlay">
                {/* <img src={logo} alt="Bryce Moore" style={{height: '35vw'}}/> */}
                <h1 style={{fontSize: '75px'}}><span>Bryce Moore</span></h1>
                <h1 >
                    <span>is a</span> 
                </h1>
                <h1>
                    <span>
                        <TextLoop children={["Software Engineer", "Creative", "Musician", "Dreamer"]} />
                    </span>
                </h1>
            </div>
        </div>
    )
}
