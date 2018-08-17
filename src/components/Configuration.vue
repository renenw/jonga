<template>
  <div class="info block main-block">
    <h1>Configuration</h1>

    <p :class="{'control': true }">
      <span class="header">Source</span><br/><input v-model.lazy="url" placeholder="URL to image source" style="width:90%;" xv-xvalidate.initial="'required|url'" :class="{'input': true, 'is-danger': errors.has('source') }" name="source" />
      <a v-bind:href="url"><icon name="external-link-alt" target="_blank"></icon></a>
      <span v-show="errors.has('source')" class="help is-danger">{{ errors.first('source') }}</span>
    </p>

    <p>
      <span class="header">Transform</span><br/>
      <input v-model="from" placeholder="In file list, replace this..." /><br/>
      <input v-model="to" placeholder="...with this." />
    </p>

    <p>
      <span class="header">Filter</span><br/>
      <input v-model="filter" placeholder="Match part of name" /><br/>
      <span v-if="photoCount" class="guidance">Image Count: {{photoCount}}</span><br/>
      <span v-if="photoCount" class="guidance">Filtered Images: {{filteredCount}}</span>
    </p>

    <p>
      <span class="header">Log To</span><br/><input v-model="logToUrl" placeholder="URL to log image actions at" style="width:90%;" name="logToUrl" />
    </p>

    <p><span class="header">Speed (ms)</span><br/><input v-model.number="speed" placeholder="ms per slide" type="number" /></p>

    <p v-show="!errors.has('source')"><button @click="apply">Apply</button></p>

    <p style="background-color:red; padding: 3px;"><b>Note:</b> Image database will only be refereshed on demand. Click <button>Apply</button> then <button class="key">L</button> to load.</p>
  </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

export default {
  name: 'Configuration',
  components: {},
  props: ['settings', 'photoCount', 'filteredCount'],
  data () {
    return {
      url: this.settings.fileListUrl,
      from: this.settings.from,
      to: this.settings.to,
      filter: this.settings.filter,
      speed: this.settings.speed,
      logToUrl: this.settings.logToUrl
    };
  },
  methods: {
    apply: function () {
      this.$emit('settingsChanged', {
        photos: {
          fileListUrl: this.url,
          from: this.from,
          to: this.to,
          filter: this.filter,
          speed: this.speed,
          logToUrl: this.logToUrl,
          defaultSettings: false
        }
      });
    }
  }
};
</script>

<style scoped>
  .help {
    color: red;
    font-size: 60%;
  }
  input.is-danger {
    color: red;
  }
  .guidance {
    font-size: 80%;
  }
</style>
