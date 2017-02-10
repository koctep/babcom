//запросы к серверу


var g_loginserv="http://localhost:8000";

var g_user={"array":[], "code": null, "num": null};

var g_server=
{
	"reply":null,
	"uuid":uuid.v4(),
	"status":0
}	

function net_send(l_send)
{
	g_server.reply=null;

	$.ajax(g_loginserv,
	{
		type: 'POST',
		data: JSON.stringify(l_send),
		contentType: "application/json",
		async:false,
		success: function(data,status,xhr)
		{
			if(xhr.status==200)
			{
				g_server.reply=data;
			}
			else 
			{
				alert("Server Error: " + xhr.status);	
			}
		
		},
		error: function(xhr)
		{
			alert("Network Error: "+xhr.status);
		}
	});				
}

function net_get_user_objects()
{
	var l_send={
//		"client":g_uuid,
		"client":"client51",
		"function":"get_user_objects",
		"params":{}
		};	
		
		net_send(l_send);
		
		if(g_server.reply!==null)
		{
			g_user.array=JSON.parse(JSON.stringify(g_server.reply.data.objects));
			g_server.reply=null;
			return true;	
		}
		else location.reload();
}

