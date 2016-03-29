function clickHandler(e) {
    chrome.tabs.create({url: "http://ec2-52-205-254-238.compute-1.amazonaws.com:8080/ScanningService/scans/"});
    window.close(); // Note: window.close(), not this.close()
}

/*function clickHandler(e) {
    location.href = "http://www.baidu.com";
}*/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('checkPage').addEventListener('click', clickHandler);
});
