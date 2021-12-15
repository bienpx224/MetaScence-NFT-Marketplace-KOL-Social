import {store} from 'react-notifications-component'
export function subscribeMetaTransaction(web3){
    web3.eth.subscribe('pendingTransactions', ()=>{
            console.log("Pending transaction .... ")
    } )
}

export function showNotification(type, title, message){
    store.addNotification({
        title,
        message,
        type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true
        }
      });
}