//тут про почту
function draw_mail(l_div)
{
	$(l_div).empty();
	$(l_div).append("<p class=\"general_object_name\">Ваша почта</p>");
	
	var l_search=$("<div class=\"mail_search\"></div>");
	$(l_div).append(l_search);
	var l_raw=$("<div class=\"mail_search_raw\"></div>");
	$(l_search).append(l_raw);
	
	
	$(l_raw).append("<div class=\"mail_search_digit\">Искать по автору</div>");
	$(l_raw).append("<div class=\"mail_search_digit\">Искать по теме</div>");
	
	l_raw=$("<div class=\"mail_search_raw\"></div>");
	$(l_search).append(l_raw);
	
	var l_input1=$("<input type=\"text\" class=\"mail_search_input\"></input>");
	$(l_raw).append(l_input1);
	
	var l_input2=$("<input type=\"text\" class=\"mail_search_input\"></input>");
	$(l_raw).append(l_input2);
	
	$(l_input1).data("input1",l_input1);
	$(l_input1).data("input2",l_input2);
	
	$(l_input2).data("input1",l_input1);
	$(l_input2).data("input2",l_input2);
	
	$(l_input1).change(function(event){ search_mail(event); });
	$(l_input2).change(function(event){ search_mail(event); });
	
	$(".mail_search_input").on('keyup', function (event) {
	    if (event.keyCode == 13) {
	        search_mail(event);
	    }
	});



	var l_mail_div=$("<div style=\"width:100%\"></div>");
	$(l_input1).data("mail_div",l_mail_div);
	$(l_input2).data("mail_div",l_mail_div);
		
	$(l_div).append(l_mail_div);
	draw_mail_list(l_mail_div,g_mail);

}


function search_mail(event)
{

	var l_inp1=$(event.target).data("input1").val();
	var l_inp2=$(event.target).data("input2").val();
	
	var l_mail_div=	$(event.target).data("mail_div");

	l_mail0=[];
	l_mail1=[];
	l_mail2=[];
	
	if(l_inp1.length>0) l_mail0=g_mail;
	else l_mail1=g_mail; 
	
	for(var i=0; i<l_mail0.length;i++)
	{
		if(l_mail0[i].attributes.mail_author.value_description.search(l_inp1)>=0) l_mail1.push(l_mail0[i]);
	}

	if(l_inp2.length>0) 
	{
		for(i=0; i<l_mail1.length;i++)
		{
			if(l_mail1[i].attributes.mail_title.value.search(l_inp2)>=0) l_mail2.push(l_mail1[i]);
		}
	}
	else l_mail2=l_mail1;

	draw_mail_list(l_mail_div,l_mail2);
}


function draw_mail_list(l_div,l_mail)
{	
	$(l_div).empty();

	var l_table=$("<div class=\"mail_table\"></div>");
	$(l_div).append(l_table);	
	
	var l_raw=$("<div class=\"mail_table_head\"></div>");
	$(l_table).append(l_raw);
	
	$(l_raw).append("<div class=\"mail_table_digit_date\">Дата</div>");
	$(l_raw).append("<div class=\"mail_table_digit_name\">От кого</div>");
	$(l_raw).append("<div class=\"mail_table_digit_theme\">Тема</div>");
	
	var l_digit;
	for(var i=0;i<l_mail.length;i++)
	{
		l_raw=$("<div class=\"mail_table_raw\"></div>");
		$(l_raw).data("mail_object",l_mail[i]);
		$(l_raw).data("input_div",l_div);
		$(l_table).append(l_raw);

//		alert("Object: " + JSON.stringify($(l_raw).data("mail_object")));


		l_digit=$("<div class=\"mail_table_digit_date\">"+ l_mail[i].attributes.mail_send_time.value + "</div>");
		$(l_raw).append(l_digit);

		l_digit=$("<div class=\"mail_table_digit_name\">"+ l_mail[i].attributes.mail_author.value_description + "</div>");
		$(l_raw).append(l_digit);
				
		l_digit=$("<div class=\"mail_table_digit_theme\">"+ l_mail[i].attributes.mail_title.value + "</div>");
		$(l_raw).append(l_digit);
		
		$(l_raw).click(function (event)
		{ 
			$(event.target).css({"border":"3px solid green"});
			var tmp_obj=$(event.target).data("mail_object");
			var tmp_callback_div=$(event.target).data("input_div");
			
			draw_general_object(tmp_obj,tmp_callback_div);
			event.stopPropagation();
		});
 	}	
}
