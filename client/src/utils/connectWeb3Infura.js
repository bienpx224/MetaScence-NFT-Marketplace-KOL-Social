import Web3 from "web3";
import { WSS_INFURA } from "./constant";
function connectWeb3Infura(){
    var provider = new Web3.providers.WebsocketProvider(WSS_INFURA)
    var web3_infura = new Web3(provider)
    return web3_infura;
}

export default connectWeb3Infura;