<template>
    <div class="reviews-item" v-for="(review, index) in reviews">
        <div class="reviews-item__head">
            <div class="reviews-item__author">
                {{ review.author }}
            </div>

            <div class="reviews-item__date">
                {{ new Date(review.date).toLocaleString("ru", options) }}
            </div>
        </div>

        <div class="reviews-item__body">
            <p>
                {{ review.description.slice(0, (index === reviewId) ? -1 : 500) }}
            </p>

            <div
                class="reviews-item__btn"
                v-if="(index === reviewId) ? false : true"
                @click="readMore(index)"
            >
                Читать дальше
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        reviews: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            options: {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            },
            reviewId: -1,
        }
    },
    methods: {
        readMore(id) {
            this.reviewId = id;
        },
    }
}
</script>

<style scoped lang="scss">
.reviews-item {
    background: $black;

    padding: 20px 30px;
    margin-bottom: 7px;

    &__head {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);

        padding-bottom: 7px;
    }
    &__author {
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 1.1px;
    }
    &__date {
        font-size: 13px;
        letter-spacing: 1.2px;
    }

    &__body {
        font-size: 14px;
        line-height: 140%;
        letter-spacing: 1.1px;

        padding-top: 20px;
    }

    &__btn {
        display: inline-block;
        font-weight: 500;
        border-bottom: 1px solid $white;

        margin-top: 5px;

        cursor: pointer;
    }

    @media (max-width: $medium) {
        padding: 15px 20px;

        &__author {
            font-size: 14px;
        }

        &__body {
            padding-top: 10px;
        }
    }

    @media (max-width: $ex-small) {
        &__head {
            display: block;
        }

        &__author {
            font-size: 14px;

            margin-bottom: 5px;
        }
    }
}
</style>