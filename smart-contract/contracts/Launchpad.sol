// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./Token.sol";
import "./NFT.sol";

error ONLY_ONWER_CAN_CALL();
error SEND_SUFFICIENT_ETH();

contract LaunchPad {

    uint private totalCap;
    uint private initialTokenMinted;
    address private creator;

    // LaunchPad contract onwer
    address private launchPadOwner;

    // number of Tokens Created
    uint256 private numOfTokensCreated;

    // number of NFT Created
    uint256 private numOfNftCreated;

    // Amount to pay to create token
    uint256 private tokenCreationPrice;

    // Cap for Maximum NFT Minted
    uint256 private nftMaxSupply;

    // events
    event CreateNewNft(string uri, uint supply, uint nftPrice, address factoryContractAddress, address indexed nftAddress);
    event WithdrawMoney(address withdrawAddress, uint amount);

    /**
     * @notice struct to store all the data of NFT ( string uri, uint supply, uint nftPrice) and launchPadOwner(address launchPadOwner) contract
     */
    struct NftStruct {
        string uri;
        uint supply;
        uint nftPrice;
        address launchPadAddress;
        address creator;
    }

    // struct to store all the data of Token and LaunchPad contract
    struct TokenStruct {
        address launchPadAddress;
        address tokenAddress;
        address creator;
        string name;
        string symbol;
        bool wantTotalCap;
        uint totalCap;
        bool wantInitialMint;
        uint initialMint;
        address[] whiteListAddresses;
    }

    // searching the struct data of Token and LaunchPad using creator address
    mapping(address => TokenStruct[]) public allTokenData;

    /**
     * @notice searching the struct data of NFT and LaunchPad using owner address
     */
    mapping(address => NftStruct) public allNftData;

    // creator address to check the addresses of token created
    // creator => token addresses
    mapping(address => address[]) public tokenAddresses;

    // creator address to check the addresses of nft created
    // creator => NFT addresses
    mapping(address => address[]) public nftAddresses;

    // modifier to allow onwer to call the function
    modifier onlyOwner() {
        if(msg.sender != launchPadOwner){
            revert ONLY_ONWER_CAN_CALL();
        }
        _;
    }

    /**
     * @dev constructor to get the owner address of this contract factory
     */
    constructor(address _launchPadOwner, uint256 _tokenCreationPrice) {
        launchPadOwner = _launchPadOwner;
        tokenCreationPrice = _tokenCreationPrice;
    }

    /**
     * @dev function to create the contract MultiSigWallet
     */
    function CreateToken(address _creator, string memory _name, string memory _symbol, bool _wantTotalCap, uint _totalCap, bool _wantInitialMint, uint _initialMint, address[] memory _whiteListAddresses) payable public {
        if(msg.value < tokenCreationPrice){
            revert SEND_SUFFICIENT_ETH();
        }

        totalCap = _totalCap;
        initialTokenMinted = _initialMint;
        if(_wantTotalCap == false){
            totalCap = type(uint256).max;
        }

        if(_wantInitialMint == false ){
            initialTokenMinted = 0;
        }
        
        // Create a new Wallet contract
        Token token =  new Token(
            _creator,
            _name,
            _symbol,
            totalCap,
            initialTokenMinted,
            _whiteListAddresses
        );
        // Increment the number of Tokens Created
        ++numOfTokensCreated;

        // Add token data to the mapping
        allTokenData[_creator].push(
            TokenStruct(
            address(this),
            address(token),
            _creator,
            _name,
            _symbol,
            _wantTotalCap,
            totalCap,
            _wantInitialMint,
            initialTokenMinted,
            _whiteListAddresses
            )
        );


        // search the profile by using creator address
        // Solidity mappings with array type keys are not a good idea to use in practice, 
        // as the key data is stored in the contract storage and it will consume a lot of storage and gas cost.
        tokenAddresses[_creator].push(address(token));
    }

    /**
     * @dev : function to create new course and course address on searchBy Address
     * @param _uri : NFT URI
     * @param _maxSupply : Total supply of NFTs
     * @param _nftPrice : Price of the NFT
     * @param _creatorAddress : Address of the Creator
     */
    function createNFT(string memory _uri, uint256 _maxSupply , bool _wantMaxSupply, uint _nftPrice, address _creatorAddress) public {
        nftMaxSupply = _maxSupply;

        if(_wantMaxSupply == false){
            nftMaxSupply = type(uint256).max;
        }

        NFT nft = new NFT(
            _uri,
            nftMaxSupply,
            _nftPrice,
            address(this),
            _creatorAddress
        );
    
        // Increment the number of NFT
        ++numOfNftCreated;

        // emit CreateNewCourse event
        emit CreateNewNft(_uri, _maxSupply, _nftPrice, address(this), _creatorAddress);

        // Add the new NFT to the mapping
        allNftData[_creatorAddress] = (
            NftStruct(
                _uri,
                _maxSupply,
                _nftPrice,
                address(this),
                _creatorAddress
            )
        );
        
        // search the profile by using creator address
        nftAddresses[_creatorAddress].push(address(nft));
    }

    /**
     * @dev function to set new onwer
     * @param _newOnwer address of new onwer
     */
    function setNewOwner(address _newOnwer) public onlyOwner {
        launchPadOwner = _newOnwer;
    }

    function setNewPrice(uint256 _newTokenCreationPrice) public onlyOwner{
        tokenCreationPrice =  _newTokenCreationPrice;
    }

    // function to withdraw the funds from Launchpad contract
    function withdraw(uint256 _amount, address _receiver) external payable onlyOwner{
        if(msg.sender != launchPadOwner){
            revert ONLY_OWNER_CAN_CALL();
        }
       
        if(address(this).balance < _amount){
            revert NOT_ENOUGH_BALANCE();
        }

        (bool success, ) = _receiver.call{value: _amount}("");
        if(!success){
            revert TRANSFER_FAILED();
        }
    }


    // get the address of Launchpad contract
    function getAddressOfLaunchpadContract() public view returns (address) {
        return address(this);
    }

    // get the address of Launchpad contract owner
    function getAddressOfLaunchpadOwner() public view returns (address) {
        return launchPadOwner;
    }

    // get all the wallet addresses deployed by creator address
    function getTokensCreatedByCreator(address _creatorAddress) public view returns(address[] memory){
        return tokenAddresses[_creatorAddress];
    }

    // get the total token minted
    function getTotalToken() public view returns(uint){
        return numOfTokensCreated;
    }

    // get the price of the token
    function getTokenCreationPrice() public view returns(uint){
        return tokenCreationPrice;
    }

    // get the number of NFT Created
    function getNftCreated() public view returns(uint){
        return numOfNftCreated;
    }

    // receive function is used to receive Ether when msg.data is empty
    receive() external payable {}

    // Fallback function is used to receive Ether when msg.data is NOT empty
    fallback() external payable {}
}