// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "./@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract Market{
    enum ListingStatus {
        Active,
        Sold,
        Cancelled
    }
    //. 20000000000000000
    struct Listing{
        ListingStatus status;
        address seller;
        address token;
        uint tokenId;
        uint256 price;
    }

    event Listed(uint listingId, address seller, address token, uint tokenId, uint price);
    event Sale(uint listingId, address buyer, address token, uint tokenId, uint price);
    event Cancel(uint listingId, address seller);

    uint private _listingId = 0;
    mapping(uint => Listing) private _listings;

    function listToken(address token, uint tokenId, uint256 price) external {
        IERC721(token).transferFrom(msg.sender, address(this), tokenId);
        Listing memory listing = Listing(
            ListingStatus.Active,
            msg.sender,
            token, 
            tokenId,
            price
        );

        _listingId++;

        _listings[_listingId] = listing;

        emit Listed(_listingId, msg.sender, token, tokenId, price);
    }

    function getListing(uint listingId) external view returns(Listing memory){
        return _listings[listingId];
    }

    function getAmoutListing() external view returns(uint ){
        return _listingId;
    }

    function buyToken(uint listingId) external payable{
        Listing storage listing = _listings[listingId];

        require(msg.sender != listing.seller, "Seller cannot be buyer");
        require(listing.status == ListingStatus.Active, "Listing is not active");

        require(msg.value >= listing.price, "Insufficient paymen");

        listing.status = ListingStatus.Sold;

        IERC721(listing.token).transferFrom(address(this), msg.sender, listing.tokenId);
        
        payable(listing.seller).transfer(listing.price);

        emit Sale(listingId, msg.sender, listing.token, listing.tokenId, listing.price);

    }

    function cancel(uint listingId) public {
        Listing storage listing = _listings[listingId];

        require(msg.sender == listing.seller, "only seller can cancel listing");
        require(listing.status == ListingStatus.Active, "Listing is not active");

        listing.status = ListingStatus.Cancelled;

        IERC721(listing.token).transferFrom(address(this), msg.sender, listing.tokenId);
        
        emit Cancel(listingId, msg.sender);
    }

    function getArrListing() external view returns(Listing[] memory ){
        Listing[] memory result = new Listing[](_listingId);
        uint counter = 0;
        for(uint i=0; i < _listingId; i++){
            if(_listings[i].status == ListingStatus.Active){
                result[counter] = _listings[i];
                counter++;
            }
        }
        return result;
    }
    function getArrListingNotMe() external view returns(uint[] memory ){
        uint[] memory result = new uint[](_listingId);
        uint counter = 0;
        for(uint i=0; i < _listingId; i++){
            if(_listings[i].status == ListingStatus.Active){
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }
}