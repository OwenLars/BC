var Vehicle = artifacts.require("Vehicle");
chai = require("chai");
chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
expect = chai.expect;


contract("Testing the Vehicle contract", function (accounts) {
	describe("Deploy the Vehicle contract",function () {
		it("Get an instance of the Vehicle contract",function () {
			 return Vehicle.deployed().then(function(instance){
	         vehicle = instance;
        	 expect(vehicle).to.be.not.null;
			});
		});
	});

	describe("Checking enterprise name", function() {
		it("Check the enterprise name was set properly", function() {
        	return vehicle.enterpriseName().then(function(response) {
					       
          	expect(response).to.be.equal("Default");
        	});
      	});
	});

});


