<template>
    <back-button></back-button>
    <div class="container">
        <flash-card-details></flash-card-details>
    </div>
</template>

<script>
import BackButton from "../components/BackButton.vue";
import FlashCardDetails from "../components/FlashCardDetails.vue";

export default {
    components: {
        BackButton,
        FlashCardDetails,
    },
};
</script>

<style></style>
