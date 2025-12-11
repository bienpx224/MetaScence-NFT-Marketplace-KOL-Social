import React from 'react';
import ListTicketActive from './ListTicketActive';
import ListTicketOwned from './ListTicketOwned';
import Navigate from '../header/Navigate';
import MintForm from './MintForm';

const Market = () => {

  return (
    <div>
      <Navigate />
      <MintForm />
      <ListTicketActive />
      {/* <ListTicketOwned /> */}
    </div>
  )
}
export default React.memo(Market);