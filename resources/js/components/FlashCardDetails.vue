<template>
    <div class="flashcard-details d-flex flex-row justify-content-center">
        <div class="flashcard-details__content border border-2 border-dark d-flex flex-column overflow-hidden">
            <div class="flashcard-details__top border-bottom border-2 border-dark d-flex justify-content-center align-items-center fw-bold fs-2" v-bind:class="{ mean: displayMeaning }" v-on:click="showMeaning">apple</div>
            <div class="flashcard-details__bottom p-4 d-flex flex-row justify-content-evenly">
                <button class="back border border-2 border-dark fw-bold">Back</button>
                <button class="next border border-2 border-dark fw-bold">Next</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayMeaning: false,
        };
    },
    methods: {
        showMeaning() {
            this.displayMeaning = !this.displayMeaning;
        },
    },
};
</script>

<style scoped lang="scss">
.flashcard-details {
    width: 100%;
    height: 100%;
    .flashcard-details__content {
        width: 400px;
        height: 500px;
        border-radius: 1.5625rem;
    }
    .flashcard-details__top {
        cursor: pointer;
        min-height: 400px;
        &.mean {
            background-color: lightyellow;
            color: black;
        }
    }
    .flashcard-details__bottom {
        button {
            width: 150px;
            height: 50px;
            border-radius: 1.5625rem;
        }
        .back {
            background-color: #ffeeef;
        }
        .next {
            background-color: #d0eafa;
        }
    }
}
</style>
