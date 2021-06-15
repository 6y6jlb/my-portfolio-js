import style from './Main.module.scss';
import containerStyle from '../common/styles/Container.module.scss';
import bgImage from '../common/assets/img/face.png';
import Particles from 'react-particles-js';
import ReactTypingEffect from 'react-typing-effect';

const Main = () => {
    const bg = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }

    const styleParticles = {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "image",
                "stroke": {
                    "width": 5,
                    "color": "#fff"
                },
                "polygon": {
                    "nb_sides": 2
                },
                "image": {
                    "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 20,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 50,
                "color": "#ffffff",
                "opacity": 0.6,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "bottom",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 300,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true, //отключил снежок
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 150,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 200,
                    "size": 20,
                    "duration": 10,
                    "opacity": 1.1,
                    "speed": 1
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.2
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

    return (
        <div  id={'common'} style={bg} className={style.mainBlock}>
            <Particles className={style.particles} params={styleParticles}/>
            <div className={`${containerStyle.mainContainer} ${style.container}`}>
                <div className={style.textBlock}>

                    <span>Hi there</span>
                    <h1 className={style.title}>
                        {'I`am '}
                        <ReactTypingEffect className={style.test}
                                           text={[
                                               " frontend developer",
                                               " react developer",
                                               ' redux developer',
                                               ' typescript developer']}
                                           cursorRenderer={cursor => <h1>{cursor}</h1>}
                                           displayTextRenderer={(text, i) => {
                                               return (
                                                   <h1>
                                                       {text.split('').map((char, i) => {
                                                           const key = `${i}`;
                                                           return (
                                                               <span
                                                                   key={key}
                                                               >{char}</span>
                                                           );
                                                       })}
                                                   </h1>
                                               );
                                           }}
                    /></h1>

                    <h3>My name is Basalov Alexey and this is my portfolio</h3>
                </div>
                <div className={style.photoBlock}></div>
            </div>
        </div>
    )
}
export default Main;