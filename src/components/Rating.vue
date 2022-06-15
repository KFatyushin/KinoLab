<template>
  <div class="rating" :class="colorRating">
    {{ ratingNum }}
  </div>
</template>

<script>
export default {
    props: {
        ratingNum: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            colorRating: '',
        }
    },
    methods: {
        // Change color depending on rating
        addColorRating() {
            let rating = Number(this.ratingNum);
            this.colorRating =
                (rating <= 4) ? 'red' :
                    (rating < 7) ? 'gray' :
                        'green'
        },
    },
    mounted() {
        this.addColorRating()
    },
    watch: {
        ratingNum() {
            this.addColorRating()
        }
    }
}
</script>

<style scoped lang="scss">
.rating {
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

    font-size: 16px;
    letter-spacing: 1.05px;

  &.green {
    background: #3bb33b;
  }
  &.gray {
    background: gray;
  }
  &.red {
    background: red;
  }
}
</style>