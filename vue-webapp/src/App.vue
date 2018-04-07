<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
/* structural 
elements 结构元素 */ dl,
dt,
dd,
ul,
ol,
li,
/* list elements 列表元素 */ pre,
/* text formatting elements 文本格式元素 */ fieldset,
lengend,
button,
input,
textarea,
/* form elements 表单元素 
*/ th,
td {
  /* table elements 表格元素 */
  margin: 0;
  padding: 0;
}
ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
body,
button,
input,
select,
textarea {
  font: 12px/1.5 "Microsoft Yahei", Helvetica Neue, Helvetica, STHeiTi,
    sans-serif;
}
a {
  text-decoration: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
} /* 将斜体扶正 */

img,
input {
  border: 0 none;
}
div,
a {
  outline: none;
}
a {
  text-decoration: none;
}
.clear {
  clear: both;
}
.hide {
  display: none;
}
</style>
