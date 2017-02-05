//функции отрисовки мета-объектов.

function draw_meta_object(l_div, l_callback_div, l_objects)
{
	var tmp_div;
		
	for(var i=0;i<l_objects.length;i++)
	{
		tmp_div=$("<div class=\"meta_object_list_element\">"+l_objects[i].name+"</div>");
		$(tmp_div).data("code",l_objects[i].code);
		$(tmp_div).data("type","object");
		$(tmp_div).data("input_div",l_callback_div);

		$(l_div).append(tmp_div);
		$(tmp_div).click(function (event)
		{ 
			var tmp_code=$(event.target).data("code");
			var tmp_type=$(event.target).data("type");
			var tmp_callback_div=$(event.target).data("input_div");

			$(".meta_object_list_element").css({"background-color":"rgb(200,200,200)"});	
			
			var tmp_obj=find_object(g_obj,tmp_code);		
			if(tmp_obj!==undefined)
			{			
				draw_general_object(tmp_obj,tmp_callback_div);
				$(event.target).css({"background-color":"rgb(100,255,100)"});	
			}
		});
 	
	}		
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
