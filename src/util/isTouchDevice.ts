const isTouchDevice = (): boolean => {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;
};

export default isTouchDevice;
