import React, { Component } from 'react';

const slides = [
    "https://images.pexels.com/photos/1179225/pexels-photo-1179225.jpeg?cs=srgb&dl=clouds-daylight-environment-1179225.jpg&fm=jpg",
    "https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?cs=srgb&dl=landscape-nature-sky-325807.jpg&fm=jpg",
    "https://wallpaperaccess.com/full/2900004.jpg",
    "https://www.wallpaperflare.com/static/680/1004/47/sweet-creek-trail-timelapse-photography-wallpaper.jpg"
];

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    goPrev = () => {
        this.setState((prevState) => ({
            counter: prevState.counter === 0 ? slides.length - 1 : prevState.counter - 1
        }));
    };

    goNext = () => {
        this.setState((prevState) => ({
            counter: prevState.counter === slides.length - 1 ? 0 : prevState.counter + 1
        }));
    };

    render() {
        const { counter } = this.state;

        return (
            <div className="relative">
                <div className="flex">
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            alt={`slide ${index}`}
                            className={`slide ${index === counter ? 'block' : 'hidden'}`}
                        />
                    ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between">
                    <button onClick={this.goPrev}>Prev</button>
                    <button onClick={this.goNext}>Next</button>
                </div>
            </div>
        );
    }
}

export default SlideShow;
