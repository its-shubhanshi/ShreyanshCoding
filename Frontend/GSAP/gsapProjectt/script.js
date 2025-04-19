"use strict";

let tl = gsap.timeline();

tl.from("#nav h3", {
  y: -50,
  opacity: 0,
  duration: 0.4,
  duration: 1,
  stagger: 1, // ek second antar me safre h3 aa rhe hai
});

tl.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 0.4,
  stagger: 0.4,
});
tl.from("img", {
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
});

tl.from("#footer p", {
  x: -50,
  opacity: 0,
  duration: 0.4,
  duration: 1,
  stagger: 1, // ek second antar me safre p aa rhe hai
});
