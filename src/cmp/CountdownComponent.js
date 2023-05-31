import React, { useEffect } from 'react';
import { TweenMax, Quart } from 'gsap';
import './CountdownComponent.css';


const CountdownComponent = () => {
  useEffect(() => {
    const $el = document.querySelector('.countdown');
    const $hours = $el.querySelectorAll('.bloc-time.hours .figure');
    const $minutes = $el.querySelectorAll('.bloc-time.min .figure');
    const $seconds = $el.querySelectorAll('.bloc-time.sec .figure');

    let countdownInterval = null;
    let totalSeconds = 0;
    let values = {
      hours: parseInt($hours[0].parentNode.getAttribute('data-init-value')),
      minutes: parseInt($minutes[0].parentNode.getAttribute('data-init-value')),
      seconds: parseInt($seconds[0].parentNode.getAttribute('data-init-value')),
    };

    const animateFigure = ($el, value) => {
      const $top = $el.querySelector('.top');
      const $bottom = $el.querySelector('.bottom');
      const $backTop = $el.querySelector('.top-back');
      const $backBottom = $el.querySelector('.bottom-back');

      $backTop.querySelector('span').innerHTML = value;
      $backBottom.querySelector('span').innerHTML = value;

      TweenMax.to($top, 0.8, {
        rotationX: '-180deg',
        transformPerspective: 300,
        ease: Quart.easeOut,
        onComplete: function () {
          $top.innerHTML = value;
          $bottom.innerHTML = value;
          TweenMax.set($top, { rotationX: 0 });
        },
      });

      TweenMax.to($backTop, 0.8, {
        rotationX: 0,
        transformPerspective: 300,
        ease: Quart.easeOut,
        clearProps: 'all',
      });
    };

    const checkHour = (value, $el1, $el2) => {
      const val1 = value.toString().charAt(0);
      const val2 = value.toString().charAt(1);
      const fig1Value = $el1.querySelector('.top').innerHTML;
      const fig2Value = $el2.querySelector('.top').innerHTML;

      if (value >= 10) {
        if (fig1Value !== val1) animateFigure($el1, val1);
        if (fig2Value !== val2) animateFigure($el2, val2);
      } else {
        if (fig1Value !== '0') animateFigure($el1, 0);
        if (fig2Value !== val1) animateFigure($el2, val1);
      }
    };

    const count = () => {
      countdownInterval = setInterval(() => {
        if (totalSeconds > 0) {
          --values.seconds;

          if (values.minutes >= 0 && values.seconds < 0) {
            values.seconds = 59;
            --values.minutes;
          }

          if (values.hours >= 0 && values.minutes < 0) {
            values.minutes = 59;
            --values.hours;
          }

          checkHour(values.hours, $hours[0], $hours[1]);
          checkHour(values.minutes, $minutes[0], $minutes[1]);
          checkHour(values.seconds, $seconds[0], $seconds[1]);

          --totalSeconds;
        } else {
          clearInterval(countdownInterval);
        }
      }, 1000);
    };

    totalSeconds = values.hours * 60 * 60 + values.minutes * 60 + values.seconds;
    count();

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="wrap">
      <h1>
        Reveal <strong>Countdown</strong>
      </h1>
      <div className="countdown">
        <div className="bloc-time hours" data-init-value="24">
          <span className="count-title">Hours</span>
          <div className="figure hours hours-1">
            <span className="top">2</span>
            <span className="top-back">
              <span>2</span>
            </span>
            <span className="bottom">2</span>
            <span className="bottom-back">
              <span>2</span>
            </span>
          </div>
          <div className="figure hours hours-2">
            <span className="top">4</span>
            <span className="top-back">
              <span>4</span>
            </span>
            <span className="bottom">4</span>
            <span className="bottom-back">
              <span>4</span>
            </span>
          </div>
        </div>
        <div className="bloc-time min" data-init-value="0">
          <span className="count-title">Minutes</span>
          <div className="figure min min-1">
            <span className="top">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div>
          <div className="figure min min-2">
            <span className="top">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div>
        </div>
        <div className="bloc-time sec" data-init-value="0">
          <span className="count-title">Seconds</span>
          <div className="figure sec sec-1">
            <span className="top">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div>
          <div className="figure sec sec-2">
            <span className="top">0</span>
            <span className="top-back">
              <span>0</span>
            </span>
            <span className="bottom">0</span>
            <span className="bottom-back">
              <span>0</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownComponent;
