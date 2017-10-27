pragma solidity ^0.4.15;

contract Vehicle {

  /// "The class definition"
  
  string public enterpriseName;
  string public legalRepresentativeName;
  string public carPlate;
  string public vehicleMark;
  uint public numberOfAxles;
  uint public balance;

  address public owner = msg.sender;

  function Vehicle(){

		enterpriseName="Transportadora de Productos S.A";
		balance=0;

  }


  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }


	function updateBalance () onlyOwner {
    	balance=balance+1;
  }


}
