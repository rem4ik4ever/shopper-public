export const GradientBackground = () => (
  <svg
    id="visual"
    viewBox="0 0 900 600"
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    <defs>
      <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          stdDeviation="161"
          result="effect1_foregroundBlur"
        ></feGaussianBlur>
      </filter>
    </defs>
    <rect width="900" height="600" fill="#6600FF"></rect>
    <g filter="url(#blur1)">
      <circle cx="698" cy="573" fill="#00CC99" r="357"></circle>
      <circle cx="89" cy="459" fill="#6600FF" r="357"></circle>
      <circle cx="399" cy="596" fill="#00CC99" r="357"></circle>
      <circle cx="134" cy="222" fill="#00CC99" r="357"></circle>
      <circle cx="507" cy="128" fill="#6600FF" r="357"></circle>
      <circle cx="104" cy="3" fill="#00CC99" r="357"></circle>
    </g>
  </svg>
);
