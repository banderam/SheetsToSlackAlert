function onEdit(e){
  var range = e.range;
  var intCol = range.getColumn();                               // Get column number of edited cell
  var value = range.getValue();                                 // Get value of edited cell

  if (intCol == 3 && value < 0){                                // Check if column edited is Column C and if the value is <0
    var intRow = range.getRow();                                // Get the row number of the edited cell
    var sheet = SpreadsheetApp.getActiveSheet();
    var dataRange = sheet.getRange(intRow, 4, 1, 1);            // Select a cell in columns D on same row as the edited cell
    var dataValue = dataRange.getValue();                       // Get the value of the referenced cell and store it. This is the alert's message
    
    // Iplementing Slack process
    let payload = buildAlert(dataValue);
    sendAlert(payload);
  }
}

function buildAlert(dataValue) {
  let msg = dataValue;
    
  let payload = {
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": msg
        }
      }
    ]
  };
  return payload;
}

function sendAlert(payload) {
  const webhook = //" *** PASTE SLACK WEBHOOK HERE *** "//;
  var options = {
    "method": "post", 
    "contentType": "application/json", 
    "muteHttpExceptions": true, 
    "payload": JSON.stringify(payload) 
  };
  
  try {
    UrlFetchApp.fetch(webhook, options);
  } catch(e) {
    Logger.log(e);
  }
}
