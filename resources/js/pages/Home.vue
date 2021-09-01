<template>
    <hero></hero>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <simple-flash-card></simple-flash-card>
            </div>
            <div class="col-6">
                <simple-flash-card></simple-flash-card>
            </div>
            <div class="col-6">
                <simple-flash-card></simple-flash-card>
            </div>
            <div class="col-6">
                <simple-flash-card></simple-flash-card>
            </div>
        </div>
    </div>
</template>

<script>
import SimpleFlashCard from "../components/SimpleFlashCard.vue";
import Hero from "../components/Hero.vue";
export default {
    name: "Home",
    components: {
        SimpleFlashCard,
        Hero,
    },
};
</script>

<style></style>
