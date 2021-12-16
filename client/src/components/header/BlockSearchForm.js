import React, { useState } from 'react';
var BlockSearchForm = () => {

    return (

        <div className="block-search-form">
        <div className="block-content">
          <div className="container">
            {/*end of row*/}
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <form method="get">
                  <div className="card  bg-red ">
                    <div className="card-body  row no-gutters align-items-center">
                      <div className="col-auto">
                        <i className="icon-search" />
                      </div>
                      {/*end of col*/}
                      <div className="col">
                        <input className="form-control form-control-lg form-control-border0" placeholder="Type a keywords..." type="search" />
                      </div>
                      {/*end of col*/}
                      <div className="col-auto">
                        <button type="submit" className="btn  btn-primary uppercase border-3">
                          Search now</button>
                      </div>
                      {/*end of col*/}
                    </div>
                  </div>
                </form>
              </div>
              {/*end of col*/}
            </div>
            {/*end of row*/}
          </div>
        </div>
      </div>
    );
}
 export default BlockSearchForm

