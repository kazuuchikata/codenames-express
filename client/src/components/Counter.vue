<template>
  <div>
    <h1>{{ user_count }} Users Connected!</h1>
    <h2>{{ seconds }} seconds have elapsed since the server started</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user_count"]),
    ...mapState(["seconds"])
  },
  sockets: {
    connect: function() {
      this.$socket.emit(
        "hello",
        `Hi there! I am ${window.navigator.userAgent}`
      );
    }
  }
};
</script>
