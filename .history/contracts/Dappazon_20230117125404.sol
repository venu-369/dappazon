// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Dappazon {
    //Code for the smart contract
    
    address public owner;


    constructor() {
         
         owner = msg.sender;
    }

    //List the products
    function list(
        uint256 _id, 
        string memory _name, 
        string memory _category,
        string memory _image,
        uint256  _cost,
        uint256 _rating,
        uint256 _stock
        ) public {
        
    }


    //Buy products

    //withdraw funds
}
