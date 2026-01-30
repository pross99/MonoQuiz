<script lang="ts">

export default {
    data() {
        return {
         stats:  [
            {
                "id": 1,
                "Team": "Otter",
                "Points": 32,
                "icon": "fa-otter"
            },
            {
                id: 2,
                "Team": "Dragon",
                "Points": 38,
                "icon": "fa-dragon"
            },
            {
                id: 4,
                "Team": "Shrimp",
                "Points": 40,
                "icon": "fa-shrimp"
            }
        ]
    }
},

    computed: {
        statsArray() {
              return [...this.stats].sort((a, b) => b.Points - a.Points);
            }
    }

}
</script>


 <template>
  <div class="s-container">
    <table class="s-table">
      <thead>
        <tr>
          <th>Team</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody v-for="team in statsArray" :key="team.id">
        <tr>
          <td> <fa :icon="team.icon" class="icon"/> </td>
          <td>{{ team.Points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style lang="scss" src="../assets/Table.scss"></style>