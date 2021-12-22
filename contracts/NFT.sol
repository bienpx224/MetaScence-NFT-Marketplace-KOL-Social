// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    address admin;
    constructor() ERC721("MetaTicket", "MTicket"){
        admin = msg.sender;
    }

    struct Token{
        uint groupId;
        uint tokenId;
        string name;
        string singer;
        string place;
        string time;
        string img;
        address mintedBy;
        address currentOwner;
        address previousOwner;
    }
    string private constant IMAGE = "https://www.levisstadium.com/wp-content/uploads/2014/11/TSwiftSmall-11-03-14.jpg";
    uint private _tokenId = 0;
    uint private _groupId = 0;

    mapping(uint => Token) tokens;
    mapping(address => mapping(uint=>Token)) ownerToTokens;

    function getOwner() external view returns(address){
        return admin;
    }

    function mint(address _owner, string memory name, string memory singer, string memory place, string memory time, string memory img, uint32 amount) external {
        require(amount > 0, "Amount not equal 0");
        require(amount < 10000, "Amount not greater than 10000");
        require(msg.sender == admin);
        _groupId++;
        for(uint32 i = 0; i<= amount-1; i++){
            _tokenId++;
            Token memory token = Token(
                _groupId,
                _tokenId,
                name,
                singer,
                place,
                time,
                img,
                msg.sender,
                msg.sender,
                address(0)
            );
            tokens[_tokenId] = token;
            ownerToTokens[msg.sender][_tokenId] = token;
            _mint(_owner, _tokenId);
        }
        setApprovalForAll(address(this), true);
    }

    function getNumberTokens() external view returns(uint ){
        return _tokenId;
    }

    function getTokenById(uint id) external view returns(Token memory){
        return tokens[id];
    }

    function getTokensOwner() external view returns(Token[] memory ){
        uint length = _tokenId;
        Token[] memory listToken = new Token[](length);
        uint counter = 0;
        for(uint i=0; i < length; i++){
            if(ownerToTokens[msg.sender][i].currentOwner == msg.sender){
                listToken[counter] = ownerToTokens[msg.sender][i];
                counter ++;
            }
        }
        return listToken;
    }

    function getTokensById(uint[] memory _arrId) external view returns(Token[] memory){
        Token[] memory rs = new Token[](_arrId.length);
        uint counter = 0;
        for(uint i=0; i<= _arrId.length-1; i++){
            rs[counter] = (tokens[_arrId[i]]);
            counter ++ ;
        }
        return rs;
    }

}