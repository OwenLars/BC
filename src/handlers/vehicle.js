import contract from 'truffle-contract';
import VehicleContract from '@contracts/Vehicle.json';

const Vehicle = {
	contract: null,
	instance: null,

	init: () => {
		let self = this;
		return new Promise((resolve, reject) => {
			self.contract = contract(VehicleContract);
			self.contract.setProvider(window.web3.currentProvider);
			self.instance = self.contract.deployed().then(instance => {
				return instance;
			}).catch(error => {reject(error)});
		});
	
	},

	getEnterpriseName: () => {

		let self = this;
		return new Promise((resolve, reject) => {
			self.instance
				.then(vehicle => { return vehicle.enterpriseName(); })
				.then (enterpriseName => { resolve (enterpriseName) })
				.catch (error => { reject (error)})
			});
		
		},

	getBalance: () => {

		let self = this;
		return new Promise((resolve, reject) => {
			self.instance
				.then(vehicle => { return vehicle.balance(); })
				.then (balance => { resolve (balance) })
				.catch (error => { reject (error)})
			});
		
		},
	

	updateBalance: () => {
	
	let self = this;
    	return new Promise((resolve, reject) => {
    	  window.web3.eth.getCoinbase()
      	  .then((coinbase, error) => {
       	   if (error) {
         	   reject(error)
         	 }
         	 self.instance
            .then(vehicle => { return vehicle.updateBalance({from: coinbase});})
            .then(console.log)
            .catch(console.error)
        	})

		});

	}

};

export default Vehicle;



