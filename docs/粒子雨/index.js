// 获取容器
const rainContainer = document.getElementById('rain');

// 生成雨滴
function createRainDrop() {
  const drop = document.createElement('div');
  drop.classList.add('drop');

  // 随机设置雨滴的位置、动画速度和延迟
  const left = Math.random() * 100; // 随机左右位置
  drop.style.left = `${left}%`;
  drop.style.bottom = '0'; // 设置雨滴初始位置在底部

  const duration = Math.floor(Math.random() * 10) / 10 + 1;  // 随机速度，0.5-2.5 秒
  drop.style.animationDuration = `${duration}s`;

  const delay = Math.random() * 2; // 随机延迟，0-2 秒
  drop.style.animationDelay = `${delay}s`;

  // 将雨滴添加到容器中
  rainContainer.appendChild(drop);

  // 当雨滴落到顶部时移除雨滴
  drop.addEventListener('animationiteration', () => {
    rainContainer.removeChild(drop);
  });
}

// 定时生成雨滴
setInterval(createRainDrop, 50); // 生成雨滴的时间间隔改为 50ms
