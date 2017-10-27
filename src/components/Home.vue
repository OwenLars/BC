<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

<form>
  <div class="form-group">
    <label for="enterpriseName">Nombre de la Compañia</label>
    <input type="text" class="form-control" id="enterpriseName" v-model="name" aria-describedby="enterpriseNameHelp" placeholder="Nombre de la compañía u organización">
    <small id="enterpriseNameHelp" class="form-text text-muted">Nombre registrado de la compañia ante las autoridades competentes</small>
  </div>
 
<div class="form-group">
    <label for="legalRepresentativeName">Nombre del respresentante legal</label>
    <input type="email" class="form-control" id="legalRepresentativeName" aria-describedby="legalRepresentativeNameHelp" placeholder="Nombre del Representante Legal">
    <small id="legalRepresentativeNameHelp" class="form-text text-muted">Nombre completo del representante legal</small>
  </div>
 
  
  <button type="button" class="btn btn-primary">Submit</button>
</form>


    </div>
</template>

<script>

import Vehicle from '@/handlers/vehicle'



export default {
  name: 'Home',
  data () {
    return {
      msg: 'Sentinel Chain TODO: Welcome Message (Spanish) TODO: Logo',
	  name: ''
    }
  },
  beforeCreate() {
	
	Vehicle.init()

  },
  mounted () {
	this.getEnterpriseName()

  },

  methods:
  {
	getEnterpriseName() {
		Vehicle.getEnterpriseName().then(name => this.name = name).catch(console.error);
	
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
