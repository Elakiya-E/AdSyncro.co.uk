// CONFIGURATION: Do not change these
var SPREADSHEET_ID = "1jswThuUJx5NySxRNhPTWT1vyDVe0lfCcg_V5Hlt6Wn0";
var ADMIN_EMAIL = "info@adsyncro.co.uk";

/**
 * FINAL PRODUCTION SCRIPT (No Test Data)
 * 1. Click 'Deploy' -> 'New Deployment'
 * 2. Select 'Web App' -> Execute as: Me -> Access: Anyone
 * 3. Copy the URL to your website
 */

function doGet(e) {
  return ContentService.createTextOutput("AdSyncro Script is Alive");
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(15000); 

  try {
    var data = {};
    
    // Support JSON or Form data
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (f) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    if (!data || Object.keys(data).length === 0) {
      return ContentService.createTextOutput("No data received");
    }

    // 1. STORE TO SHEET
    storeDataInSheet(data);
    SpreadsheetApp.flush(); 

    // 2. SEND EMAILS
    try {
      sendEmails(data);
    } catch (err) {}

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error" }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function storeDataInSheet(data) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var isNewsletter = (data.type === 'newsletter');
  var sheetName = isNewsletter ? 'Newsletter' : 'Submissions';
  var sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
  
  // Set headers if the sheet is empty
  if (sheet.getLastRow() === 0) {
    var headers = isNewsletter 
      ? ["Timestamp", "Email", "Type"]
      : ["Timestamp", "Full Name", "Email", "Phone", "Company", "Role", "Service Interest", "Postcode", "Message", "Consent", "UTM Source", "UTM Campaign"];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#f0f0f0");
  }
  
  var row = isNewsletter 
    ? [new Date(), data.email || 'N/A', 'Newsletter']
    : [
        new Date(),
        data.fullName || data.name || 'N/A',
        data.workEmail || data.email || 'N/A',
        data.phoneNumber || data.phone || 'N/A',
        data.company || 'N/A',
        data.role || 'N/A',
        data.serviceInterest || data.interest || 'N/A',
        data.postcode || 'N/A',
        data.message || 'No message',
        data.consent ? 'Accepted' : 'N/A',
        data.utmSource || 'N/A',
        data.utmCampaign || 'N/A'
      ];
  
  sheet.appendRow(row);
}

function sendEmails(data) {
  var isNewsletter = (data.type === 'newsletter');
  var subject = isNewsletter ? "New Newsletter Subscriber" : "New Website Lead Submission";
  
  // 1. To Admin (info@adsyncro.co.uk)
  var adminBody = isNewsletter 
    ? "Someone just subscribed to the newsletter!\n\n" +
      "Email: " + (data.email || 'N/A') + "\n" +
      "Date: " + new Date().toLocaleString()
    : "You have a new lead from the website:\n\n" +
      "Name: " + (data.fullName || data.name || 'N/A') + "\n" +
      "Email: " + (data.workEmail || data.email || 'N/A') + "\n" +
      "Phone: " + (data.phoneNumber || data.phone || 'N/A') + "\n" +
      "Company: " + (data.company || 'N/A') + "\n" +
      "Interest: " + (data.serviceInterest || data.interest || 'N/A') + "\n" +
      "Message: " + (data.message || 'No message provided') + "\n\n" +
      "--- Full Details ---\n" +
      JSON.stringify(data, null, 2);

  MailApp.sendEmail(ADMIN_EMAIL, subject, adminBody);
  
  // 2. To Customer (Auto-reply)
  var userEmail = data.workEmail || data.email;
  if (userEmail && userEmail.includes('@')) {
    var userSubject = isNewsletter ? "Welcome to AdSyncro Updates!" : "Request Received - AdSyncro";
    var userBody = isNewsletter
      ? "Hello,\n\nThank you for subscribing to AdSyncro updates! You'll now be the first to hear about our latest AI marketing insights and service updates.\n\nBest regards,\nThe AdSyncro Team"
      : "Hello,\n\nWe have received your enquiry on AdSyncro. Our team will review your details and contact you within 24 hours.\n\nThank you for choosing AdSyncro,\nThe AdSyncro Team";
      
    MailApp.sendEmail(userEmail, userSubject, userBody, { name: "AdSyncro" });
  }
}
