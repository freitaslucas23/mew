function createSunflowers() {
  const garden = document.getElementById('garden');
  for (let i = 0; i < 250; i++) {
      const sunflower = document.createElement('div');
      sunflower.className = 'sunflower';
      sunflower.style.left = Math.random() * 90 + '%';
      sunflower.style.top = Math.random() * 90 + '%';
      garden.appendChild(sunflower);
  }
}
