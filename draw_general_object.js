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

//закрыватель всех окошечек с вводом. 
function callback_general_object_dialog_params_del(event)
{
	var tmp_input=$(event.target).data("data_input");
	var tmp_button_plus=tmp_input.plus;
	var tmp_data=tmp_input.value;
	var tmp_data_link=$(event.target).data("data_link");

	for(var i=0;i<tmp_data.length;i++)
	{	
		if(i==tmp_data_link.num)
		{
			tmp_data.splice(i,1);	
		}
	}
	for(i=0;i<tmp_data.length;i++)
	{	
		tmp_data[i].num=i;
	}
	
	$(event.target).parent().remove();
	$(tmp_button_plus).attr("disabled",false);
}

//закрыватель всех окошечек с вводом. 
function draw_general_object_dialog_params_del(l_div,l_input,l_data)
{
	var tmp_del_button=$("<div class=\"general_object_dialog_input_del_button\">×</div>"); 
	
	$(tmp_del_button).data("data_input",l_input);
	$(tmp_del_button).data("data_link",l_data);
	$(l_div).append(tmp_del_button); 
	$(tmp_del_button).click(function(event){callback_general_object_dialog_params_del(event);});

}	

function callback_general_object_dialog_params_string(event)
{
	var tmp_event=$(event.target);
	var tmp=tmp_event.val();

	var tmp_input=tmp_event.data("data_input");
	var tmp_default=tmp_event.data("input_default");
	var tmp_par=tmp_input.user_param;
	var tmp_data=tmp_event.data("data_link");

	//если все стереть, то вернется дефолтное значение
	if(tmp.length==0) 
	{
		tmp=tmp_default;
		tmp_event.val(tmp);
	}
	
	if("data" in tmp_par)
	{
		if(tmp.length >=tmp_par.data.min_length) 
		{
			tmp_data.value=tmp;
			$(event.target).css({"border-color":"green"});	
		}	
		else
		{
			tmp_data.value=null;
			$(event.target).css({"border-color":"red"});	
		}	
	}
	else
	{
		tmp_data.value=tmp;
		$(event.target).css({"border-color":"green"});	
	}	
//	alert(JSON.stringify(tmp_input.value));	
}


function draw_general_object_dialog_params_string(l_input)
{
	var l_data=l_input.value;
	var l_par=l_input.user_param;
	var l_num=l_input.value.length;
	var l_div=l_input.container;
	
	var tmp_cont;
	var tmp_input;
	
	l_input.value[l_num]={"num":l_num, "value": null};
//	alert("VOT: "+ JSON.stringify(l_input.value[l_num]));	
	
	//если мултилайн окно ввода - контейнер широкий, если нет - узкий.  
	if(l_par.data.multiline==true)
	{
		tmp_cont=$("<div class=\"general_object_dialog_input_cont_multiline\"></div>");
		tmp_input=$("<textarea type=\"text\" class=\"general_object_dialog_textarea\"></textarea>");
		$(tmp_input).attr("rows",10);
	}
	else 
	{
		tmp_cont=$("<div class=\"general_object_dialog_input_cont_singleline\"></div>");
		tmp_input=$("<input type=\"text\" class=\"general_object_dialog_textarea\"></input>");
	}
	
	//если диалог обязательный, то зеленая точка, если нет, то крестик. 
	if(l_num<l_par.min_value_count)
	{
		 $(tmp_cont).append("<div class=\"general_object_dialog_input_dot\">●</div>"); 
	}
	else 
	{
		draw_general_object_dialog_params_del(tmp_cont,l_input,l_input.value[l_num]);
	}

	//заполняем дефолтные значения
	var tmp_default;
	if(l_par.default_value !== undefined)
	{ 
		if($.isArray(l_par.default_value)==true)
		{ 
			if(l_num<l_par.default_value.length)
			{
				tmp_default=l_par.default_value[l_num]; 
			}
			else tmp_default=""; 		
		}	
		else 
		{
			if(l_num==0)
			{
				tmp_default=l_par.default_value; 
			}
			else tmp_default=""; 
		}
	}
	else tmp_default="";
	
	//максимальная длина вводимой строки. 	
	if(l_par.data.max_length != undefined ) 
	{
		$(tmp_input).attr("maxlength",l_par.data.max_length);
		tmp_default=tmp_default.substring(0,l_par.data.max_length);	
	}
	$(tmp_input).val(tmp_default);

	//добавляем данные соответствующие инпуту в основной массив
	l_input.value[l_num].value=tmp_default;
		
	//данные для обработки инпута
	$(tmp_input).data("data_input",l_input);
	$(tmp_input).data("input_default",tmp_default);
	$(tmp_input).data("data_link",l_input.value[l_num]);
									
	$(tmp_input).change(function(event)
	{
		callback_general_object_dialog_params_string(event);
	});	
	
	$(tmp_cont).append(tmp_input);
	$(l_div).append(tmp_cont);
	$(tmp_input).trigger("change");
}

function callback_general_object_dialog_params_float(event)
{
	var tmp_event=$(event.target);
	var tmp=parseFloat($(event.target).val());

	var tmp_input=tmp_event.data("data_input");
	var tmp_default=tmp_event.data("input_default");
	var tmp_par=tmp_input.user_param;
	var tmp_data=tmp_event.data("data_link");
	
	if(isNaN(tmp)==false)
	{
		if("data" in tmp_par)
		{
			if(tmp >=tmp_par.data.min_value && tmp <= tmp_par.data.max_value ) 
			{
				tmp_data.value=tmp;
				$(event.target).css({"border-color":"green"});	
			}	
			else
			{
				tmp_data.value=null;
				$(event.target).css({"border-color":"red"});	
			}	
		}
		else
		{
			tmp_data.value=tmp;
			$(event.target).css({"border-color":"green"});	
		}
		$(event.target).val(tmp);
	}
	else
	{
		//если все стереть, то вернется дефолтное значение
		tmp=tmp_default;
		$(event.target).css({"border-color":"green"});
		$(event.target).val(tmp);
	}
}

function draw_general_object_dialog_params_float(l_input)
{
	var l_data=l_input.value;
	var l_par=l_input.user_param;
	var l_num=l_input.value.length;
	var l_div=l_input.container;

	var tmp_cont=$("<div class=\"general_object_dialog_input_cont_singleline\"></div>");
	var tmp_input=$("<input type=\"text\" class=\"general_object_dialog_input\"></input>");
	
	l_input.value[l_num]={"num":l_num, "value": null};		
	//если диалог обязательный, то зеленая точка, если нет, то крестик. 
	if(l_num<l_par.min_value_count) $(tmp_cont).append("<div class=\"general_object_dialog_input_dot\">●</div>"); 
	else 
	{
		draw_general_object_dialog_params_del(tmp_cont,l_input,l_input.value[l_num]);
	}
	
	//заполняем дефолтные значения
	var tmp_default;
	if($.isArray(l_par.default_value)==true)
	{ 
		if(l_num<l_par.default_value.length)
			{
				tmp_default=l_par.default_value[l_num]; 
			}
			else tmp_default=""; 		
	}	
	else 
	{
		if(l_num==0)
		{
			tmp_default=l_par.default_value; 
		}
		else tmp_default=""; 
	}
	
	$(tmp_input).val(tmp_default);
	
	//добавляем данные соответствующие инпуту в основной массив
	l_input.value[l_num].value=tmp_default;
		
	//данные для обработки инпута
	$(tmp_input).data("data_input",l_input);
	$(tmp_input).data("input_default",tmp_default);
	$(tmp_input).data("data_link",l_input.value[l_num]);
									
	$(tmp_input).change(function(event)
	{
		callback_general_object_dialog_params_float(event);
	});	
	
	$(tmp_cont).append(tmp_input);
	$(l_div).append(tmp_cont);
	$(tmp_input).trigger("change");
}

function callback_general_object_dialog_params_integer(event)
{
	var tmp_event=$(event.target);
	var tmp=parseInt($(event.target).val());

	var tmp_input=tmp_event.data("data_input");
	var tmp_default=tmp_event.data("input_default");
	var tmp_par=tmp_input.user_param;
	var tmp_data=tmp_event.data("data_link");
	
	if(isNaN(tmp)==false)
	{
		if("data" in tmp_par)
		{
			if(tmp >=tmp_par.data.min_value && tmp <= tmp_par.data.max_value ) 
			{
				tmp_data.value=tmp;
				$(event.target).css({"border-color":"green"});	
			}	
			else
			{
				tmp_data.value=null;
				$(event.target).css({"border-color":"red"});	
			}	
		}
		else
		{
			tmp_data.value=tmp;
			$(event.target).css({"border-color":"green"});	
		}
		$(event.target).val(tmp);
	}
	else
	{
		//если все стереть, то вернется дефолтное значение
		tmp=tmp_default;
		$(event.target).css({"border-color":"green"});
		$(event.target).val(tmp);
	}
}

function draw_general_object_dialog_params_integer(l_input)
{
	var l_data=l_input.value;
	var l_par=l_input.user_param;
	var l_num=l_input.value.length;
	var l_div=l_input.container;

	var tmp_cont=$("<div class=\"general_object_dialog_input_cont_singleline\"></div>");
	var tmp_input=$("<input type=\"text\" class=\"general_object_dialog_input\"></input>");
	
	l_input.value[l_num]={"num":l_num, "value": null};		
	//если диалог обязательный, то зеленая точка, если нет, то крестик. 
	if(l_num<l_par.min_value_count) $(tmp_cont).append("<div class=\"general_object_dialog_input_dot\">●</div>"); 
	else 
	{
		draw_general_object_dialog_params_del(tmp_cont,l_input,l_input.value[l_num]);
	}
	
	//заполняем дефолтные значения
	var tmp_default;
	if($.isArray(l_par.default_value)==true)
	{ 
		if(l_num<l_par.default_value.length)
			{
				tmp_default=l_par.default_value[l_num]; 
			}
			else tmp_default=""; 		
	}	
	else 
	{
		if(l_num==0)
		{
			tmp_default=l_par.default_value; 
		}
		else tmp_default=""; 
	}
	
	$(tmp_input).val(tmp_default);
	
	//добавляем данные соответствующие инпуту в основной массив
	l_input.value[l_num].value=tmp_default;
		
	//данные для обработки инпута
	$(tmp_input).data("data_input",l_input);
	$(tmp_input).data("input_default",tmp_default);
	$(tmp_input).data("data_link",l_input.value[l_num]);
									
	$(tmp_input).change(function(event)
	{
		callback_general_object_dialog_params_integer(event);
	});	
	
	$(tmp_cont).append(tmp_input);
	$(l_div).append(tmp_cont);
	$(tmp_input).trigger("change");
}

function draw_general_object_dialog_params_object_dropdown_list(l_div, l_input_div, l_input, l_data)
{
	var tmp_div;
		
	for(var i=0;i<l_input.length;i++)
	{
		tmp_div=$("<div class=\"general_object_list_element\">"+l_input[i].name+"</div>");
		$(tmp_div).data("input",l_input[i]);
		$(tmp_div).data("data",l_data);
		$(tmp_div).data("input_div",l_input_div);

		$(l_div).append(tmp_div);
		$(tmp_div).click(function (event)
		{ 
			var tmp_input=$(event.target).data("input");
			var tmp_data=$(event.target).data("data");
			var tmp_input_div=$(event.target).data("input_div");

			$(event.target).parent().hide(); 
			$(tmp_input_div).text(tmp_input.name);
			$(tmp_input_div).css({"border-color":"green"});	

			tmp_data.value=tmp_input.code;
			
		});	
	}		
}

function draw_general_object_dialog_params_object_dropdown(l_div, l_data, l_input, l_default)
{
	var tmp_dropdown_container=$("<div class=\"general_object_dialog_dropdown_cont\"></div>");
	var tmp_input=$("<div type=\"text\" class=\"general_object_dialog_dropdown_input\"></div>");
	var tmp_dropdown=$("<div class=\"general_object_dialog_dropdown\"></div>");

	$(tmp_dropdown_container).append(tmp_input);
	$(tmp_dropdown_container).append(tmp_dropdown);
	$(l_div).append(tmp_dropdown_container);
	
	$(tmp_input).click(function(event){ $(event.target).parent().children().show(); });
	
	draw_general_object_dialog_params_object_dropdown_list(tmp_dropdown,tmp_input,l_input,l_data);

	if(l_default!==undefined) 
	{
		for(var i=0;i<l_input.length;i++)
		{
			if(l_default==l_input[i].code)
			{
				$(tmp_input).text(l_input[i].name);
				l_data.value=l_default;
				$(tmp_input).css({"border-color":"green"});	
				break;
			}
		}
	}
	else
	{
		l_data.value=null;
		$(tmp_input).css({"border-color":"red"});	
	}
}

function draw_general_object_dialog_params_object(l_input)
{
	var l_data=l_input.value;
	var l_par=l_input.user_param;
	var l_num=l_data.length;
	var l_div=l_input.container;

	var tmp_cont=$("<div class=\"general_object_dialog_input_cont_singleline\"></div>");
	$(l_div).append(tmp_cont);
	
	l_data[l_num]={"num":l_num, "value": null};
	//если диалог обязательный, то зеленая точка, если нет, то крестик. 
	if(l_num<l_par.min_value_count) $(tmp_cont).append("<div class=\"general_object_dialog_input_dot\">●</div>"); 
	else 
	{
		draw_general_object_dialog_params_del(tmp_cont,l_input,l_data[l_num]);
	}
	
	tmp_data_input=
	[
		{"name":"111", "code":111},
		{"name":"222", "code":222},
		{"name":"333", "code":333},
		{"name":"444", "code":444}
	];
		
	//заполняем дефолтные значения
	var tmp_default;
	if($.isArray(l_par.default_value)==true)
	{ 
		if(l_num<l_par.default_value.length)
			{
				tmp_default=l_par.default_value[l_num]; 
			}
			else tmp_default=undefined; 		
	}	
	else 
	{
		if(l_num==0)
		{
			tmp_default=l_par.default_value; 
		}
		else tmp_default=undefined; 
	}
	
	draw_general_object_dialog_params_object_dropdown(tmp_cont,l_data[l_num],tmp_data_input,tmp_default);
}



function draw_general_object_dialog_params(l_par,l_par_div)
{
	
	//отдельный див для всех групп вводимых параметров
	var tmp_group=$("<div class=\"general_object_group\"></div>").text("");
	$(tmp_group).append("<p class=\"general_object_description\">" + l_par.description+"</p><hr>");	
	$(l_par_div).append(tmp_group);	
	
	$(l_par_div).data("data_input")[l_par.code]={ "name": l_par.code,
												  "type": l_par.type,
												  "user_param": l_par, 	
												  "value":[],
												  "plus": null,
												  "container":tmp_group};
	var tmp_data=$(l_par_div).data("data_input")[l_par.code];											  		
	
	//сколько рисовать полей ввода
	var l_count;
	if(l_par.min_value_count==0) l_count=1; 
	else l_count=l_par.min_value_count;
	if($.isArray(l_par.default_value)==true && l_par.default_value.length > l_count ) l_count=l_par.default_value.length;  
	
	//рисуем окошечки для вводимых параметров
	for( var i=0;i<l_count;i++)
	{
		if(l_par.type==="integer") draw_general_object_dialog_params_integer(tmp_data);
		if(l_par.type==="float") draw_general_object_dialog_params_float(tmp_data);
		if(l_par.type==="string") draw_general_object_dialog_params_string(tmp_data);
		if(l_par.type==="objects") draw_general_object_dialog_params_object(tmp_data);
	}
	
	draw_general_object_dialog_params_plus(tmp_data);	
}

function draw_general_object_dialog_params_plus(tmp_input)
{	
	//кнопочка добавления окошечек параметров. 
	var tmp_button_plus=$("<button class=\"general_object_plus_button_dialog\">+</button>");
	if(tmp_input.value.length>tmp_input.user_param.max_value_count) $(tmp_button_plus).attr("disabled","disabled");
	$(tmp_input.container).append(tmp_button_plus);

	tmp_input.plus=tmp_button_plus;		
	$(tmp_button_plus).data("data_input",tmp_input);

	$(tmp_button_plus).click(function(event)
	{
		var tmp_input=$(event.target).data("data_input");

		if(tmp_input.user_param.max_value_count===undefined ) tmp_max=100;
		else tmp_max=tmp_input.user_param.max_value_count;
		
		if(tmp_input.value.length<tmp_max)
		{
			if(tmp_input.value.length+1==tmp_input.user_param.max_value_count) $(event.target).attr("disabled",true);
			
			if(tmp_input.type==="integer") draw_general_object_dialog_params_integer(tmp_input);
			if(tmp_input.type==="float") draw_general_object_dialog_params_float(tmp_input);
			if(tmp_input.type==="string") draw_general_object_dialog_params_string(tmp_input);
			if(tmp_input.type==="objects") draw_general_object_dialog_params_object(tmp_input);

		}
	});
}

function draw_general_object_dialog_ok(l_div,l_data,l_action,l_code)
{
	//Кнопки подтверждения, отмены.
	var tmp_button_ok=$("<button class=\"general_object_button_dialog\"> Ok! </button>");
	$(l_div).append(tmp_button_ok);
	
	$(tmp_button_ok).data("action",l_action);
	$(tmp_button_ok).data("data",l_data);
	$(tmp_button_ok).data("general_object_code",l_code);

	$(tmp_button_ok).click(function(event)
	{
		var tmp_action=$(event.target).data("action");
		var tmp_data=$(event.target).data("data");
		
		var tmp_send = {};
		tmp_send.object_code=$(event.target).data("general_object_code");
		tmp_send.action_code=tmp_action.code;
		tmp_send.params=tmp_action.params;

		if("user_params" in tmp_action)
		{
			tmp_send.user_params={};			
			var tmp_switch=0;
			
			$.each(tmp_data, function(l_key,l_value)
			{
				tmp_send.user_params[l_key]=[];
				for(var i=0;i<l_value.value.length;i++)
				{
					if(l_value.value[i].value===null)
					{
						alert("Проверьте вводимые данные!");
						tmp_switch=1;		
						return false;
					}
					else
					{
						tmp_send.user_params[l_key].push(l_value.value[i].value);
					}
				}
			});			
		}	
		if(tmp_switch==0) alert(JSON.stringify(tmp_send));		
	});	
}	

function draw_general_object_dialog(l_event,l_div)
{
	$(l_div).children().hide();
	
	var l_action=$(l_event.target).data("object_actions");
	var l_code=$(l_event.target).data("general_object_code");

	
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

		var i=0;
		for(i=0;i<l_action.user_params.length;i++)
		{
			draw_general_object_dialog_params(l_action.user_params[i],tmp_div);
		}
	}	

	//Ok and Cancel buttons	container
	var tmp_container=$("<div class=\"general_object_button_dialog_container\"></div>");
	$(tmp_div).append(tmp_container);
	
	//ok button
	draw_general_object_dialog_ok(tmp_container,$(tmp_div).data("data_input"),l_action,l_code)
	
	//cancel button
	var tmp_button_cancel=$("<button class=\"general_object_button_dialog\"> Cancel! </button>");
	$(tmp_button_cancel).data("general_div",l_div);
	$(tmp_button_cancel).data("dialog_div",tmp_div);
	$(tmp_button_cancel).click(function(event)
	{
		$($(event.target).data("general_div")).children().show();
		$($(event.target).data("dialog_div")).remove();
	});
	$(tmp_container).append(tmp_button_cancel);	
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
					draw_general_object_button(l_object.actions[tmp_attr],l_object.code,tmp_group,"general_object_button");
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

