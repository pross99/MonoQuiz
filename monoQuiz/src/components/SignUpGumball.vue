<template>
  <div class="container form-wrapper">
    <h2>Signups</h2>
    <canvas ref="canvas" :width="436" :height="500"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


interface Gumball {
  color: string;
  radius: number;
  startradius: number;
  x: number;
  y: number;
  dy: number;
  dx: number;
  vel: number;
  update: (ctx: CanvasRenderingContext2D) => void;
}

export default defineComponent({
  name: 'GumballAnimation',
  
  data() {
    return {
      ctx: null as CanvasRenderingContext2D | null,
      win_w: window.innerWidth,
      win_h: window.innerHeight,
      mousex: 0,
      mousey: 0,
      gravity: 1,
      bal: [] as any,
      animationId: 0,
      intervalId: 0
    };
  },

  computed: {
    activeUsers() {
      return this.$store.getters.users;
    }
  },

  watch: {
    activeUsers: {
      handler(newUsers, oldUsers) {
        if(oldUsers && newUsers.length > oldUsers.length) {
          const newUserCount = newUsers.length - oldUsers.length;

          for (let i = newUsers.length - newUserCount; i< newUsers.length; i++) {
            this.bal.push(this.createGumball(newUsers[i]?.userName));
          }
        } else if (!oldUsers && newUsers.length > 0) {
          console.log(newUsers.length, oldUsers)
        }
      },
      deep: true
    }
  },

 async mounted() {
 
     if(this.$store.state.users || this.$store.state.users === 0) {
        await this.$store.dispatch('getUsers')
        console.log(this.$store.state.users[0]?.userName)
    }
     this.initCanvas();

   
  },

  beforeUnmount() {
    cancelAnimationFrame(this.animationId);
    clearInterval(this.intervalId);
    window.removeEventListener('mousemove', this.handleMouseMove);
  },

  methods: {
    colorGenerator(): string {
      const pastelcolors = ["#ffb3ba", "#ffdfba", "#ffffba", "#baffc9", "#bae1ff", "#ffd1dc"];
      return pastelcolors[Math.floor(Math.random() * pastelcolors.length)]!;
    },

    createGumball(name: string): Gumball {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      const radius = 30;
      const ctx = this.ctx!;
      
      return {
        color: this.colorGenerator(),
        radius: radius,
        startradius: radius,
        x: Math.random() * (canvas.width - radius),
        y: Math.random() * (canvas.height - radius),
        dy: Math.random() * 2,
        dx: Math.round((Math.random() - 0.5) * 10),
        vel: Math.random() / 5,
        update: function() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
          ctx.fillStyle = this.color;
          ctx.fill();
          ctx.fillStyle = "black"; // Pick a contrasting color
  ctx.font = `${this.radius / 2}px Arial`; // Font size proportional to gumball
  ctx.textAlign = "center"; // Center horizontally
  ctx.textBaseline = "middle"; // Center vertically
  ctx.fillText(name, this.x, this.y);
        }
      };
    },

    initCanvas() {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      this.ctx = canvas.getContext("2d");
      const userName = this.$store.state.users
      // Initialize gumballs
      for (let i = 0; i < this.activeUsers.length; i++) {
        this.bal.push(this.createGumball(userName[i]?.userName || 'NAME NOT FOUND'));
      }

      this.animate();
      
    },

    handleMouseMove(e: MouseEvent) {
      this.mousex = e.clientX;
      this.mousey = e.clientY;
    },

    animate() {
      const canvas = this.$refs.canvas as HTMLCanvasElement;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      this.animationId = requestAnimationFrame(this.animate);
      this.ctx!.clearRect(0, 0, canvasWidth, canvasHeight);

      for (let i = 0; i < this.bal.length; i++) {
        this.bal[i].update();
        this.bal[i].y += this.bal[i].dy;
        this.bal[i].x += this.bal[i].dx;

        // Bottom boundary
        if (this.bal[i].y + this.bal[i].radius >= canvasHeight) {
          this.bal[i].dy = -this.bal[i].dy * this.gravity;
          this.bal[i].y = canvasHeight - this.bal[i].radius; // Keep within bounds
        } else {
          this.bal[i].dy += this.bal[i].vel;
        }

        // Top boundary
        if (this.bal[i].y - this.bal[i].radius < 0) {
          this.bal[i].dy = Math.abs(this.bal[i].dy);
          this.bal[i].y = this.bal[i].radius;
        }

        // Side boundaries
        if (this.bal[i].x + this.bal[i].radius > canvasWidth) {
          this.bal[i].dx = -Math.abs(this.bal[i].dx);
          this.bal[i].x = canvasWidth - this.bal[i].radius;
        } else if (this.bal[i].x - this.bal[i].radius < 0) {
          this.bal[i].dx = Math.abs(this.bal[i].dx);
          this.bal[i].x = this.bal[i].radius;
        }
  }
}
}});
</script>

<style scoped lang="scss">

canvas {
  display: block;
  background-color: rgba($third-color, 0.05);

}
</style>