<template>
  <main>
    <div class="box">
      <div class="bar grow1"></div>
      <div class="bar grow2"></div>
      <div class="bar grow3"></div>
      <div class=" blinking"></div>
    </div>
  </main>
</template>

<script>

</script>

<<style lang="scss">
.box {
  height: 100%;
}
.bar {
  width: 4px;
  border-radius: 4px;
  background-image: linear-gradient(180deg, #45E7FF 0, rgba(0,135,255,0) 100%);
  position: absolute;

  &.grow1 {
    top: 100px;
    left: 200px;
    animation: grow 1.5s ease-out forwards;
    animation-delay: 0.5s;
    transform-origin: bottom;
  }

  &.grow2 {
    top: 150px;
    left: 350px;
    animation: grow 1.5s ease-out forwards;
    animation-delay: 1s;
    transform-origin: bottom;
  }

  &.grow3 {
    top: 150px;
    left: 500px;
    animation: grow 1.5s ease-out forwards;
    animation-delay: 1.5s;
    transform-origin: bottom;
  }

  &.grow4 {
    top: 50px;
    left: 650px;
    animation: grow 1.5s ease-out forwards;
    animation-delay: 2s;
    transform-origin: bottom;
  }
}


/* 将动画应用于需要闪烁的元素 */
.blinking {
  animation: blink 1s infinite;
}


@keyframes grow {
  from {
    height: 200px;
    transform: scaleY(0);
  }
  to {
    height: 200px;
    transform: scaleY(1);
  }
}

/* 定义闪烁动画效果 */
@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>