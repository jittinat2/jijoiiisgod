<template>
  <div class="hello">
    <h1 style="font-size: 70px; color:white; text-align:center;">{{ msg }}</h1>
    <div
      class="ui raised segment"
      style="background: rgba(15 , 15, 15, 1); margin-left:12.5% ; margin-right:12.5% ;"
    >
      <div class="ui inverted segment" style="background: rgba(255, 247, 247, 0.05);">
        <h1 style="font-size: 50px; color:white; text-align:center;">{{tourName}}</h1>
      </div>
    </div>

      <!-- top button  -->

    <div style="margin-left:12.5% ; margin-right:12.5% ; margin-top: 2.5% ">
      <router-link :to="{ path: '/BracketGenerator/'}">
        <button class="ui positive button" id="buttonBottom">
          <i class="columns icon"></i>Create New Bracket
        </button>
      </router-link>
      <router-link :to="{ path: '/profile'}">
        <button class="ui primary button" id="buttonBottom" @click="UpdateBracket">
          <i class="save icon"></i>Save
        </button>
      </router-link>
      <router-link :to="{ path: '/profile'}">
        <button class="ui negative button" id="buttonBottom" @click="DeleteBracket">
          <i class="eraser icon"></i>Delete
        </button>
      </router-link>
    </div>

     <!-- Bracket -->

    <div
      v-bind:class="divNameOfGrid"
      style="background: rgba(15 , 15, 15, 1); margin-left:12.5% ; margin-right:12.5% ; margin-top: 2.5% "
    >
      <div class="stretched row">
        <div class="column" v-for="i in numOfRound" v-bind:key="i">
          <div
            class="ui raised segment"
            id="grid"
            v-for="j in numOfCreateMatch[numOfRound-i]"
            v-bind:key="j"
          >
            <div class="ui inverted segment" v-if="i>1" style="margin-top:25px" id="transparent"></div>
            <div class="ui inverted segment" v-if="i>2" style="margin-top:90px" id="transparent"></div>
            <div class="ui inverted segment" v-if="i>3" style="margin-top:240px" id="transparent"></div>
            <div class="ui inverted segment" v-if="i>4" style="margin-top:480px" id="transparent"></div>

            <button
              class="ui active white fluid button"
              style="height:35px"
              @click="ClickToWinMove(Detail[i-1][(j*2)-2].teamName , i , j , (j*2)-1)"
            >{{ Detail[i-1][(j*2)-2].teamName }}</button>
            <button
              class="ui active blue fluid button"
              style="height:35px"
              @click="ClickToWinMove(Detail[i-1][(j*2)-1].teamName , i , j , (j*2))"
            >{{ Detail[i-1][(j*2)-1].teamName }}</button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="ui segment"
      style="  background: rgba(36, 32, 245, 0.842); margin-left:12.5% ; margin-right:12.5% ; margin-top: 2.5% ;"
    >
      <h1 style="font-size: 70px; color:white; text-align:center; color:yellow">
        <img src="../assets/winner-cup.png" width="60px">
        Winner is : {{Winner}}
        <img src="../assets/winner-cup.png" width="60px">
      </h1>
    </div>

    <!-- Team name -->

    <div style="margin-left:12.5% ; margin-right:12.5% ; margin-top: 2.5% ; margin-bottom: 5%">
      <div class="ui inverted segment">
        <h1>Team name setting</h1>
        <div class="ui input" v-for="k in tourSize" v-bind:key="k">
          <div
            class="ui inverted segment input"
            style="background: rgba(255, 247, 247, 0.05); margin:18px;"
          >
            <label style="margin:18px ; font-size:20px">Team{{k}}</label>
            <input type="text" placeholder="Enter Team Name" v-model="Detail[0][k-1].teamName">
          </div>
        </div>
      </div>

      <br>
      <br>

      <!-- Bottom Button -->
      
      <router-link :to="{ path: '/BracketGenerator/'}">
        <button class="ui positive button" id="buttonBottom">
          <i class="columns icon"></i>Create New Bracket
        </button>
      </router-link>
      <router-link :to="{ path: '/profile'}">
        <button class="ui primary button" id="buttonBottom" @click="UpdateBracket">
          <i class="save icon"></i>Save
        </button>
      </router-link>
      <router-link :to="{ path: '/profile'}">
        <button class="ui negative button" id="buttonBottom" @click="DeleteBracket">
          <i class="eraser icon"></i>Delete
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Show Bracket Page",
      tourName: "",
      tourSize: "",
      divNameOfGrid: "", //for create horizontal grid (ex. 3 round --> 3 horizontal grids)
      numOfMatch: 0,
      numOfRound: 0,
      numOfCreateMatch: [],
      idOfthisBracket: "",
      Winner: "_________",

      Detail: [                                                                  // Detail of all team data
        [
          { teamName: "Round1_match1" },
          { teamName: "Round1_enemy_match_1" },
          { teamName: "Round1_match2" },
          { teamName: "Round1_enemy_match_2" },
          { teamName: "Round1_match3" },
          { teamName: "Round1_enemy_match_3" },
          { teamName: "Round1_match4" },
          { teamName: "Round1_enemy_match_4" },
          { teamName: "Round1_match5" },
          { teamName: "Round1_enemy_match_5" },
          { teamName: "Round1_match6" },
          { teamName: "Round1_enemy_match_6" },
          { teamName: "Round1_match7" },
          { teamName: "Round1_enemy_match_7" },
          { teamName: "Round1_match8" },
          { teamName: "Round1_enemy_match_8" },
          { teamName: "Round1_match9" },
          { teamName: "Round1_enemy_match_9" },
          { teamName: "Round1_match10" },
          { teamName: "Round1_enemy_match_10" },
          { teamName: "Round1_match11" },
          { teamName: "Round1_enemy_match_11" },
          { teamName: "Round1_match12" },
          { teamName: "Round1_enemy_match_12" },
          { teamName: "Round1_match13" },
          { teamName: "Round1_enemy_match_13" },
          { teamName: "Round1_match14" },
          { teamName: "Round1_enemy_match_14" },
          { teamName: "Round1_match15" },
          { teamName: "Round1_enemy_match_15" },
          { teamName: "Round1_match16" },
          { teamName: "Round1_enemy_match_16" }
        ],
        [
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" }
        ],
        [
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" }
        ],
        [
          { teamName: "" },
          { teamName: "" },
          { teamName: "" },
          { teamName: "" }
        ],
        [{ teamName: "" }, { teamName: "" }]
      ]
    };
  },
  methods: {
    ClickToWinMove(teamName, round, match, orderOfbutton) {                                 //click to move team to next round
      console.log(orderOfbutton);
      this.Detail[round][match - 1].teamName = this.Detail[round - 1][
        orderOfbutton - 1
      ].teamName;

      // WE DON'T PRESS AND CHANGE ALL LINE OF TOUR ,, BECAUSE THAT TEAM MAYBE NOT WIN ALL LINE
      if (round == this.numOfRound && match == 1) {
        alert("WINNER IS : " + teamName);
        this.Winner = teamName;
      }
    },

    UpdateBracket() {                                                                       //Update Bracket with save button
      alert("Update : " + this.tourName);

      let UpdateThisBracket = {
        _id: this.idOfthisBracket,
        Detail: this.Detail
      };

      axios
        .post("http://localhost:5000/bracket/create", UpdateThisBracket)
        .then(response => {
          console.log(
            "UPDATE : " +
              this.tourName +
              ",,, _id " +
              "5cd462c8612008638cf6f573"
          );
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },

    DeleteBracket() {                                                                     //Delete Bracket
      alert("Delete !! ");

      let UpdateThisBracket = {
        _id: this.idOfthisBracket,
        Detail: this.Detail
      };
      axios
        .post("http://localhost:5000/bracket/delete", UpdateThisBracket)
        .then(response => {
          console.log("Delete Bracket");
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  mounted() {
    axios
      .post("http://localhost:5000/profile/checkLogin", this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.check = response.data;

        this.idOfthisBracket = this.$route.params.id;

        let ShowThisBracket = {
          _id: this.idOfthisBracket
        };

        // CHECK LOGIN BEFORE GET DETAIL OF BRACKET

        axios
          .post("http://localhost:5000/bracket/show", ShowThisBracket)
          .then(response => {
            console.log("Show Bracket");
            console.log(response.data.tourName);
            this.tourName = response.data.tourName;
            this.tourSize = parseInt(response.data.tourSize);
            this.Detail = response.data.Detail;

            console.log("This Bracket id : " + ShowThisBracket._id); 
            console.log("tourSize : " + this.tourSize);
            var round = Math.log(parseInt(this.tourSize)) / Math.log(2);
            var numOfRoundNameDiv = "";
            console.log("round : " + round);
            if (round == 1) numOfRoundNameDiv = "one";                                             // A
            if (round == 2) numOfRoundNameDiv = "two";                                             // Algorithm
            if (round == 3) numOfRoundNameDiv = "three";                                           // to
            if (round == 4) numOfRoundNameDiv = "four";                                            // create
            if (round == 5) numOfRoundNameDiv = "five";                                            // a
            this.divNameOfGrid =                                                                   // Bracket
              "ui " + numOfRoundNameDiv + " column divided grid";
            this.numOfMatch = this.tourSize / 2;

            for (var i = 0; i < round; i++) {
              this.numOfCreateMatch[i] = Math.pow(2, i);
            }
            this.numOfRound = round;
            console.log("numOfMatch : " + this.numOfMatch);
            console.log("numOfCreateMatch : " + this.numOfCreateMatch);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  },

  beforeRouteEnter(to, from, next) {
    axios
      .post("http://localhost:5000/profile/checkLogin")                            //check logged in session
      .then(response => {
        next(vm => (vm.check = response.data.checkSession.username));
        console.log("Username is : " + response.data.checkSession.username);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#grid {
  background: rgba(255, 247, 247, 0.05);
}
#transparent {
  background: rgba(15, 15, 15, 0);
}
</style>
