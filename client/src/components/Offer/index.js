import React, { Component } from 'react';
import './index.css';
import ScriptTag from 'react-script-tag';
import axios from 'axios';
import callApi from "../../utils/callApi.js";


const Offer = props => {

    function handleSubmit(event, reees) {
        event.preventDefault();
    }

    const styles = { background: 'blue', color: 'white' }
    return (
        <div className="offer-container">
            <div className="offer-img">
            </div>
        </div>


    )

    /**                <div className="offer-price">$200</div>  */
    /** boton de pago 
     * <form onSubmit={handleSubmit}>
                    <ScriptTag src="https://www.mercadopago.com.ar/integrations/v1/web-tokenize-checkout.js" data-transaction-amount="100.00" data-public-key="APP_USR-5eda9761-54c9-4f1b-8f69-3d824f3b811e" />
                </form>
                
     */
}

export default Offer;