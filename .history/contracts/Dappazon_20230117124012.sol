// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Dappazon {
    //Code for the smart contract
    string public name;
    address public owner;


    constructor() {
         name= "Dappazon";
        owner = msg.sender;
    }
}
