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
	Omni.Time.Weekday = Omni.Time.Table.Days[date.getDay()];
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
