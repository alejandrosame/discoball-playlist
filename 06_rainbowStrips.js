export function beforeRender(delta) {
  hl = pixelCount / 2;
  t = time(0.01);
  v = 0.01 + wave(time(0.07));
}

export function render(index) {
  c1 = 1 - abs(index - hl) / hl;
  hsv(c1 + t, 1, v);
}
