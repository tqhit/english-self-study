<template>
    <router-link to="id" class="flashcard d-flex flex-column border border-2 border-dark overflow-hidden">
        <div class="flashcard__top p-4 border-bottom border-2 border-dark">
            <div class="flashcard__category position-relative mb-2">
                <span class="position-absolute border border-2 border-dark px-3 fs-6 text-white fw-bold">Training Game</span>
            </div>
            <div class="flashcard__title fw-bold fs-4">Daily Conversation</div>
            <div class="flashcard__description fw-bold fs-6 mb-2">Learn new vocabulary pronunc...</div>
        </div>
        <div class="flashcard__bottom p-4 d-flex flex-row justify-content-evenly text-center">
            <div class="flashcard__length">
                <div class="fw-bold">45</div>
                <div class="fw-bold">Words</div>
            </div>
            <div class="flashcard__last">
                <div class="fw-bold">1d ago</div>
                <div class="fw-bold">Last Time</div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.flashcard {
    width: auto;
    height: auto;
    border-radius: 1.5625rem;
    margin-bottom: 30px;
}
.flashcard__top {
    background-color: #d0eafa;
    min-height: 175px;
}
.flashcard__category {
    height: 27px;
    span {
        border-radius: 1.5625rem;
        background-color: #4aafaa;
    }
}
</style>
