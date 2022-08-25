<template>
  <iframe
    width="1280"
    height="720"
    :src="currentLink"
    title=""
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>

<script>
export default {
  props: {
    currentLink: {
      type: String,
      required: true
    }
  }
}
</script>