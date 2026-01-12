<template>
  <div class="container">
    <canvas ref="canvas" :width="10000" :height="1000"></canvas>
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
 
  },

 async mounted() {
  this.initCanvas();
     if(this.$store.state.users || this.$store.state.users === 0) {
        await this.$store.dispatch('getUsers')
        console.log(this.$store.state.users[0]?.userName)
    }
    

   
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
      for (let i = 0; i < userName.length; i++) {
        this.bal.push(this.createGumball(userName[i]?.userName || 'NAME NOT FOUND'));
      }

      this.animate();
      
    },

    handleMouseMove(e: MouseEvent) {
      this.mousex = e.clientX;
      this.mousey = e.clientY;
    },

    animate() {
      if (this.win_w !== window.innerWidth || this.win_h !== window.innerHeight) {
        this.win_w = window.innerWidth;
        this.win_h = window.innerHeight;
      }

      this.animationId = requestAnimationFrame(this.animate);
      this.ctx!.clearRect(0, 0, this.win_w, this.win_h);

      for (let i = 0; i < this.bal.length; i++) {
        this.bal[i].update();
        this.bal[i].y += this.bal[i].dy;
        this.bal[i].x += this.bal[i].dx;

        if (this.bal[i].y + this.bal[i].radius >= this.win_h) {
          this.bal[i].dy = -this.bal[i].dy * this.gravity;
        } else {
          this.bal[i].dy += this.bal[i].vel;
        }

        if (this.bal[i].x + this.bal[i].radius > this.win_w || 
            this.bal[i].x - this.bal[i].radius < 0) {
          this.bal[i].dx = -this.bal[i].dx;
        }

        if (this.mousex > this.bal[i].x - 20 && 
            this.mousex < this.bal[i].x + 20 &&
            this.mousey > this.bal[i].y - 50 &&
            this.mousey < this.bal[i].y + 50 &&
            this.bal[i].radius < 70) {
          this.bal[i].radius += 5;
        } else {
          if (this.bal[i].radius > this.bal[i].startradius) {
            this.bal[i].radius -= 5;
          }
        }
      }
    }
  }
});
</script>

<style scoped>
.container {
  width: 100vw;
  height: 800px;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

canvas {
  display: block;

}
</style>