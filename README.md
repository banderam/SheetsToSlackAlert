# SheetsToSlackAlert

A Google Apps Script that sends alert messages on Slack every time a value in a cell match a specific condition.

---

This work is based on a [blog post](https://www.august.com.au/blog/how-to-send-slack-alerts-from-google-sheets-apps-script/) from <https://www.august.com.au/>, which I have altered and adapted to meet my use case.

---

### Working Principle
The script works on a Google Sheet and it's triggered every time a cell is edited.
When a cell in the Sheet is edited, the following operations are executed:
1. Get the column and value of the edited cell
2. Check if the edited cell is inside a target column (Column 3 in the sample Sheet) & check if the value meet a specific condition (<0 in the sample Sheet)
3. If both conditions are met, retrieves the value of a cell on the same row but a different column
4. Sends an alert on Slack. the alert message is the value of the cell retrieved in step 3. above

---

### How to use the script

A sample Sheet can be found here: https://tinyurl.com/56kxtf36

If you copy/paste the script from [here](https://github.com/banderam/SheetsToSlackAlert/blob/main/sheetToSlack.gs), make sure to set an "OnEdit" trigger from the [App Script menu](https://developers.google.com/apps-script/guides/triggers/installable).
