/*****************************************************************************
*
*  PROJECT:     Creating Interactive Web pages with a Controlled Layout
*  LICENSE:     See LICENSE in the top level directory
*  FILE:        public_html/scripts/masterScript.js
*  PURPOSE:     Master scripts to be used by all web pages
*  DEVELOPERS:  Gabriel Gauci Maistre <scarface@potholestudios.com>
*
*****************************************************************************/

//Stores the hours, minutes and seconds to be displayed.
function Time()
	{
		var date=new Date();
		var h=date.getHours();
		var m=date.getMinutes();
		var s=date.getSeconds();
					
		h=checkTime(h);
		m=checkTime(m);
		s=checkTime(s);			   
					
		document.getElementById("Time").innerHTML="The time is "+h+":"+m+":"+s;
		t=setTimeout("Time()",100);
	}
       
// Adds a 0 to the time.
function checkTime(i)
    {
		if(i<10)
			{
				i="0" +i;
            }
        return i;
    }
		
//Stores the values and multiplies them by 1.036.
function CalculateCalories()
	{
		var weight = document.getElementById("weight").value;
		var distance = document.getElementById("distance").value;
		var calories = weight * distance * 1.036;
		alert(calories);
	}

//Loads Google Map's API.	
function initialize() 
	{
		var myCenter=new google.maps.LatLng(35.876285,14.506512);
        var mapOptions = 
			{
				center: myCenter,
				zoom: 17,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
		var marker=new google.maps.Marker(
			{
				position:myCenter,
			});
			marker.setMap(map);
    }

//Swaps the normal image with the hover image	
function swapImage(thisImage,newImage) 
	{
		if (document.images) {
			document[thisImage].src = eval(newImage + ".src");
		}
	}	
	