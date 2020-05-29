<template>
<div class="text-center">
<h4>{{ title }}</h4>
{{ children }}
</div>
</template>

<script>
export default {
    props: ["title", 'children'],

}
</script>