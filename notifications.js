var g_notes_interval;

function check_notifications()
{
	var l_reply=net_get_notifications_objects();
		
//	alert("META: "+JSON.stringify(l_reply));
	if(l_reply!==null)
	{ 
		var tmp_data;

		if(JSON.stringify(g_user.notes)!==JSON.stringify(l_reply))
		{
			g_user.notes=l_reply;
			
			var l_list=net_get_objects(l_reply);
//			alert("NOTES: "+JSON.stringify(l_list));	
			if(l_list!=undefined) draw_notifications("#objects_div",l_list);
			return false;
		}
		return true;	
	}
	else location.reload();	
};

function draw_notifications(l_div, l_list)
{
	var l_div;
	$(l_div).children().hide();
	var l_code=g_user.code;

	//Окно ввода, название и предупреждение:
	var tmp_div=$("<div class=\"general_object_dialog\"></div>");
	$(tmp_div).css({"top": $(l_div).scrollTop()+20});
	$(tmp_div).attr("id","dialog");
	$(l_div).append(tmp_div);	

	for(i=0;i<l_list.length;i++)
	{
		var tmp_group=$("<div class=\"general_object_group\"></div>").text("");
		
		$.each(l_list[i].attributes, function(l_key,l_value)
		{
			draw_general_object_text_attr(l_value,tmp_group,"general_object_desc");
		});
		$(tmp_div).append(tmp_group);	
	}
	
	//cancel button
	var tmp_button_cancel=$("<button class=\"general_object_button_dialog\"> Cancel! </button>");
	$(tmp_button_cancel).data("general_div",l_div);
	$(tmp_button_cancel).data("dialog_div",tmp_div);
	$(tmp_button_cancel).click(function(event)
	{
		$($(event.target).data("general_div")).children().show();
		$($(event.target).data("dialog_div")).remove();
	});
	$(tmp_div).append(tmp_button_cancel);	
	
}

