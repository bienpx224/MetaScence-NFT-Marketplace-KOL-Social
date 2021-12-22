// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./NFT.sol";

contract Market is NFT{
    enum ListingStatus {
        Active,
        Sold,
        Cancelled
    }
    //. 2000000000000000
    struct Listing{
        ListingStatus status;
        uint listingId;
        address seller;
        address token;
        uint tokenId;
        uint256 price;
    }

    event Listed(uint listingId, address seller, address token, uint tokenId, uint price);
    event Sale(uint listingId, address buyer, address token, uint tokenId, uint price);
    event Cancel(uint listingId, address seller);

    uint private _listingId = 1;
    mapping(uint => Listing) private _listings;

    function MlistToken( uint tokenId, uint256 price) external {
        transferFrom(msg.sender, address(this), tokenId);
        Listing memory listing = Listing(
            ListingStatus.Active,
            _listingId,
            msg.sender,
            address(this), 
            tokenId,
            price
        );


        _listings[_listingId] = listing;

        _listingId++;

        emit Listed(_listingId, msg.sender, address(this), tokenId, price);
    }

    function MlistTokenOnePrice( uint[] memory _listTokenId, uint price) external {
        for(uint i=0; i<= _listTokenId.length-1; i++){
            transferFrom(msg.sender, address(this), _listTokenId[i]);
            Listing memory listing = Listing(
                ListingStatus.Active,
                _listingId,
                msg.sender,
                address(this), 
                 _listTokenId[i],
                price
            );
            _listings[_listingId] = listing;
            _listingId++;

            emit Listed(_listingId, msg.sender, address(this), _listTokenId[i], price);
        }
        
    }

    function MgetListing(uint listingId) external view returns(Listing memory){
        return _listings[listingId];
    }

    function MgetAmoutListing() external view returns(uint ){
        return _listingId;
    }

    function MbuyToken(uint listingId) external payable{
        Listing storage listing = _listings[listingId];

        require(msg.sender != listing.seller, "Seller cannot be buyer");
        require(listing.status == ListingStatus.Active, "Listing is not active");

        require(msg.value >= listing.price, "Insufficient paymen");

        listing.status = ListingStatus.Sold;

        IERC721(listing.token).transferFrom(address(this), msg.sender, listing.tokenId);
        
        payable(listing.seller).transfer(listing.price);
        
        Token memory token = tokens[listing.tokenId];
        token.currentOwner = msg.sender;
        token.previousOwner = listing.seller;
        ownerToTokens[msg.sender][listing.tokenId] = token;
        delete ownerToTokens[listing.seller][listing.tokenId];

        emit Sale(listingId, msg.sender, listing.token, listing.tokenId, listing.price);

    }

    function Mcancel(uint listingId) external {
        Listing storage listing = _listings[listingId];

        require(msg.sender == listing.seller, "only seller can cancel listing");
        require(listing.status == ListingStatus.Active, "Listing is not active");

        listing.status = ListingStatus.Cancelled;

        IERC721(listing.token).transferFrom(address(this), msg.sender, listing.tokenId);
        
        emit Cancel(listingId, msg.sender);
    }

    function MgetArrListing() external view returns(Listing[] memory ){
        Listing[] memory result = new Listing[](_listingId);
        uint counter = 0;
        for(uint i=0; i < _listingId; i++){
            if(_listings[i].status == ListingStatus.Active && _listings[i].seller != address(0)){
                result[counter] = _listings[i];
                counter++;
            }
        }
        return result;
    }
    function MgetArrListingOwner() external view returns(Listing[] memory ){
        Listing[] memory result = new Listing[](_listingId);
        uint counter = 0;
        for(uint i=0; i < _listingId; i++){
            if(_listings[i].status == ListingStatus.Active && _listings[i].seller == msg.sender){
                result[counter] = _listings[i];
                counter++;
            }
        }
        return result;
    }
    function MgetArrListingAll() external view returns(uint[] memory ){
        uint[] memory result = new uint[](_listingId);
        uint counter = 0;
        for(uint i=0; i < _listingId; i++){
            if( _listings[i].seller != address(0)){
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }
}