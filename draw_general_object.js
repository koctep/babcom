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

function draw_general_object_dialog(l_action,l_div)
{
	$(l_div).children().hide();
	
	//Окно ввода, название и предупреждение:
	
	var tmp_div=$("<div class=\"general_object_dialog\"></div>");
	$(tmp_div).css({"top": $(l_div).scrollTop()+20});
	$(l_div).append(tmp_div);
	
	//параметры ввода
	
	
	
	
	
	
	//Кнопки подтверждения, отмены.
	var tmp_button_ok=$("<button class=\"general_object_button_dialog\"> Ok! </button>");
	$(tmp_button_ok).click(function(){alert('Ok');});
	
	var tmp_button_cancel=$("<button class=\"general_object_button_dialog\"> Cancel! </button>");
	$(tmp_button_cancel).click(function()
	{
		$(l_div).children().show();
		$(tmp_div).remove();
	});
	
	var tmp_container=$("<div class=\"general_object_button_dialog_container\"></div>");
	
	$(tmp_container).append(tmp_button_ok);
	$(tmp_container).append(tmp_button_cancel);
	$(tmp_div).append(tmp_container);
	
}


function draw_general_object(l_object,l_div)
{
	$(l_div).empty();
	
	var lx=$(l_div).width(),ly=$(l_div).height();
	
	var l_used_keys=[];
	var l_used_actions=[];
	
	if ("name" in l_object.attributes) 
	{
		$(l_div).append("<p class=\"general_object_name\">"+ l_object.attributes.name.value+"</p>"); 	
		l_used_keys.push("name");
	}
	
	
	//отрисовываем заданное в темплейте. Там должно быть перечислено все. 
	if("template" in l_object)
	{
		var i=0,j=0;
		var tmp=l_object.template.groups;
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
					
					if(l_object.attributes[tmp_attr].hidden != true)
					{
						if("value_description" in  l_object.attributes[tmp_attr] ) tmp_val=l_object.attributes[tmp_attr].value_description;
						else tmp_val=l_object.attributes[tmp_attr].value;
						
						if("name" in  l_object.attributes[tmp_attr] )
						{
							$(tmp_group).append("<p class=\"general_object_desc\"><b>"+l_object.attributes[tmp_attr].name+"</b> : " +tmp_val +" </p>");
						}
						else
						{
							$(tmp_group).append("<p class=\"general_object_desc\">"+tmp_val +" </p>");
						}
						
						l_used_keys.push(tmp_attr);
					}
				}
			}	

			if("actions" in tmp[i])
			{
				for(j=0;j<tmp[i].actions.length;j++)
				{
					var tmp_attr=tmp[i].actions[j];

					if("name" in  l_object.actions[tmp_attr] )
					{
						var tmp_button=$("<button class=\"general_object_button\">"+l_object.actions[tmp_attr].name+"</button>");
						
						//универсальный обработчик нажатий кнопок
						$(tmp_button).click(function()
						{
							draw_general_object_dialog(l_object.actions[tmp_attr],l_div);
						});

						if(l_object.actions[tmp_attr].disabled==true) $(tmp_button).attr("disabled","disabled");  

						$(tmp_group).append(tmp_button);

					}

					
					l_used_actions.push(tmp_attr);
				}
			}
			$(l_div).append(tmp_group);
		} 
	
	}		
	
	//рисуем атрибуты без темплейта. От таких надо избавляться.
	var tmp=l_object.attributes;
	
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
	
	var tmp=l_object.actions;
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

