//document.addEventListener('DOMContentLoaded', function() {
	//chrome.tabs.getSelected(null, function(tab) {
//$("body").append('Test1');
console.log("1");
var url = new Object();
//url.target_urls = ["http://testphp.vulnweb.com"];
var host = "http://"+window.location.hostname;
//""alert(host);
url.target_urls = [host];
//alert(JSON.stringify(url));


/*function reload()
{
	
document.location.reload(true);
}*/


function continueExecution()
{
   ;//finish doing things after the pause
}

function doStuff()
{
  //do some things
  setTimeout(continueExecution, 1000) //wait one second before continuing
}



/*function reload()
{
	location.reload();
	doStuff();
    reload();
}*/





function ThirdMethod(id)
{   var json;
	console.log("4");
	//alert("stopped");
	//alert(id);
	var url = "http://ec2-52-205-254-238.compute-1.amazonaws.com/scans/"+id+"/kb";
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
	   //alert(data);
	   //chrome.storage.local.set({data: data});
       
	   json = JSON.parse(data);
	   //alert(json);
	   length=json.items.length;
	   //alert(length);
	   //var url = new Object();
       //url.data = "length";
	   chrome.runtime.sendMessage({method:'setTitle',title:data});
	   console.log("5");
	   alert("Finish the scan work!!!please click the popup button");	
	   //alert(url);
	   
}  
   })
}

function Getback(id) {
	//alert(data);
	var status="Running";
	var id=id;
	var json=1;
	var length=0;
   var jsonData = '{"target_urls":["https://baidu.com"]}';
  $.ajax
   ({
      type: "GET",//"POST",
      //the url where you want to sent the userName and password to
      url: 'http://ec2-52-205-254-238.compute-1.amazonaws.com/scans',
	  //http://ec2-52-201-228-32.compute-1.amazonaws.com/scans/
      //json object to sent to the authentication url
      contentType: "application/json",
      success: function (data) {
	   json = JSON.parse(data);
	   //alert(json);
	   length=json.items.length;
	   //doStuff();
	   for(i=0;i<length;i++)
	   {
		   if(id==json.items[i].id)
		   { 
				 status=json.items[i].status;
	       }
		  
		   
	   }

	   
      },
      error: function(XMLHttpRequest, textStatus, errorThrown)  {
      	alert("Status: " + XMLHttpRequest.status); alert("Error: " + XMLHttpRequest.responseText); 
      }
  })	
return status;}


function iteration(id) {
	//alert(data);
	var compare1;
	var compare2;
	var status="Running";
	var id=id;
	var json=1;
	var length=0;
   var jsonData = '{"target_urls":["https://baidu.com"]}';
  $.ajax
   ({
      type: "GET",//"POST",
      //the url where you want to sent the userName and password to
      url: 'http://ec2-52-205-254-238.compute-1.amazonaws.com/scans',
	  //http://ec2-52-201-228-32.compute-1.amazonaws.com/scans/
      //json object to sent to the authentication url
      contentType: "application/json",
      success: function (data) {
	   //alert(data);
       console.log("3")
	   json = JSON.parse(data);
	   //alert(json);
	   length=json.items.length;
	   //alert(length);
	   //doStuff();
	   for(i=0;i<length;i++)
	   {
		   if(id==json.items[i].id)
		   { 
	         
				 status=json.items[i].status;
	       }
		  
		   
	   }
	   //alert(status);
	   //i=0;
	   if(status=="Running")
	   {
		   doStuff();
		   iteration(id);
	   }
	   if(status=="Stopped")
	   {
		   ThirdMethod(id); 
           	   
	   }
	   /*else
	   {
		 doStuff();
		 OnSucess(id);
	   }*/
	   
	       //while(status=="Stopped")
	   
	   //status=json.status;
	   //alert(status);
	   
      },
      error: function(XMLHttpRequest, textStatus, errorThrown)  {
      	alert("Status: " + XMLHttpRequest.status); alert("Error: " + XMLHttpRequest.responseText); 
      }
  })	
}

function OnSucess(id) {
	//alert(data);
	var compare1;
	var compare2;
	var status="Running";
	var id=id;
	var json=1;
	var length=0;
   var jsonData = '{"target_urls":["https://baidu.com"]}';
  $.ajax
   ({
      type: "GET",//"POST",
      //the url where you want to sent the userName and password to
      url: 'http://ec2-52-205-254-238.compute-1.amazonaws.com/scans',
	  //http://ec2-52-201-228-32.compute-1.amazonaws.com/scans/
      //json object to sent to the authentication url
      contentType: "application/json",
      success: function (data) {
	   //alert(data);
       console.log("3")
	   json = JSON.parse(data);
	   //alert(json);
	   length=json.items.length;
	   //alert(length);
	   //doStuff();
	   for(i=0;i<length;i++)
	   {
		   if(id==json.items[i].id)
		   { 
	         if(json.items[i].status=="Stopped")
			 {
				compare1=json.items[i].status;
				setTimeout(continueExecution, 100);
				compare2=Getback(id);
				if(compare1==compare2)
				{status=json.items[i].status;}			
				 
			 }
	         else
			 {
				 status=json.items[i].status;
			 }
	       }
		  
		   
	   }
	   //alert(status);
	   //i=0;
	   if(status=="Running")
	   {
		   doStuff();
		   iteration(id);
	   }
	   if(status=="Stopped")
	   {
		   ThirdMethod(id); 
           	   
	   }
	   /*else
	   {
		 doStuff();
		 OnSucess(id);
	   }*/
	   
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
      url: 'http://ec2-52-205-254-238.compute-1.amazonaws.com/scans/',
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
/*$('#Button1').click(function() {
                reload();
            });*/
//  });
//}, false);
