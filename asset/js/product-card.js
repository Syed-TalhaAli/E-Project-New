VanillaTilt.init(document.querySelectorAll(".card"), {
  max: 15,               // Natural tilt angle
  speed: 400,            // Smooth animation speed
  scale: 1.05,           // Slight zoom on hover
  glare: true,           // Light reflection for depth
  "max-glare": 0.2,      // Subtle shine
  perspective: 800,      // Medium 3D depth
  easing: "cubic-bezier(.03,.98,.52,.99)", // Smooth easing
  reset: true,           // Return to original after hover
  transition: true,      // Smooth transition
  reverse: false,        // Natural direction
  gyroscope: false       // Gyro off for desktop stability
}); 
