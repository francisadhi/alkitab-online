<template>
  <div>
      <!-- <b-container> -->
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333; "
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
      class="app-carousel"
    >
      <!-- Text slides with image -->
      <b-carousel-slide style="border-radius: 10px;">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=52"
            alt="image slot"
            style="border-radius: 10px;"
          >
        </template>
      </b-carousel-slide>

      <!-- Slides with custom text -->

      <b-carousel-slide class="slide">

        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=52"
            alt="image slot"
            style="border-radius: 10px;"
          >
        </template>
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide class="slide">

        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=58"
            alt="image slot"
            style="border-radius: 10px;"
          >
        </template>
        <h1>Hello world!</h1>
      </b-carousel-slide>
      <!-- <b-carousel-slide class="slide" img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide> -->

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide style="border-radius: 10px;">
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
            style="border-radius: 10px;"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide> -->
    </b-carousel>
      <!-- </b-container> -->

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
.app-carousel {
    border-radius: 10px;
}

.app-carousel .slide {
    border-radius: 10px;
}
</style>