// Saves options to chrome.storage
function save_options() {
  var red = document.getElementById('red').value;
  var blue = document.getElementById('blue').value;
  var green = document.getElementById('green').value;
  chrome.storage.sync.set(
    {
      'redPattern': red,
      'bluePattern': blue,
      'greenPattern': green,
    }, function() {
      // TODO: Consider showing success indicator reprocess DOM
    }
  );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get(
    {
      'redPattern': '',
      'bluePattern': '',
      'greenPattern': '(twitter|google|facebook|fb)\.com'
    }, function(items) {
      document.getElementById('red').value = items.redPattern;
      document.getElementById('blue').value = items.bluePattern;
      document.getElementById('green').value = items.greenPattern;
    }
  );
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
  save_options);