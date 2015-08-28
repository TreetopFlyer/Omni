var Omni = {};
Omni.Time = {
	Table:{
		Days:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		Weekend:["Weekend", "Weekday", "Weekday", "Weekday", "Weekday", "Weekday", "Weekend"]
	},
	Timestamp:"", 
	Clock:"",
	Day:"",
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
	for(prop in inObj)
	{
		value = inObj[prop];
		if(value !== undefined)
			queryString += prop + "="+ value + "&";
	}
	return queryString;
};
Omni.Model = {
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
Omni.Endpoint = "http://nasrecruitment.d2.sc.omtrdc.net/b/ss/nasrtestingsuite/1/JS-1.5.1-D56N";
Omni.Element = document.createElement("img");
document.getElementsByTagName("body")[0].appendChild(Omni.Element);
Omni.Track = function()
{
	var queryString = "";
	var i;
	for(i=0; i<arguments.length; i++)
	{
		queryString += Omni.QueryString(arguments[i]);
	}
	Omni.Element.src = Omni.Endpoint + "/s" + Math.floor(Math.random()*10000000) + "?AQB=1&" + queryString + "AQE=1";
};

Omni.Click = function(inValue, inChannel)
{
	Omni.Track(Omni.Base, {
		pe:"lnk_o",
		ch:inChannel,
		events:"event36,event40",
		c31:inValue,
		v31:inValue
	});
};
Omni.View = function(inTitle, inType, inLang)
{
	Omni.Track(Omni.Base, {
		pageName:inTitle,
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
};var Omni = {};
Omni.Time = {
	Table:{
		Days:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		Weekend:["Weekend", "Weekday", "Weekday", "Weekday", "Weekday", "Weekday", "Weekend"]
	},
	Timestamp:"", 
	Clock:"",
	Day:"",
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
	for(prop in inObj)
	{
		value = inObj[prop];
		if(value !== undefined)
			queryString += prop + "="+ value + "&";
	}
	return queryString;
};
Omni.Model = {
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
Omni.Endpoint = "http://nasrecruitment.d2.sc.omtrdc.net/b/ss/nasrtestingsuite/1/JS-1.5.1-D56N";
Omni.Element = document.createElement("img");
document.getElementsByTagName("body")[0].appendChild(Omni.Element);
Omni.Track = function()
{
	var queryString = "";
	var i;
	for(i=0; i<arguments.length; i++)
	{
		queryString += Omni.QueryString(arguments[i]);
	}
	Omni.Element.src = Omni.Endpoint + "/s" + Math.floor(Math.random()*10000000) + "?AQB=1&" + queryString + "AQE=1";
};

Omni.Click = function(inValue, inChannel)
{
	Omni.Track(Omni.Base, {
		pe:"lnk_o",
		ch:inChannel,
		events:"event36,event40",
		c31:inValue,
		v31:inValue
	});
};
Omni.View = function(inTitle, inType, inLang)
{
	Omni.Track(Omni.Base, {
		pageName:inTitle,
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
