interface IBackgroundProps {
  url: string;
  offset?: string;
  bgColor?: string;
  animate?: boolean;
  // Check https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ for
  // why using simply 100vh doesn't work on mobile browsers.
  updateHeight?: 'on-mount-only' | 'on-resize' | 'fixed-100vh';
  centerContent?: boolean;
}
