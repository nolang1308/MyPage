import React, { useEffect, useState } from 'react';
import './App.css';
import anime from "animejs";

function App() {
    useEffect(() => {
        const $card = document.querySelector(".card");
        const $style = document.querySelector(".hover");

        const handleMouseMove = (e) => {
            const l = e.offsetX;
            const t = e.offsetY;
            const h = $card.offsetHeight;
            const w = $card.offsetWidth;
            const lp = Math.abs(Math.floor(100 / w * l) - 100);
            const tp = Math.abs(Math.floor(100 / h * t) - 100);
            const bg = `background-position: ${lp}% ${tp}%;`;
            const style = `.card.active:before { ${bg} }`;
            $card.classList.add("active");
            $style.innerHTML = style;
        };

        const handleMouseOut = () => {
            $card.classList.remove("active");
        };

        const resetTransform = (el, perspective = 800) => {
            el.style.transform = `translate3d(0%, 0%, -${perspective / 2}px) rotateX(0deg) rotateY(0deg)`;
        };

        const onMove = (ev, el) => {
            const { pageX, pageY } = ev;
            const { offsetWidth, offsetHeight } = el;
            const { left, top } = el.getBoundingClientRect();

            const cardX = left + offsetWidth / 2;
            const cardY = top + offsetHeight / 2;

            const angle = 10;
            const rotX = (cardY - pageY) / angle;
            const rotY = (cardX - pageX) / -angle;

            el.style.transform = `translate3d(0%, 0%, 0) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        };

        const perspective = parseFloat(getComputedStyle($card.parentElement).getPropertyValue("perspective")) || 800;

        const onCardMove = (ev) => onMove(ev, ev.currentTarget);
        const onHover = (ev) => ev.currentTarget.addEventListener("mousemove", onCardMove);
        const onOut = (ev) => {
            resetTransform(ev.currentTarget, perspective);
            ev.currentTarget.removeEventListener("mousemove", onCardMove);
        };

        $card.addEventListener("mousemove", handleMouseMove);
        $card.addEventListener("mouseout", handleMouseOut);
        $card.addEventListener("mouseover", onHover);
        $card.addEventListener("mouseout", onOut);

        return () => {
            $card.removeEventListener("mousemove", handleMouseMove);
            $card.removeEventListener("mouseout", handleMouseOut);
            $card.removeEventListener("mouseover", onHover);
            $card.removeEventListener("mouseout", onOut);
        };
    }, []);

    const [isIn, setIsIn] = useState(true);
    const [text, setText] = useState('DOTORY');

    const cardClick = () => {
        if (isIn) {
            anime({
                targets: '.btn1',
                translateX: -300,
                translateY: 500,
                delay: 1500,
            });
            anime({
                targets: '.btn2',
                translateX: -100,
                translateY: 500,
                delay: 1600,
            });
            anime({
                targets: '.btn3',
                translateY: [{ value: 500, duration: 500 }],
                scaleY: [{ value: [4, 1], duration: 900 }],
                easing: 'easeOutElastic(1, .5)',
                complete: function() {
                    anime({
                        targets: '.btn3',
                        scaleX: [{ value: [1, 20], duration: 900, easing: 'easeOutElastic(1, .5)' }],
                        scaleY: [{ value: [1, 3], duration: 900, easing: 'easeOutElastic(1, .5)' }],
                        easing: 'easeOutElastic(1, .5)',
                    });
                }
            });
            anime({
                targets: '.btn4',
                translateX: 100,
                translateY: 500,
                delay: 1700,
            });
            anime({
                targets: '.btn5',
                translateX: 300,
                translateY: 500,
                delay: 1800,
            });
        } else {
            ['.btn1', '.btn2', '.btn4', '.btn5'].forEach(selector => {
                anime({
                    targets: selector,
                    translateX: 0,
                    translateY: 0,
                    easing: 'easeInOutQuart',
                });
            });
            anime({
                targets: '.btn3',
                scaleX: 1,
                scaleY: 1,
                translateX:0,
                translateY:0,
                easing: 'easeInOutQuart',
            });
        }
        setIsIn(!isIn);
    };

    const hoverHandlers = {
        GitHub: () => setText('GitHub'),
        Instagram: () => setText('Instagram'),
        Discord: () => setText('Discord'),
        Email: () => setText('Email'),
        Card: () => setText('DOTORY')
    };

    return (
        <div className="App">
            <div id="app">
                <div className="card charizard" onClick={cardClick} onMouseEnter={hoverHandlers.Card}></div>
                <style className="hover"></style>
                <div className="btn-shine">{text}</div>
                <div className="btn1">
                    <div className="git-icon" onMouseEnter={hoverHandlers.GitHub}></div>
                </div>
                <div className="btn2">
                    <div className="instagram-icon" onMouseEnter={hoverHandlers.Instagram}></div>
                </div>
                <div className="btn3"></div>
                <div className="btn4">
                    <div className="discord-icon" onMouseEnter={hoverHandlers.Discord}></div>
                </div>
                <div className="btn5">
                    <div className="mail-icon" onMouseEnter={hoverHandlers.Email}></div>
                </div>
            </div>
        </div>
    );
}

export default App;