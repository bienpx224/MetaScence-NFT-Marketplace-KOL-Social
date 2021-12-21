import React from 'react';
import ListTicketActive from './ListTicketActive';
import ListTicketOwned from './ListTicketOwned';
import Navigate from '../header/Navigate';

const Market = () => {

  return (
    <div>
      <Navigate />
      <ListTicketActive />
      {/* <ListTicketOwned /> */}
    </div>
  )
}
export default React.memo(Market);