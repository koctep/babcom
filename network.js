//запросы к серверу


var g_loginserv="http://localhost:8000";

var g_user={"array":[], "code": null, "num": null, "meta":null, "notes": null};

var g_server=
{
	"reply":null,
	"uuid":null,
	"status":0
}	

function make_uuid()
{
	var tmp_uuid=sessionStorage.getItem("babcom_uuid");

	if(tmp_uuid===null) 
	{ 
		tmp_uuid=uuid.v4();
		sessionStorage.setItem("babcom_uuid",tmp_uuid);
	}
	return tmp_uuid;
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
		"client":g_server.uuid,
//		"client":"client51",
		"function":"get_user_objects",
		"params":{}
	};	
		
	net_send(l_send);
	var l_reply;
	
	if(g_server.reply!==null)
	{
		l_reply=JSON.parse(JSON.stringify(g_server.reply.data.objects));
		g_server.reply=null;
	}
	else l_reply=null;
	return l_reply;
}

function net_get_meta_objects()
{
	var l_send={  
		"client":g_server.uuid,
//		"client":"client51",
			"function": "get_objects",
			"params": 
				{    
					"user_object_code": g_user.code,
					"object_codes": [g_user.code],
					"attributes": ["meta_entities"]
				} 
			};	
		
		net_send(l_send);
		
		var l_reply;
		if(g_server.reply!==null)
		{
			l_reply=JSON.parse(JSON.stringify(g_server.reply.data.objects[0].attributes.meta_entities.value.groups));
			g_server.reply=null;
			return l_reply;	
		}
		else location.reload();
}

function net_get_notifications_objects()
{
	var l_send={  
		"client":g_server.uuid,
//		"client":"client51",
			"function": "get_objects",
			"params": 
				{    
					"user_object_code": g_user.code,
					"object_codes": [g_user.code],
					"attributes": ["notifications"]
				} 
			};	
		
		net_send(l_send);
		
		var l_reply;
		if(g_server.reply!==null)
		{
			l_reply=JSON.parse(JSON.stringify(g_server.reply.data.objects[0].attributes.notifications.value));
			g_server.reply=null;
			return l_reply;	
		}
		else location.reload();
}

function net_get_objects(l_list)
{
	var l_send={  
		"client":g_server.uuid,
//		"client":"client51",
			"function": "get_objects",
			"params": 
				{    
					"user_object_code": g_user.code,
					"object_codes": l_list,
				} 
			};	
		
		net_send(l_send);
		
		var l_reply;
		if(g_server.reply!==null)
		{
			l_reply=JSON.parse(JSON.stringify(g_server.reply.data.objects));
			g_server.reply=null;
			return l_reply;	
		}
		else location.reload();
}

function net_make_action(l_data)
{
	var l_send={  
		"client":g_server.uuid,
//		"client":"client51",
			"function": "make_action",
			"params": l_data
 
			};	
//		prompt("MAKE_ACTION: ",JSON.stringify(l_send));
		net_send(l_send);
		
		var l_reply;
		if(g_server.reply!==null)
		{
			l_reply=JSON.parse(JSON.stringify(g_server.reply.data));
			g_server.reply=null;
			return l_reply;	
		}
		else location.reload();
}

