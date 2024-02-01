window.makePhoneCall = function (phoneNumber) {
    // Use window.location to initiate the phone call
    window.location.href = 'tel:' + phoneNumber;
};
