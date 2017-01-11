// тут функции отрисовки основного объекта для самого общего случая. 

//подгоняем под размер окна
function resizeMainDivs()
{
	
	var main_x = $("#main_div").width(); //window.innerWidth;
	var main_y = $("#main_div").height(); //window.innerHeight;

	//задаем размеры
	$("#buttons_div").css({"height":main_y-20});
	$("#objects_div").css({"width": main_x-186,"height":main_y-20});

}


function draw_general_object(l_data,l_div)
{
	var lx=$(l_div).width(),ly=$(l_div).height();
	
	var l_used_keys=[];
	var l_used_actions=[];
	
	if ("name" in l_data.object.attributes) 
	{
		$(l_div).append("<p class=\"general_object_name\">"+ l_data.object.attributes.name.value+"</p>"); 	
		l_used_keys.push("name");
	}
	
	
	//отрисовываем заданное в темплейте. Там должно быть перечислено все. 
	if("template" in l_data.object)
	{
		var i=0,j=0;
		var tmp=l_data.object.template.groups;
		for(i=0;i<tmp.length;i++)
		{
			var tmp_group=$("<div class=\"general_object_group\"></div>").text("");
			
			if("name" in tmp[i])
			{	
				$(tmp_group).append(tmp[i].name);
				$(tmp_group).append("<hr>");
			}
			
			if("attributes" in tmp[i])
			{
				for(j=0;j<tmp[i].attributes.length;j++)
				{
					var tmp_attr=tmp[i].attributes[j];
					var tmp_val;
					
					if("value_description" in  l_data.object.attributes[tmp_attr] ) tmp_val=l_data.object.attributes[tmp_attr].value_description;
					else tmp_val=l_data.object.attributes[tmp_attr].value;
					
					if("name" in  l_data.object.attributes[tmp_attr] )
					{
						$(tmp_group).append("<p class=\"general_object_desc\"><b>"+l_data.object.attributes[tmp_attr].name+"</b> : " +tmp_val +" </p>");
					}
					else
					{
						$(tmp_group).append("<p class=\"general_object_desc\">"+tmp_val +" </p>");
					}
					
					l_used_keys.push(tmp_attr);
				}
			}	

			if("actions" in tmp[i])
			{
				for(j=0;j<tmp[i].actions.length;j++)
				{
					var tmp_attr=tmp[i].actions[j];

					if("name" in  l_data.object.actions[tmp_attr] )
					{
						var tmp_button=$("<button class=\"general_object_button\">"+l_data.object.actions[tmp_attr].name+"</button>");
						$(tmp_button).click(function(){alert("Pressed!");});
						$(tmp_group).append(tmp_button);
					}
					
					l_used_actions.push(tmp_attr);
				}
			}
			$(l_div).append(tmp_group);
		} 
	
	}		
	
	//рисуем атрибуты без темплейта. От таких надо избавляться.
	var tmp=l_data.object.attributes;
	
	$.each(tmp, function(l_key,l_value)
	{
		if( $.inArray(l_key,l_used_keys) <0 && l_value.hidden != true )
		{
			var tmp_val;
					
			if("value_description" in  l_value) tmp_val=l_value.value_description;
			else tmp_val=l_value.value;
			
			
			if("name" in  l_value)
			{
				$(l_div).append("<p class=\"general_object_desc\"><b>"+l_value.name+"</b> : " +tmp_val +" </p>");
			}
			else
			{
				$(l_div).append("<p class=\"general_object_desc\">" + tmp_val +" </p>");
			}

		}

	});
	
	//рисуем кнопки без темплейта. От таких надо избавляться.
	
	var tmp=l_data.object.actions;
	$.each(tmp, function(l_key,l_value)
	{
		if( $.inArray(l_key,l_used_actions) <0)
		{
			
			if("name" in  l_value)
			{
				var tmp_button=$("<button class=\"general_object_button\">"+l_value.name+"</button>");
				$(tmp_button).click(function(){alert("Pressed!");});
				$(l_div).append(tmp_button);
			
			}
		}

	});
				
} 

