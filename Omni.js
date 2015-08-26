var Omni = {};
Omni.Time = {
	Table:{
		Days:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		Weekend:["Weekend", "Weekday", "Weekday", "Weekday", "Weekday", "Weekday", "Weekend"]
	},
	Timestamp:"", 
	Clock:"",
	Weekday:"",
	Weekend:""
};
Omni.Time.Update = function()
{
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var clockHours = hours;
	var clockHalf = "AM"
	if(hours > 12)
	{
		clockHours -= 12;
		clockHalf = "PM";
	}
	Omni.Time.Timestamp = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + " " + hours + ":" + minutes + ":" + date.getSeconds() + " " + date.getDay() + " " + date.getTimezoneOffset();
	Omni.Time.Clock = clockHours + ":" + minutes + clockHalf;
	Omni.Time.Day = Omni.Time.Table.Days[date.getDay()];
	Omni.Time.Weekend = Omni.Time.Table.Weekend[date.getDay()];
}
Omni.Time.Update();
Omni.QueryString = function(inObj)
{
	var queryString = "";
	var value;
	for(prop in Omni.Model)
	{
		value = Omni.Model[prop];
		if(value !== undefined)
			queryString += prop + "="+ value + "&";
	}
	return queryString;
};
Omni.Model = {

	AQB:"1",
	AQE:"1",
	ndh:"1",
	pf:"1",
	ce:"UTF-8",
	c:"24",
	j:"1.6",
	v:"Y",
	k:"Y",
	g:window.location.href,
	r:document.referrer,
	s:(screen.width+"x"+screen.height),
	bw:(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
	bh:(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight),		
	t:Omni.Time.Timestamp
};
Omni.Endpoint = "http://nasrecruitment.d2.sc.omtrdc.net/b/ss/nasrdtmstaging/1/JS-1.5.1-D56N";
Omni.Element = document.createElement("img");
document.getElementsByTagName("body")[0].appendChild(Omni.Element);
Omni.Track = function(inObj)
{
	Omni.Element.src = Omni.Endpoint + "/s" + Math.floor(Math.random()*10000000) + "?" + Omni.QueryString(Omni.Model) + Omni.QueryString(inObj);
};

Omni.Click = function(inValue, inChannel)
{
	Omni.Track({
		pe:"lnk_o",
		ch:inChannel,
		events:"event36,event40"
		c31:inValue,
		v31:inValue
	});
};
Omni.View = function(inTitle, inType, inLang)
{
	Omni.Track({
		pageType:inType,
		c3:"291010",
		v3:"291010",
		c8:"0",
		v8:"0",
		c17:Omni.Time.Clock,
		v17:Omni.Time.Clock,
		c18:Omni.Time.Day,
		v18:Omni.Time.Day,
		c19:Omni.Time.Weekend,
		v19:Omni.Time.Weekend,
		c28:inType,
		v28:inType,
		c30:inTitle,
		c47:inLang,
		v47:inLang
	});
};

/* click properties
pe:lnk_o
pev2:Branch Click Speed Test
ch:test25
events:event36,event40
c31:Customer Service careers at Springleaf
v31:D=c31
*/


/* view properties
server:%Server%
pageType:Career
c3:291010
v3:D=c3
c8:0
v8:D=c8
c16:%Percent Page Viewed%
c17:10:00AM
v17:D=c17
c18:Wednesday
v18:D=c18
c19:Weekday
v19:D=c19
c28:Career
v28:D=c28
c30:Career.Who We Hire
c47:en-US
v47:D=c47
*/
