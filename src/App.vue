<template>
  <div id="app">
    <Intro v-if="show.intro" />
    <Action v-if="show.action" :keyPressed="lastKeyPress" :params="actionParams" />
    <Photos ref="photos" :settings="settings.photos" v-on:settingsChanged="settingsChanged" v-on:actionParams="setActionParams" />
  </div>
</template>

<script>
import Action from './components/Action';
import Intro from './components/Intro';
import Photos from './components/Photos';

const KEY_REMAPPINGS = {
  'i': 'd',
  'ArrowUp': '+',
  'ArrowDown': '-',
  'Cancel': 's',
  'MediaPlayPause': 'p',
  '=': '+',
  'Enter': 'p',
  'n': 'c',
  'c': 'x'
};

const SHOW_OFF = {
  action: false,
  configuration: false,
  intro: false,
  photos: false
};

// localStorage.removeItem('settings')
const DEFAULT_SETTINGS = {
  photos: null
};

export default {
  name: 'App',
  components: {
    Action,
    Intro,
    Photos
  },
  data () {
    return {
      lastKeyPress: null,
      show: {},
      settings: null,
      dbCreated: false,
      actionParams: {}
    };
  },
  created () {
    this.settings = JSON.parse(localStorage.getItem('settings')); // localStorage.removeItem('settings')
    if (!this.settings) { this.settings = DEFAULT_SETTINGS }
  },
  mounted () {
    let _this = this;

    // get intro onto the screen
    let show = Object.assign({}, SHOW_OFF);
    show.intro = true;
    this.show = show;
    setTimeout(function () { _this.show.intro = false }, 10000);

    // add a listener for key strokes
    window.addEventListener('keyup', this.keypress);
  },
  methods: {
    settingsChanged: function (settings) {
      this.settings = Object.assign(this.settings, settings);
      localStorage.setItem('settings', JSON.stringify(this.settings));
    },
    setActionParams: function (params) {
      this.actionParams = Object.assign(this.actionParams, params);
    },
    keypress: function (event) {
      if (event.target.tagName === 'BODY' && !event.ctrlKey) {
        let key = event.key;
        key = KEY_REMAPPINGS[key] || key;
        this.keypressAffordance(key);
        if (this.$refs.photos) { this.$refs.photos.keypress(key) }
      }
    },
    keypressAffordance: function (key) {
      if (['ArrowRight', 'ArrowLeft', 'p', 's', 'r', 'x', '+', '-', 'q'].includes(key)) {
        let _this = this;
        this.lastKeyPress = key;
        this.show.action = true;
        if (this.$actionTimeOutId) { clearTimeout(this.$actionTimeOutId) }
        this.$actionTimeOutId = setTimeout(function () { _this.show.action = false }, 1000);
      }
    }
  }
};

</script>

<style>
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: white;
  background-color: black;
}

.info {
  position: absolute;
  z-index: 1;
  background: black;
  opacity: 0.5;
}

.block {
  border-radius: 25px;
  padding: 20px;
}

.main-block {
  top: 16px;
  left: 16px;
  width: 300px;
  height: 90vh;
}

.info .detail {
  opacity: 1;
}

.header {
  color: grey;
}

.fa-icon {
  width: auto;
  height: 0.8em; /* or any other relative font sizes */

  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
}

</style>
