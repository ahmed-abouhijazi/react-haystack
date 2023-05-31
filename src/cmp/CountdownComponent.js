import React from 'react';
import './CountdownComponent.css';
// import { TweenMax, Quart } from 'gsap';

const CountdownComponent = () => {
//   const countdownRef = useRef(null);

//   useEffect(() => {
//     const Countdown = {
//       $el: null,
//       countdown_interval: null,
//       total_seconds: 0,
//       $: {
//         hours: null,
//         minutes: null,
//         seconds: null,
//       },
//       values: {
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//       },

//       init: function () {
//         this.$el = countdownRef.current;

//         this.$.hours = this.$el.querySelector('.bloc-time.hours .figure');
//         this.$.minutes = this.$el.querySelector('.bloc-time.min .figure');
//         this.$.seconds = this.$el.querySelector('.bloc-time.sec .figure');

//         this.values = {
//           hours: parseInt(this.$.hours.parentElement.getAttribute('data-init-value')),
//           minutes: parseInt(this.$.minutes.parentElement.getAttribute('data-init-value')),
//           seconds: parseInt(this.$.seconds.parentElement.getAttribute('data-init-value')),
//         };

//         this.total_seconds = this.values.hours * 60 * 60 + this.values.minutes * 60 + this.values.seconds;

//         this.count();
//       },

//       count: function () {
//         const that = this;
//         const $hour_1 = this.$.hours.querySelector('.top');
//         const $hour_2 = this.$.hours.nextElementSibling.querySelector('.top');
//         const $min_1 = this.$.minutes.querySelector('.top');
//         const $min_2 = this.$.minutes.nextElementSibling.querySelector('.top');
//         const $sec_1 = this.$.seconds.querySelector('.top');
//         const $sec_2 = this.$.seconds.nextElementSibling.querySelector('.top');

//         this.countdown_interval = setInterval(function () {
//           if (that.total_seconds > 0) {
//             --that.values.seconds;

//             if (that.values.minutes >= 0 && that.values.seconds < 0) {
//               that.values.seconds = 59;
//               --that.values.minutes;
//             }

//             if (that.values.hours >= 0 && that.values.minutes < 0) {
//               that.values.minutes = 59;
//               --that.values.hours;
//             }

//             that.checkHour(that.values.hours, $hour_1, $hour_2);
//             that.checkHour(that.values.minutes, $min_1, $min_2);
//             that.checkHour(that.values.seconds, $sec_1, $sec_2);

//             --that.total_seconds;
//           } else {
//             clearInterval(that.countdown_interval);
//           }
//         }, 1000);
//       },

//       animateFigure: function ($el, value) {
//         const $top = $el.querySelector('.top');
//         const $back_top = $el.querySelector('.top-back');
//         const $bottom = $el.querySelector('.bottom');
//         const $back_bottom = $el.querySelector('.bottom-back');

//         $back_top.querySelector('span').innerHTML = value;
//         $back_bottom.querySelector('span').innerHTML = value;

//         TweenMax.to($top, 0.8, {
//           rotationX: '-180deg',
//           transformPerspective: 300,
//           ease: Quart.easeOut,
//           onComplete: function () {
//             $top.innerHTML = value;
//             $bottom.innerHTML = value;
//             TweenMax.set($top, { rotationX: 0 });
//           },
//         });

//         TweenMax.to($back_top, 0.8, {
//           rotationX: 0,
//           transformPerspective: 300,
//           ease: Quart.easeOut,
//           clearProps: 'all',
//         });
//       },

//       checkHour: function (value, $el_1, $el_2) {
//         const val_1 = value.toString().charAt(0);
//         const val_2 = value.toString().charAt(1);
//         const fig_1_value = $el_1.querySelector('.top').innerHTML;
//         const fig_2_value = $el_2.querySelector('.top').innerHTML;

//         if (value >= 10) {
//           if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
//           if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
//         } else {
//           if (fig_1_value !== '0') this.animateFigure($el_1, '0');
//           if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
//         }
//       },
//     };

//     Countdown.init();

//     return () => {
//       clearInterval(Countdown.countdown_interval);
//     };
//   }, []);

  return (
    <div class="wrap">  
  <h1>Reveal <strong>Countdown</strong></h1>

  <div class="countdown">
    <div class="bloc-time hours" data-init-value="24">
      <span class="count-title">Hours</span>

      <div class="figure hours hours-1">
        <span class="top">2</span>
        <span class="top-back">
          <span>2</span>
        </span>
        <span class="bottom">2</span>
        <span class="bottom-back">
          <span>2</span>
        </span>
      </div>

      <div class="figure hours hours-2">
        <span class="top">4</span>
        <span class="top-back">
          <span>4</span>
        </span>
        <span class="bottom">4</span>
        <span class="bottom-back">
          <span>4</span>
        </span>
      </div>
    </div>

    <div class="bloc-time min" data-init-value="0">
      <span class="count-title">Minutes</span>

      <div class="figure min min-1">
        <span class="top">0</span>
        <span class="top-back">
          <span>0</span>
        </span>
        <span class="bottom">0</span>
        <span class="bottom-back">
          <span>0</span>
        </span>        
      </div>

      <div class="figure min min-2">
       <span class="top">0</span>
        <span class="top-back">
          <span>0</span>
        </span>
        <span class="bottom">0</span>
        <span class="bottom-back">
          <span>0</span>
        </span>
      </div>
    </div>

    <div class="bloc-time sec" data-init-value="0">
      <span class="count-title">Seconds</span>

        <div class="figure sec sec-1">
        <span class="top">0</span>
        <span class="top-back">
          <span>0</span>
        </span>
        <span class="bottom">0</span>
        <span class="bottom-back">
          <span>0</span>
        </span>          
      </div>

      <div class="figure sec sec-2">
        <span class="top">0</span>
        <span class="top-back">
          <span>0</span>
        </span>
        <span class="bottom">0</span>
        <span class="bottom-back">
          <span>0</span>
        </span>
      </div>
    </div>
  </div>
</div>
  );
};

export default CountdownComponent;
