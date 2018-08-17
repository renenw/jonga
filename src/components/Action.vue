<template>
  <div class="info action-block">
    <span v-if="keyPressed==='ArrowRight'"><icon name="arrow-right" /> Next</span>
    <span v-if="keyPressed==='ArrowLeft'"><icon name="arrow-left" /> Previous</span>
    <span v-if="keyPressed==='p'"><icon name="pause-circle" /> Pause</span>
    <span v-if="keyPressed==='s'"><icon name="stop-circle" /> Stop</span>
    <span v-if="keyPressed==='r'"><icon name="retweet" /> Rotate</span>
    <span v-if="keyPressed==='x'"><icon name="trash-alt" /> Delete</span>
    <span v-if="keyPressed==='q'"><icon name="bug" /> Debug Data</span>
    <Stars v-if="keyPressed==='+' || keyPressed==='-'" :stars="stars" />
  </div>
</template>

<script>
import Stars from './Stars';

import 'vue-awesome/icons/pause-circle';
import 'vue-awesome/icons/stop-circle';
import 'vue-awesome/icons/retweet';
import 'vue-awesome/icons/bug';
import 'vue-awesome/icons/arrow-right';
import 'vue-awesome/icons/arrow-left';
import 'vue-awesome/icons/trash-alt';

export default {
  name: 'Action',
  props: ['keyPressed', 'params'],
  components: { Stars },
  computed: {
    stars: function () {
      return this.params.stars;
    }
  }
};
</script>

<style scoped>
.action-block {
  color: white;
  background: black;
  top: 16px;
  right: 16px;
  border-radius: 15px;
  padding: 10px;
}
</style>
