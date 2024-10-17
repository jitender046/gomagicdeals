import React, { useEffect, useRef } from 'react';
import './All Components.css';

const Counter = () => {
    const countersRef = useRef([]);
    const speed = 200; // The lower the slower

    const updateCount = (counter, target) => {
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            requestAnimationFrame(() => updateCount(counter, target));
        } else {
            counter.innerText = `${target / 100}K+`;
        }
    };

    useEffect(() => {
        countersRef.current.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            updateCount(counter, target);
        });
    }, []);

    return (
        <section className="counters">
                <div>
                    <i className="fab fa-youtube fa-4x"></i>
                    <div className="counter" data-target="6000" ref={el => countersRef.current[0] = el}>0</div>
                    <h3>Subscribers</h3>
                </div>
                <div>
                    <i className="fab fa-twitter fa-4x"></i>
                    <div className="counter" data-target="1500" ref={el => countersRef.current[1] = el}>0</div>
                    <h3>Followers</h3>
                </div>
                <div>
                    <i className="fab fa-facebook fa-4x"></i>
                    <div className="counter" data-target="900" ref={el => countersRef.current[2] = el}>0</div>
                    <h3>Likes</h3>
                </div>
                <div>
                    <i className="fab fa-linkedin fa-4x"></i>
                    <div className="counter" data-target="500" ref={el => countersRef.current[3] = el}>0</div>
                    <h3>Connections</h3>
                </div>
        </section>
    );
};

export default Counter;