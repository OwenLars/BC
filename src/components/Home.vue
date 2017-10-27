<template>
  <div class="hello">
   
   


<form>
  <div class="form-group" style="text-align: left">
    <label for="enterpriseName">Nombre de la Compañia</label>
    <input type="text" class="form-control" id="enterpriseName" v-model="name" aria-describedby="enterpriseNameHelp" placeholder="Nombre de la compañía u organización" readonly>
    <small id="enterpriseNameHelp" class="form-text text-muted">Nombre registrado de la compañia ante las autoridades competentes</small>
  </div>

 <button type="button" @click="updateBalance">Ticket</button>



 
 <div class="form-group" style="text-align: left">

    <label for="Balance">Ingresos (Tokens) </label>
    <input type="text" class="form-control" id="Balance"  v-model="balance" aria-describedby="Balance" placeholder="Ingresos de la empresa transportadora">
    <small id="Balance" class="form-text text-muted">Ingreso Contable</small>
  </div>

 <button type="button" @click="getBalance">Comparación</button>


<div class="alert alert-light" role="alert">
  El número de ingresos proyectados para este APP fue de <a href="#" class="alert-link">1000</a></div>

 
  
 </form>


    </div>
</template>

<script>

import Vehicle from '@/handlers/vehicle'



export default {
  name: 'Home',
  data () {
    return {
      name: '',
	  balance: ''
    }
  },
  beforeCreate() {
	
	Vehicle.init()

  },
  mounted () {
	this.getEnterpriseName();
	this.updateBalance();
	this.getBalance()

  },

  methods:
  {
	getEnterpriseName() {
		Vehicle.getEnterpriseName().then(name => this.name = name).catch(console.error);
	
	},

	getBalance() {
		
		Vehicle.getBalance().then(balance => this.balance = balance).catch(console.error);
	
	},

	updateBalance() {
		
		Vehicle.updateBalance().then(console.log).catch(console.error);

	
	}


  }
}
</script>


