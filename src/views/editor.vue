<template>
  <div class="editor">
    <p class="theme">tinymce编辑器</p>
    <tinymce v-model="content"></tinymce>
    <div class="submit">
      <el-button type="primary" @click="save()">保 存</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      content: ""
    };
  },
  created() {},
  methods: {
    save() {}
  }
};
</script>

<style lang="less">
.editor {
  .theme {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  .submit {
    text-align: center;
    margin-top: 30px;
  }
}
</style>
