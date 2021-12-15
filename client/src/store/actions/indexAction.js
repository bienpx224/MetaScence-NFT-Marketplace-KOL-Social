function web3_connect(data){
    return {type:"WEB3_CONNECT", data}
}
function metamask_connect(data){
    return {type:"METAMASK_CONNECT", data}
}

function init_contract(data){
    return{type: "INIT_CONTRACT", data}
}
function init_contract_infura(data){
    return{type: "INIT_CONTRACT_INFURA", data}
}

module.exports = {web3_connect, metamask_connect,init_contract, init_contract_infura}