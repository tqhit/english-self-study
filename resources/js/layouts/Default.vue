<template>
    <main class="main mx-auto shadow">
        <slot></slot>
    </main>
</template>

<script>
export default {
    components: {},
};
</script>

<style scoped="scss">
.main {
    max-width: 800px;
    min-height: 100vh;
    background-color: white;
}
</style>
