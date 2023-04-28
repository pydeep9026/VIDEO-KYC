import React, { useState } from "react";
import Header from "./header";

function PaymentPage() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccessful(true);
    }, 3000);
  };

  return (
    <>
        <Header />
    <div className="paymentpage" >
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            required
            onChange={handleCardNumberChange}
          />
        </div>
        <div>
          <label htmlFor="cardName">Card Name:</label>
          <input
            type="text"
            id="cardName"
            value={cardName}
            required
            onChange={handleCardNameChange}
          />
        </div>
        <div>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="text"
            id="expiryDate"
            value={expiryDate}
            required
            onChange={handleExpiryDateChange}
          />
        </div>
        <div>
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            required
            onChange={handleCvvChange}
          />
        </div>
        <button type="submit">{isLoading ? "Loading..." : "Pay Now"}</button>
      </form>
      {isSuccessful && <p>Payment successful!</p>}
    </div>
    </>
  );
}

export default PaymentPage;
