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



/*		function drawText(canvasContext, x, y, size,color, align, text) 
		{           
			canvasContext.strokeStyle=color;
			canvasContext.fillStyle=color;		
			canvasContext.linewidth=1;
			canvasContext.textAlign=align;
			canvasContext.textBaseline="middle";
		
			canvasContext.font = size+"px Monospace";
			canvasContext.strokeText(text, x, y);
			canvasContext.fillText(text, x, y);

		}	
		
		
		function drawRect(canvasContext, x, y, color,colorb) 
		{           
			
			var scx=sysMap.width/20,scy=sysMap.height/20;
			canvasContext.beginPath();
			var tmp=canvasContext.rect(x*scx,y*scy,scx,scy);
			
			
			canvasContext.strokeStyle=color;
			canvasContext.fillStyle=colorb;		
			canvasContext.linewidth=3;
			canvasContext.closePath();
			
			canvasContext.fill();
			canvasContext.stroke();

		}	
		
			
		function drawMap()
		{
			ctx.clearRect(0,0,sysMap.width,sysMap.height);
			
			ctx.strokeStyle="#666688";
			ctx.lineWidth=1;	
			var i;
			for(i = 0; i <= 20; i++)
			{	
				ctx.beginPath();
				ctx.moveTo(0, i*sysMap.height/20); 
				ctx.lineTo(sysMap.width, i*sysMap.height/20);
				ctx.closePath();
				ctx.stroke();	
				drawText(ctx,2,30+i*sysMap.height/20,10,"#ffffff","left",i);				
			}
		
			for(i = 0; i <= 20; i++)
			{	
				ctx.beginPath();
				ctx.moveTo(i*sysMap.width/20,0); 
				ctx.lineTo(i*sysMap.width/20,sysMap.height );
				ctx.closePath();
				ctx.stroke();	
				drawText(ctx,32+i*sysMap.width/20,8,10,"#ffffff","right",i);				
			}
			
			var tmpSysObj=sysObj[destsystem].objects;
						
			for(i=0;i<tmpSysObj.length;i++)
			{
				ctx.drawImage(tmpSysObj[i].lnk,tmpSysObj[i].x*sysMap.width/20+2,tmpSysObj[i].y*sysMap.height/20+2,sysMap.width/20-4,sysMap.height/20-4);		
				
			}
			
			
			if(destsystem==cursystem) drawRect(ctx,mx,my,"rgba(255,255,255,1)","rgba(255,255,255,0.3)");
			if((nx==mx && ny==my) || nx<0 || ny<0) {} else drawRect(ctx,nx,ny,"rgba(0,255,0,1)","rgba(0,255,0,0.3)");

		
		}	
				
		function getServerData()
		{
			$.ajaxSetup({contentType: "application/json"});
			$.post(
			LOGINSERV,
			  JSON.stringify({
				"method": "get",
					"object_id": 1,
					"table": "kopernik_sys",
					"id" : 732	
					}),
					function(data,status)
					{
//						$("#pbody2").html("Data: " + data + "<br> Status: " + status + "<br> Parsed Data: " + JSON.parse(data));
					
						var tmpdata=JSON.parse(JSON.parse(data));
						
						if(tmpdata.meta.mark>shipmark || shipmark==0 || tmpdata.meta.mark==0 )
						{
							maindata=tmpdata.data;
							shipmark=tmpdata.meta.mark;

//							$("#pbody2").html("<div style=\"color:green;\"> Updated!</div>");	
							updateButtons();
						}
						else 
						{
//							$("#pbody2").html("<div style=\"color:red;\"> No Change!</div>");	
						}
					});				
			}
			
		function updateButtons()
		{
			var j=0,i=0;
			var tmpnames=["hyperdrive","hypertransm1","hypertransm2","mainjet1","mainjet2"];

			var col=["white","lightgreen","rgba(255,0,0,1)","magenta"];
			var backcol=["rgba(255,255,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)","rgba(255,0,255,0.5)"];

			sysfuncs=1;	
			for(i=0;i<tmpnames.length;i++)
			{
				for(j=0;j<maindata.length;j++)
				{
					if(tmpnames[i]==maindata[j].sysclass)
					{
						if(maindata[j].sysdamage==0)
						{
				function drawText(canvasContext, x, y, size,color, align, text) 
		{           
			canvasContext.strokeStyle=color;
			canvasContext.fillStyle=color;		
			canvasContext.linewidth=1;
			canvasContext.textAlign=align;
			canvasContext.textBaseline="middle";
		
			canvasContext.font = size+"px Monospace";
			canvasContext.strokeText(text, x, y);
			canvasContext.fillText(text, x, y);

		}	
		
		
		function drawRect(canvasContext, x, y, color,colorb) 
		{           
			
			var scx=sysMap.width/20,scy=sysMap.height/20;
			canvasContext.beginPath();
			var tmp=canvasContext.rect(x*scx,y*scy,scx,scy);
			
			
			canvasContext.strokeStyle=color;
			canvasContext.fillStyle=colorb;		
			canvasContext.linewidth=3;
			canvasContext.closePath();
			
			canvasContext.fill();
			canvasContext.stroke();

		}	
		
			
		function drawMap()
		{
			ctx.clearRect(0,0,sysMap.width,sysMap.height);
			
			ctx.strokeStyle="#666688";
			ctx.lineWidth=1;	
			var i;
			for(i = 0; i <= 20; i++)
			{	
				ctx.beginPath();
				ctx.moveTo(0, i*sysMap.height/20); 
				ctx.lineTo(sysMap.width, i*sysMap.height/20);
				ctx.closePath();
				ctx.stroke();	
				drawText(ctx,2,30+i*sysMap.height/20,10,"#ffffff","left",i);				
			}
		
			for(i = 0; i <= 20; i++)
			{	
				ctx.beginPath();
				ctx.moveTo(i*sysMap.width/20,0); 
				ctx.lineTo(i*sysMap.width/20,sysMap.height );
				ctx.closePath();
				ctx.stroke();	
				drawText(ctx,32+i*sysMap.width/20,8,10,"#ffffff","right",i);				
			}
			
			var tmpSysObj=sysObj[destsystem].objects;
						
			for(i=0;i<tmpSysObj.length;i++)
			{
				ctx.drawImage(tmpSysObj[i].lnk,tmpSysObj[i].x*sysMap.width/20+2,tmpSysObj[i].y*sysMap.height/20+2,sysMap.width/20-4,sysMap.height/20-4);		
				
			}
			
			
			if(destsystem==cursystem) drawRect(ctx,mx,my,"rgba(255,255,255,1)","rgba(255,255,255,0.3)");
			if((nx==mx && ny==my) || nx<0 || ny<0) {} else drawRect(ctx,nx,ny,"rgba(0,255,0,1)","rgba(0,255,0,0.3)");

		
		}	
				
		function getServerData()
		{
			$.ajaxSetup({contentType: "application/json"});
			$.post(
			LOGINSERV,
			  JSON.stringify({
				"method": "get",
					"object_id": 1,
					"table": "kopernik_sys",
					"id" : 732	
					}),
					function(data,status)
					{
//						$("#pbody2").html("Data: " + data + "<br> Status: " + status + "<br> Parsed Data: " + JSON.parse(data));
					
						var tmpdata=JSON.parse(JSON.parse(data));
						
						if(tmpdata.meta.mark>shipmark || shipmark==0 || tmpdata.meta.mark==0 )
						{
							maindata=tmpdata.data;
							shipmark=tmpdata.meta.mark;

//							$("#pbody2").html("<div style=\"color:green;\"> Updated!</div>");	
							updateButtons();
						}
						else 
						{
//							$("#pbody2").html("<div style=\"color:red;\"> No Change!</div>");	
						}
					});				
			}
			
		function updateButtons()
		{
			var j=0,i=0;
			var tmpnames=["hyperdrive","hypertransm1","hypertransm2","mainjet1","mainjet2"];

			var col=["white","lightgreen","rgba(255,0,0,1)","magenta"];
			var backcol=["rgba(255,255,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)","rgba(255,0,255,0.5)"];

			sysfuncs=1;	
			for(i=0;i<tmpnames.length;i++)
			{
				for(j=0;j<maindata.length;j++)
				{
					if(tmpnames[i]==maindata[j].sysclass)
					{
						if(maindata[j].sysdamage==0)
						{
							$("#"+maindata[j].sysclass).css({"border-color" : col[maindata[j].sysstatus],"background-color" : backcol[maindata[j].sysstatus] } );

						}
						else
						{
							$("#"+maindata[j].sysclass).css({"border-color" : col[maindata[j].sysdamage+1],"background-color" : backcol[maindata[j].sysdamage+1] } );
						}
						sysfuncs=sysfuncs*maindata[j].sysstatus;
					
					}
				}	
			}
			fillNote();
		}	

		function fillNote()
		{

			
			var tmpSysObj=sysObj[destsystem].objects;

			
			var tmpspace=["Космос","Гипер"];
			$("#ntlocspace").text("Пространство: " + tmpspace[curspace] +".");

			if(curspace==0)
			{
				$("#ntlocsys").text("Звездная система: " + sysObj[cursystem].system.name);
				$("#ntloccoord").text("Координаты: Квадрат " + mx + ", " +my +".");			
			}
			else
			{
				$("#ntlocsys").text("Звездная система: --- ");
				$("#ntloccoord").text("Координаты: Не определены!");			
			}
			
			if(destsystem>=0) $("#ntdestsys").text("Звездная система: " + sysObj[destsystem].system.name);
			else $("#ntdestsys").text("Звездная система: ---");
			

			if(nx>=0 && ny>=0) 
			{
				$("#ntdestcoord").text("Координаты: Квадрат " + nx + ", " +ny +".");

				var j=0;
				var tmpsys,tmpfind=0;

				for(j = 0; j < tmpSysObj.length; j++)
				{
					if(nx==tmpSysObj[j].x && ny==tmpSysObj[j].y) 
					{
						tmpsys=tmpSysObj[j];
						tmpfind=1;
						break;	
					}
				}

				if(tmpfind!=0)
				{
					$("#ntdestname").text("Название: " + tmpsys.name +".");
					$("#ntdestclass").text("Класс: " + tmpsys.class +".");
					$("#ntdestdesc").html("<p>" + tmpsys.desc + "</p>");
					$("#img").get(0).src=tmpsys.picname; 
				} 		
				else
				{
					$("#ntdestname").text("Отсутствуют.");
					$("#ntdestclass").text("");
					$("#ntdestdesc").html("<p> </p>");
					$("#img").get(0).src="background.jpg";
				}
	
					$("#ntdestination").text("Точка назначения: Допустимо!" );
			}
			else
			{
					$("#ntdestcoord").text("Координаты: Не заданы!");
					$("#ntdestname").text("Неопределены!");
					$("#ntdestclass").text("");
					$("#ntdestdesc").html("");
					$("#ntdestination").text("Точка назначения: Не задана!" );
					$("#img").get(0).src="background.jpg";
				
				
			}
			
			if(sysfuncs==1) $("#ntsysfunc").text("Подсистемы: Готовы!");
			else $("#ntsysfunc").text("Подсистемы: Неготовы!");
			
			
		}
		
		
		
			
			
		function clickEvent (eventInfo) 
		{
         
			if(curstatus!=0) return;
			
			var rect = sysMap.getBoundingClientRect();

			var x = eventInfo.clientX - rect.left;
            var y = eventInfo.clientY - rect.top;
	
			var scx=sysMap.width/20,scy=sysMap.height/20;

			nx = Math.floor(x/scx);
            ny = Math.floor(y/scy);
            
            drawMap();
			fillNote();


        }
		
		function setCurSystem()
		{	
			
			var k;
			
			var tmpSysObj=sysObj[destsystem].objects;	
			
			for(k = 0; k < tmpSysObj.length; k++)
			{
//				$("#pbody2").text(sysObj.length);

				var tmp=tmpSysObj[k].pic;
				tmpSysObj[k].lnk=$("#"+tmp).get(0);	
			}
		
			drawMap();
			fillNote();
		
		}
		
*/
