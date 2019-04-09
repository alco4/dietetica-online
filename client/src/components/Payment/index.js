import React, { Component } from 'react';

class Payment extends Component {

  constructor(props) {
    super(props)
    this.state = {
      docTypes: [],
      paymentMethodId:''

    }
    this.docTypesHandler = this.docTypesHandler.bind(this);
    this.setPaymentMethodInfo = this.setPaymentMethodInfo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  componentDidMount() {
    window.Mercadopago.getIdentificationTypes(this.docTypesHandler)
    window.Mercadopago.getPaymentMethod({
      "bin": "455075"
  }, this.setPaymentMethodInfo);
  }
  docTypesHandler(status, docTypesResp) {
    this.setState({
      docTypes: docTypesResp
    })
    return docTypesResp;
  }


  setPaymentMethodInfo(status, resp) {
  this.setState({
    paymentMethodId:resp[0].id
  })


}
sdkResponseHandler(status, response){
  var form = document.querySelector('#pay');
  var card = document.createElement('input');
  card.setAttribute('name', 'token');
  card.setAttribute('type', 'hidden');
  card.setAttribute('value', response.id);
  form.appendChild(card);
//  form.submit();
}
handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  window.Mercadopago.createToken(data, this.sdkResponseHandler)
}

  render() {
  //  window.addEvent(document.querySelector('#pay'), 'submit', this.handleSubmit);

   console.log(this.state.docTypes[0])
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit} method="post" id="pay" name="pay" >
          <fieldset>
            <ul>
              <li>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value="test_user_19653727@testuser.com" type="email" placeholder="your email" />
              </li>
              <li>
                <label htmlFor="cardNumber">Credit card number:</label>
                <input type="text" id="cardNumber" data-checkout="cardNumber" placeholder="4509 9535 6623 3704" onselectstart="return false" onPaste={() => false} onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autoComplete='off' />
              </li>
              <li>
                <label htmlFor="securityCode">Security code:</label>
                <input type="text" id="securityCode" data-checkout="securityCode" placeholder="123" onselectstart="return false" onPaste={() => false} onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autoComplete='off' />
              </li>
              <li>
                <label htmlFor="cardExpirationMonth">Expiration month:</label>
                <input type="text" id="cardExpirationMonth" data-checkout="cardExpirationMonth" placeholder="12" onselectstart="return false" onPaste={() => false} onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autoComplete='off' />
              </li>
              <li>
                <label htmlFor="cardExpirationYear">Expiration year:</label>
                <input type="text" id="cardExpirationYear" data-checkout="cardExpirationYear" placeholder="2015" onselectstart="return false" onPaste={() => false} onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" autoComplete='off' />
              </li>
              <li>
                <label htmlFor="cardholderName">Card holder name:</label>
                <input type="text" id="cardholderName" data-checkout="cardholderName" placeholder="APRO" />
              </li>
              
              <li>
                <label htmlFor="docType">Document type:</label>
                <select id="docType" data-checkout="docType">
                {this.state.docTypes.map((doc)=>{
                   return <option key={doc['id']}> {doc['id']} </option>
                })}
                 

                </select>


              </li>
              <li>
                <label htmlFor="docNumber">Document number:</label>
                <input type="text" id="docNumber" data-checkout="docNumber" placeholder="12345678" />
              </li>
            </ul>
            <input type="hidden" name="paymentMethodId" value={this.state.paymentMethodId} />
            <input type="submit" value="Pay!" />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Payment;