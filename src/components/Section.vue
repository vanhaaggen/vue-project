<template>
  <section>
    <h2><slot name="heading"></slot></h2>
    <dl>
      <dt class="dt-styl">Skills:</dt>
      <dd class="dd-styl"><slot name="skills"></slot></dd>
    </dl>
    <dl>
      <dt class="dt-styl">Description:</dt>
      <dd class="dd-styl"><slot name="description"></slot></dd>
    </dl>
    <dl>
      <dt class="dt-styl">Features:</dt>
      <dd class="dd-styl">
        <ul>
          <slot name="list"></slot>
        </ul>
      </dd>
    </dl>
    <div class="separator"></div>
    <slot name="logic"></slot>
  </section>
</template>

<style scoped>
hr {
}
h2 {
  margin-bottom: 1rem;
}
.dt-styl {
  font-weight: bold;
  margin-bottom: 0.3rem;
}
.dd-styl {
  margin-bottom: 1rem;
}
.separator {
  width: 100%;
  height: 1px;
  background-color: var(--vt-c-text-dark-2);
  margin-bottom: 1rem;
}
</style>
