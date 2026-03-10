<template>
  <div class="organic-decos" aria-hidden="true">
    <!-- Top-left sage green circle -->
    <div class="od-circle od-tl-circle" />
    <!-- Top-left rain dashes -->
    <div class="od-rain od-tl-rain" />
    <!-- Top-right small sage circle -->
    <div class="od-circle od-tr-circle" />
    <!-- Bottom-right pink/rose organic blob -->
    <div class="od-blob od-br-blob" />
    <!-- Bottom-right dot cluster -->
    <div class="od-dots od-br-dots" />
  </div>
</template>

<style scoped>
.organic-decos {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.od-circle {
  position: absolute;
  border-radius: 50%;
}

.od-tl-circle {
  width: 110px;
  height: 110px;
  background: #A8C5B8;
  opacity: 0.5;
  top: -28px;
  left: -28px;
}

.od-tr-circle {
  width: 65px;
  height: 65px;
  background: #C5DDD2;
  opacity: 0.35;
  top: -10px;
  right: 80px;
}

.od-rain {
  position: absolute;
}

.od-tl-rain {
  width: 55px;
  height: 65px;
  top: 45px;
  left: 60px;
  background-image: url("data:image/svg+xml,%3Csvg width='8' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='4' y1='1' x2='4' y2='6' stroke='%23A8C5B8' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
  background-size: 8px 10px;
  opacity: 0.5;
}

.od-blob {
  position: absolute;
}

.od-br-blob {
  width: 130px;
  height: 100px;
  bottom: -25px;
  right: -25px;
  background: #E8B4B8;
  opacity: 0.35;
  border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
}

.od-dots {
  position: absolute;
}

.od-br-dots {
  width: 80px;
  height: 80px;
  bottom: 35px;
  right: 50px;
  background-image: radial-gradient(circle 1.5px at center, #E8B4B8 100%, transparent 100%);
  background-size: 7px 7px;
  opacity: 0.4;
}
</style>
