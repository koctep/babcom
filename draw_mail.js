//тут про почту

function draw_mail(l_div)
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
	for(var i=0;i<g_mail.length;i++)
	{
		l_raw=$("<div class=\"mail_table_raw\"></div>");
		$(l_raw).data("mail_object",g_mail[i]);
		$(l_raw).data("input_div",l_div);
		$(l_table).append(l_raw);

//		alert("Object: " + JSON.stringify($(l_raw).data("mail_object")));


		l_digit=$("<div class=\"mail_table_digit_date\">"+ g_mail[i].attributes.mail_send_time.value + "</div>");
		$(l_raw).append(l_digit);

		l_digit=$("<div class=\"mail_table_digit_name\">"+ g_mail[i].attributes.mail_author.value_description + "</div>");
		$(l_raw).append(l_digit);
				
		l_digit=$("<div class=\"mail_table_digit_theme\">"+ g_mail[i].attributes.mail_title.value + "</div>");
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
