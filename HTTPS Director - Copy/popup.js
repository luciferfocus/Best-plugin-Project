document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://127.0.0.1:5000/scans/';
      f.method = 'post';
	  //window.open('http://www.baidu.com');
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = {'scan_profile': file('profiles/last_scan.w3af').read(),
        'target_urls': ['http://testphp.vulnweb.com']};
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
}, false);