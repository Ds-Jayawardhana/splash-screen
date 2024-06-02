gsap.fromTo(
    ".preload",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 0.5,
      
    }
  );
  
  gsap.fromTo(
    ".topbar",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );