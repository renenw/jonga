<template>
  <div class="info block main-block">
    <p><button class="key">D</button> <button class="key"><icon name="info"></icon></button> <span>Photo detail</span></p>
    <p><button class="key"><icon name="arrow-right"></icon></button> <span>Next image</span></p>
    <p><button class="key"><icon name="arrow-left"></icon></button> <span>Previous image</span></p>
    <p><button class="key">P</button> <button class="key"><icon name="pause"></icon></button> <span>Pause</span></p>
    <p><button class="key">S</button> <button class="key"><icon name="stop"></icon></button> <span>Stop (arrow to resume)</span></p>
    <br/>
    <p><button class="key">-</button> <button class="key"><icon name="volume-up"></icon></button> <span>Less stars</span></p>
    <p><button class="key">+</button> <button class="key"><icon name="volume-down"></icon></button> <span>More stars</span></p>
    <p><button class="key">X</button> <button class="key">C</button> <button class="key"><icon name="list-ul"></icon></button> <span>Delete</span></p>
    <p><button class="key">R</button> <button class="key"><icon name="undo"></icon></button> <span>Rotate</span></p>
    <br/>
    <p><button class="key">?</button> <button class="key">H</button> <button class="key"><icon name="home"></icon></button> <span>Key mappings</span></p>
    <p><button class="key">N</button> <span>Configuration</span></p>
    <p><button class="key">L</button> <span>Load / re-import image list</span></p>
    <p><button class="key">I</button> <span>Intro screen</span></p>
    <p><button class="key">Q</button> <span>Print debug info</span></p>
  </div>
</template>

<script>
import 'vue-awesome/icons/arrow-right';
import 'vue-awesome/icons/arrow-left';
import 'vue-awesome/icons/home';
import 'vue-awesome/icons/undo';
import 'vue-awesome/icons/pause';
import 'vue-awesome/icons/stop';
import 'vue-awesome/icons/volume-up';
import 'vue-awesome/icons/volume-down';
import 'vue-awesome/icons/list-ul';
import 'vue-awesome/icons/info';

export default {
  name: 'Help'
};
</script>
