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

function draw_general_object_dialog_params_float(l_par,l_data,l_div,l_num)
{
		var tmp_input=$("<input type=\"text\" class=\"general_object_dialog_input\"></input>");
		$(tmp_input).attr("placeholder","default val: " + l_par.default_value);
		$(tmp_input).data("data_input",l_data);
		$(tmp_input).data("user_parameter",l_par);
		$(tmp_input).data("num",l_num);

		$(tmp_input).change(function(event)
		{
			var tmp=parseFloat($(event.target).val());
			var tmp_par=$(event.target).data("user_parameter");
			var tmp_data=$(event.target).data("data_input");
			var tmp_num=$(event.target).data("num");

			if(isNaN(tmp)==false)
			{
				if("data" in tmp_par)
				{
					if(tmp >=tmp_par.data.min_value && tmp <= tmp_par.data.max_value ) 
					{
						tmp_data[tmp_par.code][tmp_num]=tmp;
						$(event.target).css({"border-color":"green"});	
					}	
					else
					{
						$(event.target).css({"border-color":"red"});	
					}	
				}
				else
				{
					tmp_data[tmp_par.code][tmp_num]=tmp;
					$(event.target).css({"border-color":"green"});	
				}
			}
			else
			{
				$(event.target).css({"border-color":"red"});
				$(event.target).val("");
			}
		});	
		$(l_div).append(tmp_input);
}

function draw_general_object_dialog_params_integer(l_par,l_data,l_div,l_num)
{
		var tmp_input=$("<input type=\"text\" class=\"general_object_dialog_input\"></input>");
		$(tmp_input).attr("placeholder","default val: " + l_par.default_value);
		$(tmp_input).data("data_input",l_data);
		$(tmp_input).data("user_parameter",l_par);
		$(tmp_input).data("num",l_num);

		$(tmp_input).change(function(event)
		{
			var tmp=parseInt($(event.target).val());
			var tmp_par=$(event.target).data("user_parameter");
			var tmp_data=$(event.target).data("data_input");
			var tmp_num=$(event.target).data("num");

			if(isNaN(tmp)==false)
			{
				if("data" in tmp_par)
				{
					if(tmp >=tmp_par.data.min_value && tmp <= tmp_par.data.max_value ) 
					{
						tmp_data[tmp_par.code][tmp_num]=tmp;
						$(event.target).css({"border-color":"green"});	
					}	
					else
					{
						$(event.target).css({"border-color":"red"});	
					}	
				}
				else
				{
					tmp_data[tmp_par.code][tmp_num]=tmp;
					$(event.target).css({"border-color":"green"});	
				}
			}
			else
			{
				$(event.target).css({"border-color":"red"});
				$(event.target).val("");
			}
		});	
		$(l_div).append(tmp_input);
}

function draw_general_object_dialog_params(l_par,l_par_div)
{
	
	//отдельный див для всех групп вводимых параметров
	var tmp_group=$("<div class=\"general_object_group\"></div>").text("");
	$(tmp_group).append("<p class=\"general_object_description\">" + l_par.description+"</p><hr>");	
	$(tmp_group).attr("id",l_par.code);
	$(l_par_div).data("data_input")[l_par.code]=[];
	$(l_par_div).append(tmp_group);	

	var l_count;
	if(l_par.min_value_count==0) l_count=1; 
	else l_count=l_par.min_value_count;
	
	//рисуем окошечки для вводимых параметров
	var i=0;
	for(i=0;i<l_count;i++)
	{
		$(l_par_div).data("data_input")[l_par.code][i]=null;
		if(l_par.type==="integer") draw_general_object_dialog_params_integer(l_par,	$(l_par_div).data("data_input"),tmp_group,i);
		if(l_par.type==="float") draw_general_object_dialog_params_float(l_par,	$(l_par_div).data("data_input"),tmp_group,i);
	
/*		if(l_par.type=="string") draw_general_object_dialog_params_string(l_par,tmp_group);
		if(l_par.type=="object") draw_general_object_dialog_params_object(l_par,tmp_group);
*/
	}
	
	//кнопочка добавления окошечек параметров. 
	var tmp_button_plus=$("<button class=\"general_object_plus_button_dialog\">+</button>");
	$(l_par_div).data("data_count")[l_par.code]=l_count;
	$(tmp_button_plus).data("data_count",$(l_par_div).data("data_count"));
	$(tmp_button_plus).data("user_parameter",l_par);
	$(tmp_button_plus).data("data_input",$(l_par_div).data("data_input"));
	$(tmp_button_plus).data("container",tmp_group);
	
	if(l_count>=l_par.max_value_count) $(tmp_button_plus).attr("disabled","disabled");
	
	$(tmp_group).append(tmp_button_plus);
	
	
	$(tmp_button_plus).click(function(event)
	{
		var tmp_par=$(event.target).data("user_parameter");
		var tmp_count=$(event.target).data("data_count");
		var tmp_data=$(event.target).data("data_input");
		var tmp_div=$(event.target).data("container");
		
		var tmp=tmp_count[tmp_par.code];
		
		if(tmp<tmp_par.max_value_count)
		{
			tmp_data[tmp_par.code][tmp]=null;

			tmp_count[tmp_par.code]=tmp+1;
			if(tmp_par.type==="integer") draw_general_object_dialog_params_integer(tmp_par,	tmp_data,tmp_div,tmp);
			if(tmp_par.type==="float") draw_general_object_dialog_params_float(tmp_par,	tmp_data,tmp_div,tmp);

			if(tmp+1==tmp_par.max_value_count) $(event.target).attr("disabled","disabled");
		}
		else $(event.target).attr("disabled","disabled");
		
	});
		
	
//	$(tmp_button_cancel).data("dialog_div",tmp_div);

	
}

function draw_general_object_dialog(l_event,l_div)
{
	$(l_div).children().hide();
	
	var l_action=$(l_event.target).data("object_actions");
	
	//Окно ввода, название и предупреждение:
	var tmp_div=$("<div class=\"general_object_dialog\"></div>");
	$(tmp_div).css({"top": $(l_div).scrollTop()+20});
	$(tmp_div).attr("id","dialog");

	
	$(l_div).append(tmp_div);
	
	if ("warning" in l_action) 
	{
		$(tmp_div).append("<p class=\"general_object_dialog_warning\">"+ l_action.warning+"</p>"); 	
	}

	//параметры ввода
	if("user_params" in l_action)
	{
		//тут мы храним все данные введенные в формах
		$(tmp_div).data("data_input",{});
		$(tmp_div).data("data_count",{});

		
		var i=0;
		for(i=0;i<l_action.user_params.length;i++)
		{
			draw_general_object_dialog_params(l_action.user_params[i],tmp_div);
		}
	}	

	//Кнопки подтверждения, отмены.
	var tmp_button_ok=$("<button class=\"general_object_button_dialog\"> Ok! </button>");
	$(tmp_button_ok).data("action",l_action);
	$(tmp_button_ok).data("data",tmp_div);
	$(tmp_button_ok).data("general_object_code",$(l_event.target).data("general_object_code"));

	$(tmp_button_ok).click(function(event)
	{
		var tmp_action=$(event.target).data("action");
		var tmp_div=$(event.target).data("data");
		
		var tmp_send = {};
		tmp_send.object_code=$(event.target).data("general_object_code");
		tmp_send.action_code=tmp_action.code;
		tmp_send.params=tmp_action.params;

		if("user_params" in tmp_action)
		{
			tmp_send.user_params={};
			
			var tmp_data=$(tmp_div).data("data_input");	
			var tmp_count=$(tmp_div).data("data_count");	
			
			var i=0,j=0;
			for(i=0;i<tmp_action.user_params.length;i++)
			{
				tmp_send.user_params[tmp_action.user_params[i].code]=[];
				for(j=0;j<tmp_count[tmp_action.user_params[i].code];j++)
				{				
					if(tmp_data[tmp_action.user_params[i].code][j]!=null) 
					{
						tmp_send.user_params[tmp_action.user_params[i].code].push(tmp_data[tmp_action.user_params[i].code][j]);
					}
					else
					{
						if(j+1<=tmp_action.user_params[i].min_value_count )
						{
							alert("Проверьте введенные данные!");
							return;								
						}						
					}
				}
			}
			
			alert(JSON.stringify(tmp_send));
		}		
		
	});
	
	
	
	var tmp_button_cancel=$("<button class=\"general_object_button_dialog\"> Cancel! </button>");
	$(tmp_button_cancel).data("general_div",l_div);
	$(tmp_button_cancel).data("dialog_div",tmp_div);
	
	$(tmp_button_cancel).click(function(event)
	{
		var l_div=$(event.target).data("general_div");
		var tmp_div=$(event.target).data("dialog_div");
		
		$(l_div).children().show();
		$(tmp_div).remove();
	});
	
	var tmp_container=$("<div class=\"general_object_button_dialog_container\"></div>");
	
	$(tmp_container).append(tmp_button_ok);
	$(tmp_container).append(tmp_button_cancel);
	$(tmp_div).append(tmp_container);
	
}

function draw_general_object_text_attr(l_attr,l_cont,l_style)
{
	if(l_attr.hidden != true)
	{
		var tmp_val;
		
		if("value_description" in  l_attr) tmp_val=l_attr.value_description;
		else tmp_val=l_attr.value;
		
		if("name" in  l_attr )
		{
			$(l_cont).append("<p class=" + l_style + "><b>"+l_attr.name+"</b> : " +tmp_val +" </p>");
		}
		else
		{
			$(l_cont).append("<p class="+ l_style + ">"+tmp_val +" </p>");
		}
	}
}

function draw_general_object_button(l_act,l_code,l_cont,l_style)
{
	if("name" in  l_act )
	{
		var tmp_button=$("<button class="+ l_style+ ">"+l_act.name+"</button>");
		$(tmp_button).data("object_actions",l_act);
		//код объекта от которого будет совершаться действие... 
		$(tmp_button).data("general_object_code",l_code);

		if(l_act.disabled==true) $(tmp_button).attr("disabled","disabled");  
		$(l_cont).append(tmp_button);
	}
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
					draw_general_object_text_attr(l_object.attributes[tmp_attr],tmp_group,"general_object_desc");
					l_used_keys.push(tmp_attr);
				}
			}	

			if("actions" in tmp[i])
			{
				for(j=0;j<tmp[i].actions.length;j++)
				{
					var tmp_attr=tmp[i].actions[j];
					draw_general_object_button(l_object.actions[tmp_attr],tmp_attr,tmp_group,"general_object_button");
					l_used_actions.push(tmp_attr);
				}			
			}
			$(l_div).append(tmp_group);
		} 
	}		
	
	//рисуем атрибуты без темплейта. От таких надо избавляться.
	$.each(l_object.attributes, function(l_key,l_value)
	{
		if( $.inArray(l_key,l_used_keys) <0)
		{
			draw_general_object_text_attr(l_value,l_div,"general_object_desc");
		}
	});
	
	//рисуем кнопки без темплейта. От таких надо избавляться.
	$.each(l_object.actions, function(l_key,l_value)
	{
		if( $.inArray(l_key,l_used_actions) <0)
		{
			draw_general_object_button(l_value,l_key,l_div,"general_object_button");
		}

	});
	
//универсальный обработчик нажатий кнопок
	$(".general_object_button").click(function(event)
	{
		draw_general_object_dialog(event, $("#objects_div"));
	});	
	
} 

