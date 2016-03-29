$("body").append('Test1');
console.log("1")
var url = new Object();
url.target_urls = ["http://testphp.vulnweb.com"];
//alert(JSON.stringify(url));

function continueExecution()
{
   ;//finish doing things after the pause
}

function doStuff()
{
  //do some things
  setTimeout(continueExecution, 1000) //wait one second before continuing
}

function ThirdMethod(id)
{   var json;
	console.log("4")
	//alert("stopped");
	var url = "http://ec2-52-201-228-32.compute-1.amazonaws.com/scans/"+id+"/kb";
	//alert(url);
  $.ajax
   ({
      type: "GET",//"POST",
      //the url where you want to sent the userName and password to
      //url: 'http://ec2-52-201-228-32.compute-1.amazonaws.com/scans/0/kb',
	  url: url,
	  //http://ec2-52-201-228-32.compute-1.amazonaws.com/scans/
      //json object to sent to the authentication url
      contentType: "application/json",
      success: function (data) {
	   alert(data);
	   //chrome.storage.local.set({data: data});
       console.log("5");
	   json = JSON.parse(data);
	   //alert(json);
	   length=json.items.length;
	   //var url = new Object();
       //url.data = "length";
	   chrome.runtime.sendMessage({method:'setTitle',title:data});
	   //alert(url);
	   
}  
   })
}



function OnSucess(id) {
	//alert(data);
	var status=" ";
	var id=id;
	var json=1;
	var length=0;
   var jsonData = '{"target_urls":["https://baidu.com"]}';
  $.ajax
   ({
      type: "GET",//"POST",
      //the url where you want to sent the userName and password to
      url: 'http://ec2-52-201-228-32.compute-1.amazonaws.com/scans',
	  //http://ec2-52-201-228-32.compute-1.amazonaws.com/scans/
      //json object to sent to the authentication url
      contentType: "application/json",
      success: function (data) {
	   //alert(data);
       console.log("3");
	   json = JSON.parse(data);
	   //alert(json);
	   length=json.items.length;
	   
	   for(i=0;i<length;i++)
	   {
		   if(id==json.items[i].id)
			   status=json.items[i].status;
	   }
	   while(status=="Running")
	   {
		   doStuff();
		   OnSucess(id);
	   }
	   if (status="Stopped")
	   {
		   ThirdMethod(id);   
	   }
	   
	       //while(status=="Stopped")
	   
	   //status=json.status;
	   //alert(status);
	   
      },
      error: function(XMLHttpRequest, textStatus, errorThrown)  {
      	alert("Status: " + XMLHttpRequest.status); alert("Error: " + XMLHttpRequest.responseText); 
      }
  })	
}

function authenticate() {
	var json=1;
	var id=1;
   //var jsonData = '{"target_urls":["http://www.1point3acres.com/bbs/"]}';
  $.ajax
   ({
      type: "POST",
      //the url where you want to sent the userName and password to
      url: 'http://ec2-52-201-228-32.compute-1.amazonaws.com/scans/',
	  //http://ec2-52-201-228-32.compute-1.amazonaws.com/scans/
      //json object to sent to the authentication url
      data:JSON.stringify(url),
      contentType: "application/json",
      success: function (data) {
       //alert("Thanks!"); 
	   //alert(data);
	   //console.log(data);
	   //json=;
	   json = JSON.parse(data);
	   id =json.id;
	   OnSucess(id);
	   //alert(id);
       console.log("2");
	   
      },
      error: function(XMLHttpRequest, textStatus, errorThrown)  {
      	alert("Status: " + XMLHttpRequest.status); alert("Error: " + XMLHttpRequest.responseText); 
      }
  })
  //alert(json);
}


/*function authenticate() {
	var json;
   var jsonData = '{"target_urls":["http://baidu.com"]}';
  $.ajax
   ({
      type: "GET",//"POST",
      //the url where you want to sent the userName and password to
      url: 'https://www.googleapis.com/freebase/v1/text/en/bob_dylan',
	  //http://ec2-52-201-228-32.compute-1.amazonaws.com/scans/
      //json object to sent to the authentication url
      //data:JSON.stringify(url),
      contentType: "application/json",
      success: function (data) {
       alert("Thanks!"); 
	   alert(data);
	   json=data.result;
       console.log("1");
	   
      },
      error: function(XMLHttpRequest, textStatus, errorThrown)  {
      	alert("Status: " + XMLHttpRequest.status); alert("Error: " + XMLHttpRequest.responseText); 
      }
  })
  alert(json);
 return json;}*/

authenticate();
