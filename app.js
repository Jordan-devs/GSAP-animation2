const hole = document.querySelector(".hole");
const herman = document.querySelector(".herman");
const shadow = document.querySelector(".shadow");

const tl = gsap.timeline({ repeat: 1, repeatDelay: 0.5, yoyo: true });
tl.from(hole, { scale: 0, repeat: 1, yoyo: true })
  .fromTo(herman, { y: 160, scaleY: 2 }, { y: -175, scaleY: 1 }, 0.2)
  .to(herman, { y: -4, ease: "power1.in" }, ">")
  .to(herman, {
    scaleY: 0.7,
    scaleX: 1.4,
    transformOrigin: "bottom center",
    repeat: 1,
    yoyo: true,
    duration: 0.2,
  })
  .to(shadow, { opacity: 1, duration: 0.2 }, 0.75)
  .to(shadow, { scale: 0.7, ease: "power1.in" }, ">");

const play = (document.getElementById("play").onclick = () => tl.play());
const pause = (document.getElementById("pause").onclick = () => tl.pause());
const restart = (document.getElementById("restart").onclick = () =>
  tl.restart());
