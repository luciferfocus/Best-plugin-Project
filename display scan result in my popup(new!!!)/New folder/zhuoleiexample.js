$("body").append('Test1');
console.log("2")
function authenticate() {
   var jsonData = {"target_urls": ["http://www.baidu.com"]};
   $.ajax
   ({
      type: "POST",
      //the url where you want to sent the userName and password to
      url: 'http://ec2-52-201-228-32.compute-1.amazonaws.com/scans/',
      //json object to sent to the authentication url
      data:jsonData,
	  dataType: "json",
	  crossDomain: true,
      success: function () {
       alert("Thanks!"); 
       console.log("1");
      },
      error: function(XMLHttpRequest, textStatus, errorThrown)  {
      	alert("Status: " + XMLHttpRequest.status); alert("Error: " + XMLHttpRequest.responseText); 
      }
  })
}
authenticate();
