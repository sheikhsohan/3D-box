const container = document.querySelector('.container');
const gradientAnimation = document.createElement('style');
document.head.appendChild(gradientAnimation);

let animationDuration = 7; // Animation duration in seconds
let gradientPosition = 0; // Initial gradient position
let direction = 1; // Animation direction (1 for left to right, -1 for right to left)
let autoAnimation = false; // Flag to control auto tilt animation
let autoAnimationInterval; // Interval for auto tilt animation

function animateGradient() {
  gradientAnimation.innerHTML = `
    @keyframes flowAnimation {
      0% { background-position: ${gradientPosition}% 0; }
      50% { background-position: ${gradientPosition + 100 * direction}% 0; }
      100% { background-position: ${gradientPosition}% 0; }
    }

    .container {
      animation: flowAnimation ${animationDuration}s linear infinite;
      background: linear-gradient(to right, #8E36D6, #D61F76, #B799FF);
      background-size: 300% 100%;
    }
  `;

  gradientPosition -= 100 * direction;

  if (gradientPosition <= -100) {
    gradientPosition = 0;
  }
}

animateGradient();

container.addEventListener('mousemove', handleMouseMove);
container.addEventListener('mouseout', handleMouseOut);

function handleMouseMove(event) {
  if (!autoAnimation) {
    const { offsetWidth: containerWidth, offsetHeight: containerHeight } = container;
    const { left: containerLeft, top: containerTop } = container.getBoundingClientRect();
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const mouseX = event.clientX - containerLeft;
    const mouseY = event.clientY - containerTop;
    const tiltX = (centerX - mouseX) / centerX * 20;
    const tiltY = (centerY - mouseY) / centerY * 20;

    container.style.transition = ''; // Remove transition property
    container.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
  }
}

function handleMouseOut() {
  if (!autoAnimation) {
    container.style.transition = ''; // Remove transition property
    container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  }
}

// Create button container
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
document.body.appendChild(buttonContainer);

// Button functionality
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Start Auto Animation';
toggleButton.addEventListener('click', toggleAutoTiltAnimation);
buttonContainer.appendChild(toggleButton);

function toggleAutoTiltAnimation() {
  autoAnimation = !autoAnimation;

  if (autoAnimation) {
    toggleButton.textContent = 'Stop Auto Animation';
    autoTiltAnimation(); // Initial animation
  } else {
    toggleButton.textContent = 'Start Auto Animation';
    clearInterval(autoAnimationInterval);
  }
}

function autoTiltAnimation() {
  const tiltX = Math.random() * 40 - 20;
  const tiltY = Math.random() * 40 - 20;
  const animationDuration = Math.random() * 3 + 2; // Random duration between 2 and 5 seconds

  container.style.transition = `transform ${animationDuration}s ease-out`; // Apply smooth transition with random duration
  container.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

  setTimeout(() => {
    container.style.transition = ''; // Remove transition property to avoid abrupt changes
    container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;

    if (autoAnimation) {
      autoTiltAnimation(); // Trigger next animation cycle
    }
  }, animationDuration * 300);
}


container.addEventListener('mousemove', handleMouseMove);
container.addEventListener('mouseout', handleMouseOut);

function handleMouseMove(event) {
  const { offsetWidth: containerWidth, offsetHeight: containerHeight } = container;
  const { left: containerLeft, top: containerTop } = container.getBoundingClientRect();
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;
  const mouseX = event.clientX - containerLeft;
  const mouseY = event.clientY - containerTop;
  const tiltX = (centerX - mouseX) / centerX * 20;
  const tiltY = (centerY - mouseY) / centerY * 20;

  container.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
}

function handleMouseOut() {
  container.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46156385-1', 'cssscript.com');
  ga('send', 'pageview');

  function closeFloatingBox() {
    var floatingContainer = document.querySelector('.floating-container');
    floatingContainer.style.display = 'none';
  }
  
