/* global $, Stripe, StripeResponseHandler */
// Document ready
$(document).on('turbolink:load', function(){
  var theForm = $('#pro-form');
  var submitBtn = $('#form-signup-btn');
  // Set Stripe public key
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  // When user clicks form submit button
  submitBtn.click(function(event){
    //Prevent default submission behavior
    event.preventDefault();
    // Collect Card Infomation from Fields
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
    // Send the card info to Stripe
    // Request a token from Stripe
    Stripe.card.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, StripeResponseHandler);
  });
  
});