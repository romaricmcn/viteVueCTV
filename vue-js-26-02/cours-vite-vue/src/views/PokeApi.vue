<template>
	<div>
		<h1>Ceci est la page pokeApi bienvenu</h1>
		<input type="text" v-model="numero" />
	</div>
	<div>
		<button @click="fetchPokemon">Trouver le nom du POKEMOOOOON</button>
		<ul>
			<li v-for="pokemon in pokemons" >
				{{ pokemon.name }}
			</li>
		</ul>
  	</div>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'PokeApi',
	components: {
	},
	props: {
		// v-model
		modelValue: {
			default: '',
		},
	},
	emits: {
		// v-model event with validation
		'update:modelValue': (value) => value !== null,
	},
	data() {
        return {
            totalVuePackages:null,
			e:'error',
			pokemons:null,
			numero:'',
        };
    },
	computed: {
		value: {
			get () {
				return this.modelValue;
			},
			set (value) {
				this.$emit('update:modelValue', value);
			},
		},
	},
	watch: {
		modelValue: {
			async handler (_newValue, _oldValue) {
				// do something
			},
			immediate: true
		},
	},
	beforeMount() {
	},
	mounted() {
	},
	updated() {
	},
	beforeUnmount() {
		// stop the wacher on modelValue
		this.$watch('modelValue', () => {}, {});
	},
	methods: {
		async fetchPokemon() {
			try {
				const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20');
				const pokemon = await response.json();
				console.log(pokemon.results);
				this.pokemons = pokemon.results
			} catch (error) {
				console.error(e);
			}
		}
    },
});
</script>

<style scoped lang="css">
</style>