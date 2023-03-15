// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    uint internal totalCap;
    uint internal totalTokenMinted;
    address internal creator;


    mapping (address => bool) internal whiteList;

    modifier onlyAllowList(){
        require(whiteList[msg.sender] || msg.sender == creator,"not allowed");
        _;
    }

    constructor(address _creator, string memory _name, string memory _symbol, bool _setTotalCap, uint _totalCap, bool _wantInitialMint, uint _initialMint, address[] memory _whiteListAddresses) ERC20(_name, _symbol) {
        totalCap = _totalCap;
        totalTokenMinted = _initialMint;
        if(_setTotalCap == false){
            totalCap = type(uint256).max;
        }
        if(_wantInitialMint == false ){
            totalTokenMinted = 0;
        }
        for(uint i=0; i < _whiteListAddresses.length; i++){
            whiteList[_whiteListAddresses[i]] = true;
        }
        creator = _creator;
        require(totalTokenMinted <= totalCap,"Limit exceed");
        _mint(_creator, totalTokenMinted);
    }

    function mint(address _to, uint256 _amount) public onlyAllowList {
        require(totalTokenMinted + _amount <= totalCap,"Limit exceed");
        _mint(_to, _amount);
        totalTokenMinted += _amount;
    }

    function getTotalCap() public view returns(uint){
        return totalCap;
    }

    function getTotalTokenMint() public view returns(uint){
        return totalTokenMinted;
    }

    function getCreator() public view returns(address){
        return creator;
    }
}