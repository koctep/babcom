//функции отрисовки мета-объектов.

function draw_meta_objects(l_div, l_callback_div)
{
	var l_reply=net_get_meta_objects();
		
//	alert("META: "+JSON.stringify(l_reply));
	if(l_reply!==null)
	{ 
		var tmp_data;

		if(JSON.stringify(g_user.meta)!==JSON.stringify(l_reply))
		{
			g_user.meta=l_reply;
			$(l_div).empty();
			$(l_callback_div).empty();
			$(l_callback_div).append("<p class=\"general_object_name\"><-- Выберите пункт меню!</p>");
			
			
			for(var i=0;i<l_reply.length;i++)
			{	
				draw_meta_object("#meta_div","#objects_div",l_reply[i]);
			}
			return false;
		}
		return true;	
	}
	else location.reload();
	
	
}

function draw_meta_object(l_div, l_callback_div, l_meta_obj)
{

	var tmp_div;
	
	var tmp_white="rgba(200,200,200,0.4)";
	var tmp_green="rgba(0,200,0,0.5)";
		
	if("objects" in l_meta_obj)
	{
		var l_objects=l_meta_obj.objects;
		for(var i=0;i<l_objects.length;i++)
		{
			
			tmp_div=$("<div class=\"meta_object_list_element\">"+l_objects[i].name+"</div>");
			$(tmp_div).data("code",l_objects[i].code);
			$(tmp_div).data("type","object");
			$(tmp_div).data("input_div",l_callback_div);
	
			$(l_div).append(tmp_div);
			$(tmp_div).click(function (event)
			{ 
				var tmp_code=[];
				tmp_code[0]=$(event.target).data("code");
				var tmp_type=$(event.target).data("type");
				var tmp_callback_div=$(event.target).data("input_div");
	
				$(".meta_object_list_element").css({"background-color":tmp_white});	
				
				var tmp_obj=net_get_objects(tmp_code);		
				if(tmp_obj!==null)
				{			
					draw_general_object(tmp_obj[0],tmp_callback_div);
					$(event.target).css({"background-color":tmp_green});	
				}
			});
	 	}		
	}

	if("actions" in l_meta_obj)
	{
		var l_actions=l_meta_obj.actions;

		for(var i=0;i<l_actions.length;i++)
		{
			tmp_div=$("<div class=\"meta_object_list_element\">"+l_actions[i].name+"</div>");
			$(tmp_div).data("object_actions",l_actions[i]);
			$(tmp_div).data("type","action");
			$(tmp_div).data("input_div",l_callback_div);
	
			$(l_div).append(tmp_div);
			$(tmp_div).click(function (event)
			{ 
				var tmp_act=$(event.target).data("object_actions");
				var tmp_type=$(event.target).data("type");
				var tmp_callback_div=$(event.target).data("input_div");
	
				$(".meta_object_list_element").css({"background-color": tmp_white });	
				$(event.target).css({"background-color": tmp_green });	
				
				draw_general_object_dialog(event,tmp_callback_div);
				
			});
	 	}		
	}
/*
	if("special" in l_meta_obj)
	{
		if("mail" in l_meta_obj.special)
		{
			tmp_div=$("<div class=\"meta_object_list_element\">Почта</div>");
			$(tmp_div).data("input_div",l_callback_div);
			$(l_div).append(tmp_div);
			$(tmp_div).click(function (event)
			{ 
				var tmp_callback_div=$(event.target).data("input_div");
	
				$(".meta_object_list_element").css({"background-color":tmp_white});	
				$(event.target).css({"background-color":tmp_green});	
				
				draw_mail(tmp_callback_div);
			});
	 	}		
	}
*/
}

function find_object(l_objects, l_code)
{
	for(var i=0;i<l_objects.length;i++)
	{
		if(l_objects[i].code==l_code)
		{
			 return l_objects[i];
		}
	}
	return undefined;
}
