
const initialState = {
  web3: null,
  isLogin: false,
  account: null,
  networkId: null,
  balance: null,
  contract: null,
  contract_infura: null
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
    case 'INIT_CONTRACT':
      window.state = {...state,action}
      return {
        ...state,
        contract: action.data.contract
      };
    case 'INIT_CONTRACT_INFURA':
      window.state = {...state,action}
      return {
        ...state,
        contract_infura: action.data.contract_infura
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
