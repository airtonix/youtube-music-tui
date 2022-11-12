// based on https://gist.github.com/paulirish/1579671

let lastTime = 0;

window.requestAnimationFrame = function (callback, _element) {
  let currTime = new Date().getTime();
  let timeToCall = Math.max(0, 16 - (currTime - lastTime));
  let id = setTimeout(() => callback(currTime + timeToCall), timeToCall);
  lastTime = currTime + timeToCall;
  return id;
};

window.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};
