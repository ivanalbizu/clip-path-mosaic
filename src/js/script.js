window.addEventListener("load", () => {
  const clips = document.querySelectorAll(".clip figure");

  clips.forEach((clip) => {
    clip.addEventListener("click", (event) => {
      const clip = event.target.closest(".clip");

      clip.classList.add("clip--current-animation");
      clip.addEventListener(
        "transitionend",
        () => {
          clip.classList.remove("clip--current-animation");
        },
        { once: true }
      );

      if (clip.classList.contains("clip--active")) {
        return clip.classList.remove("clip--active");
      }
      clips.forEach((clip) => clip.classList.remove("clip--active"));
      clip.classList.add("clip--active");
    });
  });
});
