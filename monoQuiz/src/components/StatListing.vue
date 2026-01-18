<script lang="ts">

export default {
    data() {
        return {
         stats:  [
            {
                "id": 1,
                "Team": "Otter",
                "Points": 8,
                "icon": "fa-otter"
            },
            {
                id: 2,
                "Team": "Dragon",
                "Points": 10,
                "icon": "fa-dragon"
            },
            {
                id: 3,
                "Team": "Hippo",
                "Points": 6,
                "icon": "fa-hippo"
            },
            {
                id:4,
                "Team": "Shrimp",
                "Points": 7,
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
    <h2>Points</h2>
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