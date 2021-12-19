function web3_connect(data){
    return {type:"WEB3_CONNECT", data}
}
function metamask_connect(data){
    return {type:"METAMASK_CONNECT", data}
}

function init_contract_nft(data){
    return{type: "INIT_CONTRACT_NFT", data}
}
function init_contract_market(data){
    return{type: "INIT_CONTRACT_MARKET", data}
}
function init_contract_infura_market(data){
    return{type: "INIT_CONTRACT_INFURA_MARKET", data}
}
function get_balance(data){
    return{type: "GET_BALANCE", data}
}



module.exports = {web3_connect, metamask_connect,get_balance,
    init_contract_nft,init_contract_market,init_contract_infura_market}