document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let cardNumber = document.getElementById('cardNumber').value;
    let cardHolder = document.getElementById('cardHolder').value;
    let expiryDate = document.getElementById('expiryDate').value;
    let cvv = document.getElementById('cvv').value;

    if (validateForm(cardNumber, cardHolder, expiryDate, cvv)) {
        document.getElementById('message').innerText = 'Payment Successful!';
        document.getElementById('message').style.color = 'green';
        document.getElementById('successSound').play();
    } else {
        document.getElementById('message').innerText = 'Invalid Details!';
        document.getElementById('message').style.color = 'red';
    }
});

function validateForm(cardNumber, cardHolder, expiryDate, cvv) {
    // Basic validation checks
    let cardNumberPattern = /^\d{16}$/;
    let cardHolderPattern = /^[a-zA-Z\s]+$/;
    let expiryDatePattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    let cvvPattern = /^\d{3,4}$/;

    return cardNumberPattern.test(cardNumber) &&
           cardHolderPattern.test(cardHolder) &&
           expiryDatePattern.test(expiryDate) &&
           cvvPattern.test(cvv);
}
