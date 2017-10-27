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

	setEnterpriseName: () => {}

};

export default Vehicle;



