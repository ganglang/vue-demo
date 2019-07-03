<template>
    <div>
        我是App组件 {{message}}
    </div>
</template>
<script>
     export default {
        data:function () {
          return {
              message:'我是App组件'
          }
        }
    }
</script>
<style scoped></style>