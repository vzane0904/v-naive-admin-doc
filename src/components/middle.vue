<template>
  <div class="middle">
    <h2 className="message"></h2>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.middle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  color: var(--vp-c-brand);
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: var(--vp-c-brand-dark);
  }
}
</style>
