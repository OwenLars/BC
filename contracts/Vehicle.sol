pragma solidity ^0.4.15;

contract Vehicle {

  /// "The class definition"
  
  string public enterpriseName;
  string public legalRepresentativeName="Default";
  string public carPlate="Default";
  string public vehicleMark="Default";
  uint numberOfAxles=0;
  uint balance=0;

  address public owner = msg.sender;

  function Vehicle(){

		enterpriseName="Default";
  }


  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }
}
