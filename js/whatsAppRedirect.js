function redirectToWhatsApp() {
  var phoneNumber = "+9047555511";

  // Construct the WhatsApp link
  var whatsappLink = "https://wa.me/" + phoneNumber;

  // Redirect to the WhatsApp link
  window.location.href = whatsappLink;
}
