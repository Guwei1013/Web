<template>
  <main>
    <div id="container">
      <div class="camera -x">
        <div class="camera -y">
          <div class="camera -z">
            <div class="sea">
              <div class="wave" v-for="item in 1000" :style="{ '--d': item * (-30) + 'ms' }">
                <div class="counter -z">
                  <div class="counter -y">
                    <div class="counter -x">
                      <div class="ball"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>

</script>

<style lang="scss">
*{
  /* 初始化 */
  margin: 0;
  padding: 0;
}
div{
  /* 所有的div都开启3D效果 */
  transform-style: preserve-3d;
}
#container{
  /* 100%窗口宽度和高度 */
  width: 100vw;
  height: 100vh;
  /* 弹性布局 水平+垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 渐变背景 */
  background: linear-gradient(to top,#1b2735,#090a0f);
  /* 溢出隐藏 */
  overflow: hidden;
  /* 设置视距 */
  perspective: 450px;
}
.camera{
  /* 绝对定位 */
  position: absolute;
  width: 100%;
  height: 100%;
  /* 弹性布局 居中 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.camera.-x{
  transform: rotateX(60deg);
}
.camera.-y{
  transform: rotateY(0deg);
}
.camera.-z{
  /* 执行z轴旋转动画：动画名 时长 线性的 无限次播放 */
  //animation: rotateZ 30s linear infinite;
  transform: rotateZ(90deg);
}
.sea{
  width: 100%;
  height: 600px;
  /* 相对定位 */
  position: relative;
  /* 网格布局 */
  display: grid;
  /* 10行10列，每个宽高均为7.5% */
  grid-template-rows: repeat(100,10px);
  grid-template-columns: repeat(10,10px);
  grid-gap: 40px;
}
.wave{
  /* 执行波浪动画:动画名 时长 贝塞尔曲线 无限次播放 来回轮流播放 */
  animation: wave 1s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;
  /* 设置动画延迟时间,通过var函数调用自定义属性--d */
  animation-delay: var(--d);
}
.counter{
  position: absolute;
  width: 100%;
  height: 100%;
}
.counter.-x{
  transform: rotateX(-60deg);
}
.counter.-y{
  transform: rotateY(0deg);
}
.counter.-z{
  /* 执行z轴方向旋转动画 */
  //animation: rotateZ 30s linear infinite reverse;
  transform: rotateZ(270deg);
}
.ball{
  width: 100%;
  height: 100%;
  /* 背景径向渐变 */
  background: radial-gradient(circle at 0px 3px,#fff,#69a8cc 60%,#23315c);
  border-radius: 100%;
  /* 投影 这里不用box-shadow,用drop-shadow效果更佳 */
  /* box-shadow: 0 100px 12px rgba(96,148,179,0.2); */
  filter: drop-shadow(0 100px 12px rgba(96,148,179,0.2));
}

/* 定义动画 */
@keyframes rotateZ {
  0%{
    transform: rotateZ(0deg);
  }
  100%{
    transform: rotateZ(360deg);
  }
}
@keyframes wave {
  0%{
    transform: translateZ(0);
  }
  100%{
    transform: translateZ(30px);
  }
}
</style>