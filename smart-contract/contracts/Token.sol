// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

error TOTALCAP_EXCEED();

contract Token is ERC20 {
    uint internal totalCap;
    uint internal totalTokenMinted;
    address internal creator;

    mapping (address => bool) internal whiteListed;

    modifier onlyAllowList(){
        require(whiteListed[msg.sender] || msg.sender == creator,"not allowed");
        _;
    }

    constructor(address _creator, string memory _name, string memory _symbol, uint _totalCap, uint _initialMint, address[] memory _whiteListAddresses) ERC20(_name, _symbol) {
        totalCap = _totalCap;
        totalTokenMinted = _initialMint;
        creator = _creator;
        require(totalTokenMinted <= totalCap,"Limit exceed");
        _mint(_creator, totalTokenMinted);

        for(uint i=0; i < _whiteListAddresses.length; i++){
            whiteListed[_whiteListAddresses[i]] = true;
        }
    }

    function mint(address _to, uint256 _amount) public onlyAllowList {
        if(totalTokenMinted + _amount > totalCap){
            revert TOTALCAP_EXCEED();
        }
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