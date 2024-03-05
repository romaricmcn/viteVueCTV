<template>
  <div>
    <input v-model="value" />
  </div>
  <section class="vh-100" style="background-color: #4b515d">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-4">
          <div class="card" style="color: #4b515d; border-radius: 35px">
            <div class="card-body p-4">
              <div class="d-flex">
                <h6 class="flex-grow-1">Toulouse</h6>
                <h6>maintenant</h6>
              </div>

              <div class="d-flex flex-column text-center mt-5 mb-4">
                <h6
                  class="display-4 mb-0 font-weight-bold"
                  style="color: #1c2331"
                >
                  {{ meteo.fcst_day_0.tmin }}
                </h6>
                <span class="small" style="color: #868b94">Stormy</span>
              </div>

              <div class="d-flex flex-column text-center mt-5 mb-4">
                <h6
                  class="display-4 mb-0 font-weight-bold"
                  style="color: #1c2331"
                >
                {{ meteo.fcst_day_0.tmax }}
                </h6>
                <span class="small" style="color: #868b94">Stormy</span>
              </div>

              <div class="d-flex align-items-center">
                <div class="flex-grow-1" style="font-size: 1rem">
                  <div>
                    <i class="fas fa-wind fa-fw" style="color: #868b94"></i>
                    <span class="ms-1"> 40 km/h </span>
                  </div>
                  <div>
                    <i class="fas fa-tint fa-fw" style="color: #868b94"></i>
                    <span class="ms-1"> 84% </span>
                  </div>
                  <div>
                    <i class="fas fa-sun fa-fw" style="color: #868b94"></i>
                    <span class="ms-1"> 0.2h </span>
                  </div>
                </div>
                <div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp"
                    width="100px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'MeteoApi',
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
			meteo:'',
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
		this.fetchMeteo();
	},
	updated() {
	},
	beforeUnmount() {
		// stop the wacher on modelValue
		this.$watch('modelValue', () => {}, {});
	},
	methods: {
		async fetchMeteo() {
			try {
				const response = await fetch('https://prevision-meteo.ch/services/json/toulouse');
				const meteos = await response.json();
				console.log(meteos);
				this.meteo = meteos
			} catch (error) {
				console.error(e);
			}
		}
    },
});
</script>

<style scoped lang="css"></style>
