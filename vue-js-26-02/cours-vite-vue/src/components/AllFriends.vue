<template>
	<!-- <div class="container"> -->
	  <h1 class="text-center">Les Amis</h1>
	  <ul class="list-group">
		<!--! Avec v-for on boucle sur le tableau lesAmis -->
		<!--! Puis avec les v-bind on injecte les données de lesAmis dans les props -->
		<!-- * On vient de créer un composant dynamique -->
		<UnAmi 
		v-for="unAmi in lesAmis" 
		:key="unAmi.id" 
		:unAmiName="unAmi.name" 
		:unAmiPhone="unAmi.phone"
		:unAmiMail="unAmi.email"
		:premium="unAmi.premium"
    @mon-event-premium="afficherStatusPremium">
		</UnAmi>
	  </ul>
	<!-- </div> -->
  </template>

<script lang='js'>
import { defineComponent } from 'vue'
import UnAmi from './UnAmi.vue'
export default defineComponent({
  components: {
    UnAmi
  },
	data() {
		return {
			lesAmis: [
        {
            id: 'lasticot',
            name: 'COCO L ASTICOT',
            phone: '01234 5678 991',
            email: 'coco@lasticot.com',
            premium:true
        },
        {
            id: 'janine',
            name: 'Janine DeLavega',
            phone: '09876 543 221',
            email: 'janine@delavega.com',
            premium:true
        },
        {
            id:'jojo',
            name:"jojoLeBarjo",
            phone:'123 12346 24',
            email:'jojo@barjo.com',
            premium:true
        },
        {
            id:'kimonoSurUnFrigo',
            name:"Steven Seagal",
            phone:'+338765477',
            email:'steven@seagal.com',
            premium:true
        }
    ],
		};
	},
  methods: {
    afficherStatusPremium(){
      alert (`
              On a crée un Event customisé qui est émit
              par le composant enfant (mon-event-premium)
              et auquel le composant parent réagit en déclanchant
              la methods afficherStatusPremium (cette alerte JS) 🤙`);
    }
  },
});
</script>

<style scoped lang="css">
</style>