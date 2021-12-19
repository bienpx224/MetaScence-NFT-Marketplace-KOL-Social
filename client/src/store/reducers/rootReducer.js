
const initialState = {
  web3: null,
  isLogin: false,
  account: null,
  networkId: null,
  balance: null,
  contract_nft: null,
  contract_market: null,
  contract_infura_market: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WEB3_CONNECT':
      window.state = {...state,action}
      return {
        ...state,
        web3: action.data.web3,
      };
    case 'METAMASK_CONNECT':
      window.state = {...state,action}
      return {
        ...state,
        account: action.data.account,
        networkId: action.data.networkId,
        isLogin: action.data.isLogin
      }
    case 'INIT_CONTRACT_NFT':
      window.state = {...state,action}
      return {
        ...state,
        contract_nft: action.data.contract_nft,
      };
      case 'INIT_CONTRACT_MARKET':
        window.state = {...state,action}
        return {
          ...state,
          contract_market: action.data.contract_market
        };
    case 'INIT_CONTRACT_INFURA_MARKET':
      window.state = {...state,action}
      return {
        ...state,
        contract_infura_market: action.data.contract_infura_market
      };
    case 'GET_BALANCE':
      return {
        ...state,
        balance: action.data.balance
      };
    default:
      return state;
  }
};

export default rootReducer;
