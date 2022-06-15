<template>
    <div class="pagination">
        <div
            class="pagination__item"
            v-for="pageItem in totalPage"
            :class="{'current': pageItem === currentPage}"
            @click="changePage(pageItem)"
        >
            {{ pageItem }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        totalPage: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        }
    },
    methods: {
        // Send page id to parent
        changePage(pageItem) {
            this.$emit('create', pageItem)
        },
    }
}
</script>

<style scoped lang="scss">
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    margin-top: 50px;

    &__item {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $ui-color;

        font-size: 16px;
        font-weight: 500;

        margin: 5px;

        cursor: pointer;

        transition: background-color .3s;

        &.current, &:hover {
            background: $ui-color-active;
        }
    }
}
</style>