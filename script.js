function updateScale() {
  const scale = Math.min(
    window.innerWidth / 1920,
    window.innerHeight / 1080
  );
  document.documentElement.style.setProperty(
    '--scale',
    Math.min(Math.max(scale, 0.4), 1.5)
  );
}

window.addEventListener('resize', updateScale);
updateScale();