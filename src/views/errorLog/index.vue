<template>
  <div class="errPage-container">
    <errorA></errorA>
    <errorB></errorB>
    <h3>错误</h3>
    <code>
      发生了错误信息
    </code>
  </div>
</template>

<script>
import errorA from './errorTestA'
import errorB from './errorTestB'

export default {
  name: 'errorLog',
  components: { errorA, errorB }
}
</script>

<style scoped>
  .errPage-container {
    padding: 30px;
  }
</style>
