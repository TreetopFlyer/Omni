var DataSnake = {};

DataSnake.Config = {};
DataSnake.Config.Domains = ["10.192.208.56"];
DataSnake.Config.Key = "datasnake";

DataSnake.Data = {};
DataSnake.Data.Value = "";

DataSnake.Methods = {};
DataSnake.Methods.QueryStringToObject = function(inQueryString)
{
	if(inQueryString.length == 0)
		return {};

	if(inQueryString[0] == "?")
		inQueryString = inQueryString.substring(1);
	
	var output = {};
	var segments = inQueryString.split("&");
	for (i = 0; i < segments.length; i++) {
		var kvp = segments[i].split("=");
		var key = kvp[0];
		var value = "true";
		if(key != "")
		{
			if (kvp.length == 2)
			{
				value = decodeURIComponent(kvp[1]);
			}
			output[key] = value;
		}
	}
	return output;
};
DataSnake.Methods.GetDomain = function(inURL)
{
	var i;
	var parts;
	var domain = window.location.host;
	if(inURL != "")
	{
		parts = inURL.split("/");
		for(i=0; i<parts.length; i++)
		{
			if(parts[i] == "")
			{
				domain = parts[i+1];
				break;
			}
		}
	}
	return domain.toLowerCase();
};
DataSnake.Methods.CheckDomain = function(inURL)
{
	var domain = DataSnake.Methods.GetDomain(inURL);
	
	for(i=0; i<DataSnake.Config.Domains.length; i++)
	{
		if(domain.indexOf(DataSnake.Config.Domains[i]) != -1)
		{
			return true;
		}
	}
	return false;
};
DataSnake.Methods.Init = function()
{
	/*
		1.) Was the query string provided?
		
			if not...
				...store the referring domain in Data.Value
			
			if so...
				...extract the provided query string value into Data.Value 
	
	
		~~~ at this point, Data.Value will exist, and be populated in some form ~~~
		
		2.) Register a handler that overrides link paths on click: ecoding and adding Data.Value to the href.
	
	*/
	
	DataSnake.Data.Value = DataSnake.Methods.QueryStringToObject(window.location.search)[DataSnake.Config.Key];
	if(DataSnake.Data.Value === undefined)
	{
		DataSnake.Data.Value = DataSnake.Methods.GetDomain(document.referrer);
	}
	else
	{
		DataSnake.Data.Value = decodeURIComponent(DataSnake.Data.Value);
	}
	
	$(document).click(function(e)
	{
		var href = $(e.target).closest("a").attr("href");
		
		if(href === undefined)
			return false;
		else
			e.preventDefault();
		
		var parts = href.split("#");
		var anchor = "";
		if(parts.length > 1)
			anchor = "#"+parts[1];
		if(parts[0].indexOf("?") != -1)
			parts[0] += "&";
		else
			parts[0] += "?";
			
		window.location = parts[0] + DataSnake.Config.Key + "=" + encodeURIComponent(DataSnake.Data.Value) + anchor;
		
		return false;
	});
};
DataSnake.Methods.Init();
