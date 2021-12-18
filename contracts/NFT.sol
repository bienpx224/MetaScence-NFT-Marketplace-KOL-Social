// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    address admin;
    constructor() ERC721("MetaNFT", "MST"){
        admin = msg.sender;
    }

    struct Token{
        string name;
        address owner;
    }
    uint private _tokenId = 0;
    mapping(uint => Token) tokens;

    function getOwner() external view returns(address){
        return admin;
    }

    function mint(address _owner, string memory name, uint32 amount) external {
        require(amount > 0, "Amount not equal 0");
        require(amount < 10000, "Amount not greater than 10000");
        // require(msg.sender == admin);
        for(uint32 i = 0; i<= amount-1; i++){
            _tokenId++;
            Token memory token = Token(
                name,_owner
            );
            tokens[_tokenId] = token;
            _mint(_owner, _tokenId);
        }
    }

    function getNumberTokens() external view returns(uint ){
        return _tokenId;
    }

    function getTokenById(uint id) external view returns(Token memory){
        return tokens[id];
    }

}