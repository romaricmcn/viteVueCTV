<template>
    <div class="container my-1 p-3">
        <ul class="list-group">
            <h2 class="list-group-item">{{unAmiName}} {{premiumData? 'Ami premium':'Ami nul'}}</h2> 
            <button @click="afficherPremium" class="btn btn-danger mb-1">Premium ?</button>
            <button @click="afficherDetails" class="btn btn-outline-dark">{{detailsVisibles? 'Masquer': 'Afficher'}}</button>           
            <ul v-if="detailsVisibles" class="list-group">
                <li class="list-group-item">{{unAmiPhone}}</li>
                <li class="list-group-item">{{unAmiMail}}</li>
            </ul>
        </ul>
    </div> 
</template>

<script lang='js'>
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'UnAmi',
	props: {
		unAmiName: {
			type: String,
			required: true
			// required:false,
			// default:'NomParDefaut'
		},
		unAmiPhone: {
			type: String,
			required: true
		},
		unAmiMail: {
			type: String,
			required: true
		},
		premium: {
			type: Boolean,
			required: false,
			default: false
		}
	},
	data() {
		return {
			detailsVisibles: false,
			premiumData: this.premium
		};
	},

	methods: {
		afficherDetails() {
			this.detailsVisibles = !this.detailsVisibles;
		},
		afficherPremium() {
			// this.premiumData = !this.premiumData;
			this.$emit('mon-event-premium');
		}
	},
});
</script>

<style scoped lang="css">
.container{
	background-color: deepskyblue;
}
</style>