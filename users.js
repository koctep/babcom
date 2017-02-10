// все для работы с основными пользователями

function draw_user_objects(l_div)
{
	$(l_div).empty();
	$(l_div).append("<p class=\"user_object_name\">Ваше имя</p>");
		
	var tmp_dropdown_container=$("<div class=\"user_object_dropdown_cont\"></div>");
	var tmp_input=$("<div type=\"text\" class=\"user_object_dropdown_input\"></div>");
	var tmp_dropdown=$("<div class=\"user_object_dropdown\"></div>");

	$(tmp_dropdown_container).append(tmp_input);
	$(tmp_dropdown_container).append(tmp_dropdown);
	$(l_div).append(tmp_dropdown_container);
	
	$(tmp_input).click(function(event){ $(event.target).parent().children().show(); });
	
	if(net_get_user_objects()===true)
	{ 
		var tmp_data=[];
		alert(JSON.stringify(g_user));
		for(var i=0;i<g_user.array.length;i++)
		{
			var tmp_value;
			if("value_description" in g_user.array[i].attributes.name) tmp_value=g_user.array[i].attributes.name.value_description;
			else tmp_value=g_user.array[i].attributes.name.value;
					
			tmp_data.push({"code" : g_user.array[i].code, "name" : tmp_value });	
		}
		draw_user_objects_list(tmp_dropdown, tmp_input, tmp_data, g_user);
	}	
}

function draw_user_objects_list(l_div, l_input_div, l_input, l_data)
{
	var tmp_div;
		
	for(var i=0;i<l_input.length;i++)
	{
		tmp_div=$("<div class=\"general_object_list_element\">"+l_input[i].name+"</div>");
		$(tmp_div).data("input",l_input[i]);
		$(tmp_div).data("num",i);
		$(tmp_div).data("data",l_data);
		$(tmp_div).data("input_div",l_input_div);

		$(l_div).append(tmp_div);
		$(tmp_div).click(function (event)
		{ 
			var tmp_input=$(event.target).data("input");
			var tmp_data=$(event.target).data("data");
			var tmp_input_div=$(event.target).data("input_div");
			var tmp_num=$(event.target).data("num");

			$(event.target).parent().hide(); 
			$(tmp_input_div).text(tmp_input.name);
			$(tmp_input_div).css({"border-color":"green"});	

			tmp_data.code=tmp_input.code;
			tmp_data.num=tmp_num ;
			
			alert(JSON.stringify(g_user));
			
		});	
	}		
}


	
	
	

