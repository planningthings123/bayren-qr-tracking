// BayREN QR Code Configuration
// Edit this file to change destinations or enable surveys

const QR_CONFIG = {
  qr1: {
    name: "Page 1 - Single QR",
    destination: "https://fes-prod-residential-offering.azurewebsites.net/account?clientKey=BayREN&program=BREASE&showheader=true",
    surveyEnabled: true,  // ✅ Survey ENABLED
    surveyUrl: "YOUR_GOOGLE_FORM_URL_HERE"
  },
  qr2: {
    name: "Page 2 - QR #1",
    destination: "https://risingsun.tfaforms.net/3",
    surveyEnabled: true,  // ✅ Survey ENABLED
    surveyUrl: "YOUR_GOOGLE_FORM_URL_HERE"
  },
  qr3: {
    name: "Page 2 - QR #2",
    destination: "https://fes-prod-residential-offering.azurewebsites.net/account?clientKey=BayREN&program=BREASE&showheader=true",
    surveyEnabled: true,  // ✅ Survey ENABLED
    surveyUrl: "YOUR_GOOGLE_FORM_URL_HERE"
  },
  qr4: {
    name: "Page 2 - QR #3",
    destination: "https://www.bayren.org/business/interest-eligibility",
    surveyEnabled: true,  // ✅ Survey ENABLED
    surveyUrl: "YOUR_GOOGLE_FORM_URL_HERE"
  }
};

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbwXiVjdZUW2oYelONBYBDx9cESfdo1Zg50iDpSGjye7clfIEJoJn3QsM9qLiy-ZRi1L/exec";
