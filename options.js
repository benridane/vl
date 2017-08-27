// Saves options to chrome.storage
function save_options() {
  var valu_name = document.getElementById('valu_name').value;
  localStorage.valu_name = valu_name;
  chrome.storage.sync.set({
    valu_name: valu_name,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    valu_name: ''
  }, function(items) {
    document.getElementById('valu_name').value = items.valu_name;
    localStorage.valu_name = items.valu_name
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
