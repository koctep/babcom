var g_main_object_code="16x68z-14TnZm66F";
var g_meta=
{
	"data": 
	{
		"last_modified": "2016-12-27T23:00:00.000Z",
		"objects": 
		[
			{
				"code": "16x68z-14TnZm66F",
				"name": "Г'Кар"
			},
			{
				"code": "16x68z-13TnZm66F",
				"name": "Кош"
			},
			{
				"code": "16x68z-10MnZm66F",
				"name": "Письмо"
			},
			{
				"code": "16x68z-12TnZm66F",
				"name": "Лазер"
			}
		],
		"actions":
		[
			{
				"code": "send_mail",
				"name": "Написать письмо",
				"type": "mail.send",
				"params": {},
				"user_params": [
					{
						"code": "receivers",
						"type": "objects",
						"data": {
							"object_code": "receivers",
							"attribute_code": "value"
						},
						"description": "Кому",
						"min_value_count": 1
					},
					{
						"code": "title",
						"type": "string",
						"data": {
							"max_length": "100",
							"min_length": "10"
						},
						"description": "Тема",
						"min_value_count": 1,
						"max_value_count": 1
					},
					{
						"code": "body",
						"type": "string",
						"data": {
							"min_length": "1",
							"multiline": true
						},
						"description": "Сообщение",
						"min_value_count": 1,
						"max_value_count": 1
					}
				]
			}
		],
	"special": {"mail": true}
	}
};


var g_obj=
[
	{
		"code": "16x68z-12TnZm66F",
		"attributes": {
			"name": {
				"value": "Оптический квантовый генератор Л-2101"
			},
			"description": {
				"value": "Внимание! Перед использованием требуется обязательное ознакомление с правилами использования, описанными в разделе 15 главы 2 Руководства (Стандартное электротехническое оборудование, том 2. — М: Наука, 2101)"
			},
			"class": {
				"name": "Класс",
				"value": 4
			},
			"type": {
				"value": "equipment",
				"hidden": true
			},
			"length": {
				"name": "Длина",
				"value": 4.5,
				"value_description": "4,5 метра",
				"hidden": true
			},
			"width": {
				"name": "Ширина",
				"value": 1.99,
				"value_description": "1 метр 99 сантиметров"
			},
			"height": {
				"name": "Высота",
				"value": 2.5,
				"value_description": "2,5 метра"
			},
			"mass": {
				"name": "Масса",
				"value": 7319200,
				"value_description": "чуть более 7,3 тонн"
			},
			"color": {
				"name": "Цвет",
				"value": "01101A",
				"value_description": "чёрный"
			},
			"status": {
				"name": "Состояние",
				"value": "off",
				"value_description": "выключен"
			},
			"max_power": {
				"name": "Максимальная потребляемая мощность",
				"value": 300000000,
				"value_description": "300 МВт"
			},
			"current_power": {
				"name": "Текущая потребляемая мощность",
				"value": 0,
				"value_description": "0 Вт"
			},
			"current_wave_length": {
				"name": "Текущая длины волны",
				"value": 6.35e-11,
				"value_description": "635 нм"
			},
			"current_beam_diameter": {
				"name": "Текущий диаметр луча",
				"value": 0.001,
				"value_description": "1 мм"
			},
			"current_output_power_percentage": {
				"name": "Текущая выходная мощность",
				"value": 0.02,
				"value_description": "2%"
			}
		},
		"actions": {
			"set_wave_length": {
				"code": "set_wave_length",
				"name": "Изменить",
				"type": "equipment.action",
				"params": 5,
				"user_params": [
					{
						"code": "value",
						"type": "integer",
						"data": {
							"min_value": 300,
							"max_value": 900
						},
						"description": "Введите желаемую длину волны (300–900 нм.)",
						"default_value": [635,334,335,444],
						"min_value_count": 2,
						"max_value_count": 5
					},
					{
						"code": "value_float",
						"type": "float",
						"data": {
							"min_value": 299.56,
							"max_value": 900.23
						},
						"description": "111Введите желаемую длину волны (300–900 нм.)",
						"default_value": [635.33,555.1,442.2,332.1],
						"min_value_count": 3,
						"max_value_count": 7
					},
					{
						"code": "value_singlestring",
						"type": "string",
						"data": {
							"min_length": 50,
							"max_length": 70,
							"multiline": false
						},
						"description": "Введите краткое эссе на тему как я готовился к игре. Не менее 50 символов",
						"default_value": "Знаете, это было не просто. В начале нам казалось, что все это нафиг никому не нужно. Но позже, когда стали поступать деньги... ",
						"min_value_count": 1,
						"max_value_count": 3
					},
					{
						"code": "multi_string",
						"type": "string",
						"data": {
							"min_length": 50,
							"max_length": 60,
							"multiline": true
						},
						"description": "Введите краткое эссе на тему как я готовился к игре. Не менее 50 символов",
						"default_value": "Знаете, это было не просто. В начале нам казалось, что все это нафиг никому не нужно. Но позже, когда стали поступать деньги... ",
						"min_value_count": 1,
						"max_value_count": 3
					}
				]
			},
			"set_beam_diameter": {
				"code": "set_beam_diameter",
				"name": "Изменить",
				"type": "equipment.action",
				"params": "",
				"user_params": [
					{
						"code": "value",
						"type": "integer",
						"data": {
							"min_value": 100,
							"max_value": 2000
						},
						"description": "Введите желаемый диаметр луча (100–2000 мкм.)",
						"default_value": 1000,
						"min_value_count": 1,
						"max_value_count": 1
					},
					{
						"code": "receivers",
						"type": "objects",
						"data": {
							"object_code": "receivers",
							"attribute_code": "value"
						},
						"description": "Кому",
						"default_value": [111,333],
						"min_value_count": 1
					}
				]
			},
			"set_output_power_percentage": {
				"code": "set_output_power_percentage",
				"name": "Изменить",
				"type": "equipment.action",
				"params": [],
				"user_params": [
					{
						"code": "value",
						"type": "integer",
						"data": {
							"min_value": 1,
							"max_value": 100
						},
						"description": "Введите желаемую выходную мощность (1–100%)",
						"default_value": 2,
						"min_value_count": 1,
						"max_value_count": 1
					}
				]
			},
			"turn_on": {
				"code": "turn_on",
				"name": "Включить",
				"type": "equipment.action",
				"warning": "Вы действительно хотите включить оптический квантовый генератор?",
				"params": {}
			},
			"turn_off": {
				"code": "turn_off",
				"name": "Выключить",
				"type": "equipment.action",
				"disabled": true
			}
		},
		"template": {
			"groups": [
				{
					"attributes": ["description", "class"]
				},
				{
					"name": "Характеристики объекта",
					"attributes": ["width", "height", "length", "mass", "color", "max_power"]
				},
				{
					"name": "Настройки длины волны",
					"attributes": ["current_wave_length"],
					"actions": ["set_wave_length"]
				},
				{
					"name": "Настройки диаметра луча",
					"attributes": ["current_beam_diameter"],
					"actions": ["set_beam_diameter"]
				},
				{
					"name": "Настройки выходной мощности",
					"attributes": ["current_output_power_percentage"],
					"actions": ["set_output_power_percentage"]
				},
				{
					"name": "Состояние",
					"attributes": ["status", "current_power"],
					"actions": ["turn_on","turn_off"]
				}
			]
		}
	},
	{
		"code": "16x68z-13TnZm66F",
		"attributes": {
			"name": {
				"value": "Кош"
			}
		},
		"actions": {
			"send_mail": {
				"code": "send_mail",
				"name": "Написать письмо",
				"type": "mail.send",
				"params": {},
				"user_params": [
					{
						"code": "receivers",
						"type": "objects",
						"data": {
							"object_code": "receivers",
							"attribute_code": "value"
						},
						"description": "Кому",
						"min_value_count": 1
					},
					{
						"code": "title",
						"type": "string",
						"data": {
							"max_length": "100"
						},
						"description": "Тема",
						"min_value_count": 1,
						"max_value_count": 1
					},
					{
						"code": "body",
						"type": "string",
						"data": {
							"min_length": "1",
							"multiline": true
						},
						"description": "Сообщение",
						"min_value_count": 1,
						"max_value_count": 1
					}
				]
			}
		},
		"template": {
			"groups": [
				{
					"actions": ["send_mail"]
				}
			]
		}
	},
	{
		"code": "16x68z-14TnZm66F",
		"attributes": {
			"name": {
				"value": "Г'Кар"
			}
		},
		"actions": {
			"send_mail": {
				"code": "send_mail",
				"name": "Написать письмо",
				"type": "mail.send",
				"params": {},
				"user_params": [
					{
						"code": "receivers",
						"type": "objects",
						"data": {
							"object_code": "receivers",
							"attribute_code": "value"
						},
						"default_value": "16x68z-14TnZm66F",
						"description": "Кому",
						"min_value_count": 1
					},
					{
						"code": "title",
						"type": "string",
						"data": {
							"max_length": "100"
						},
						"description": "Тема",
						"min_value_count": 1,
						"max_value_count": 1
					},
					{
						"code": "body",
						"type": "string",
						"data": {
							"min_length": "1",
							"multiline": true
						},
						"description": "Сообщение",
						"min_value_count": 1,
						"max_value_count": 1
					}
				]
			}
		},
		"template": {
			"groups": [
				{
					"actions": ["send_mail"]
				}
			]
		}
	},
	{
		"code": "16x68z-10MnZm66F",
		"attributes": {
			"mail_title": {
				"value": "Напоминание о предстоящем празднике"
			},
			"mail_send_time": {
				"name" : "Получено",
				"value": "05.02.2258 20:49"
			},
			"mail_author": {
				"name" : "От",
				"value": "16x68z-17TnZm66F",
				"value_description": "Джон Шеридан"
			},
			"mail_receivers": {
				"name" : "Кому",
				"value": ["16x68z-15TnZm66F", "16x68z-18TnZm66F"],
				"value_description": "Персонал станции Вавилон 5, Гости станции Вавилон 5"
			},
			"mail_body": {
				"value": "Напоминаю всем, что сегодня в 20:00 состоится грандиозное шоу в честь годовщины станции. Не забудьте оставить все распри в ваших аппартаментах и захватить с собой хорошее настроение!\n\nP.S. Меры безопасности усилены. Пожалуйста, отнеситесь с пониманием.\nВаш капитан, Джон Шеридан."
			}
		},
		"actions": {
			"reply": {
				"code": "send_mail",
				"name": "Ответить",
				"type": "mail.reply",
				"params": {},
				"user_params": [
					{
						"code": "receivers",
						"type": "objects",
						"data": {
							"object_code": "receivers",
							"attribute_code": "value"
						},
						"default_value": "16x68z-17TnZm66F",
						"description": "Кому",
						"min_value_count": 1
					},
					{
						"code": "title",
						"type": "string",
						"data": {
							"min_length": "1",
							"max_length": "100"
						},
						"default_value": "Re: Напоминание о предстоящем празднике",
						"description": "Тема",
						"min_value_count": 1,
						"max_value_count": 1
					},
					{
						"code": "body",
						"type": "string",
						"data": {
							"min_length": "1",
							"multiline": true
						},
						"default_value": "> Напоминаю всем, что сегодня в 20:00 состоится грандиозное шоу в честь годовщины станции. Не забудьте оставить все распри в ваших аппартаментах и захватить с собой хорошее настроение!\n> \n> P.S. Меры безопасности усилены. Пожалуйста, отнеситесь с пониманием.\n> Ваш капитан, Джон Шеридан.",
						"description": "Сообщение",
						"min_value_count": 1,
						"max_value_count": 1
					}
				]
			},
			"reply_all": {
				"code": "send_mail",
				"name": "Ответить всем",
				"type": "mail.reply_all",
				"params": {},
				"user_params": [
					{
						"code": "receivers",
						"type": "objects",
						"data": {
							"object_code": "receivers",
							"attribute_code": "value"
						},
						"default_value": ["16x68z-17TnZm66F", "16x68z-15TnZm66F", "16x68z-18TnZm66F"],
						"description": "Кому",
						"min_value_count": 1
					},
					{
						"code": "title",
						"type": "string",
						"data": {
							"min_length": "1",
							"max_length": "100"
						},
						"default_value": "Re: Напоминание о предстоящем празднике",
						"description": "Тема",
						"min_value_count": 1,
						"max_value_count": 1
					},
					{
						"code": "body",
						"type": "string",
						"data": {
							"min_length": "1",
							"multiline": true
						},
						"default_value": "> Напоминаю всем, что сегодня в 20:00 состоится грандиозное шоу в честь годовщины станции. Не забудьте оставить все распри в ваших аппартаментах и захватить с собой хорошее настроение!\n> \n> P.S. Меры безопасности усилены. Пожалуйста, отнеситесь с пониманием.\n> Ваш капитан, Джон Шеридан.",
						"description": "Сообщение",
						"min_value_count": 1,
						"max_value_count": 1
					}
				]
			},
			"delete": {
				"code": "delete_mail",
				"name": "Удалить письмо",
				"type": "mail.delete",
				"params": {}
			}
		},
		"template": {
			"groups": [
				{
					"attributes": ["mail_title", "mail_author", "mail_receivers", "mail_body", "mail_send_time"],
					"actions": ["reply", "reply_all", "delete"]
				}
			]
		}
	}
];

var g_mail=
[
	{
		"code": "16x68z-10MnZm66F",
		"attributes": {
			"mail_title": {
				"value": "Напоминание о предстоящем празднике"
			},
			"mail_send_time": {
				"name" : "Получено",
				"value": "05.02.2258 20:49"
			},
			"mail_author": {
				"name" : "От",
				"value": "16x68z-17TnZm66F",
				"value_description": "Джон Шеридан"
			},
			"mail_receivers": {
				"name" : "Кому",
				"value": ["16x68z-15TnZm66F", "16x68z-18TnZm66F"],
				"value_description": "Персонал станции Вавилон 5, Гости станции Вавилон 5"
			},
			"mail_body": {
				"value": "Напоминаю всем, что сегодня в 20:00 состоится грандиозное шоу в честь годовщины станции. Не забудьте оставить все распри в ваших аппартаментах и захватить с собой хорошее настроение!\n\nP.S. Меры безопасности усилены. Пожалуйста, отнеситесь с пониманием.\nВаш капитан, Джон Шеридан."
			}
		},
		"actions": {
			"reply": {
				"code": "send_mail",
				"name": "Ответить",
				"type": "mail.reply",
				"params": {},
				"user_params": [
					{
						"code": "receivers",
						"type": "objects",
						"data": {
							"object_code": "receivers",
							"attribute_code": "value"
						},
						"default_value": "16x68z-17TnZm66F",
						"description": "Кому",
						"min_value_count": 1
					},
					{
						"code": "title",
						"type": "string",
						"data": {
							"min_length": "1",
							"max_length": "100"
						},
						"default_value": "Re: Напоминание о предстоящем празднике",
						"description": "Тема",
						"min_value_count": 1,
						"max_value_count": 1
					},
					{
						"code": "body",
						"type": "string",
						"data": {
							"min_length": "1",
							"multiline": true
						},
						"default_value": "> Напоминаю всем, что сегодня в 20:00 состоится грандиозное шоу в честь годовщины станции. Не забудьте оставить все распри в ваших аппартаментах и захватить с собой хорошее настроение!\n> \n> P.S. Меры безопасности усилены. Пожалуйста, отнеситесь с пониманием.\n> Ваш капитан, Джон Шеридан.",
						"description": "Сообщение",
						"min_value_count": 1,
						"max_value_count": 1
					}
				]
			},
			"reply_all": {
				"code": "send_mail",
				"name": "Ответить всем",
				"type": "mail.reply_all",
				"params": {},
				"user_params": [
					{
						"code": "receivers",
						"type": "objects",
						"data": {
							"object_code": "receivers",
							"attribute_code": "value"
						},
						"default_value": ["16x68z-17TnZm66F", "16x68z-15TnZm66F", "16x68z-18TnZm66F"],
						"description": "Кому",
						"min_value_count": 1
					},
					{
						"code": "title",
						"type": "string",
						"data": {
							"min_length": "1",
							"max_length": "100"
						},
						"default_value": "Re: Напоминание о предстоящем празднике",
						"description": "Тема",
						"min_value_count": 1,
						"max_value_count": 1
					},
					{
						"code": "body",
						"type": "string",
						"data": {
							"min_length": "1",
							"multiline": true
						},
						"default_value": "> Напоминаю всем, что сегодня в 20:00 состоится грандиозное шоу в честь годовщины станции. Не забудьте оставить все распри в ваших аппартаментах и захватить с собой хорошее настроение!\n> \n> P.S. Меры безопасности усилены. Пожалуйста, отнеситесь с пониманием.\n> Ваш капитан, Джон Шеридан.",
						"description": "Сообщение",
						"min_value_count": 1,
						"max_value_count": 1
					}
				]
			},
			"delete": {
				"code": "delete_mail",
				"name": "Удалить письмо",
				"type": "mail.delete",
				"params": {}
			}
		},
		"template": {
			"groups": [
				{
					"attributes": ["mail_title", "mail_author", "mail_receivers", "mail_body", "mail_send_time"],
					"actions": ["reply", "reply_all", "delete"]
				}
			]
		}
	},
	{
		"code": "16x68z-11MnZm66F",
		"attributes": {
			"mail_title": {
				"value": "Напоминание о предстоящем празднике 2"
			},
			"mail_send_time": {
				"name" : "Получено",
				"value": "05.02.2258 20:49"
			},
			"mail_author": {
				"name" : "От",
				"value": "16x68z-17TnZm66F",
				"value_description": "Посол Деленн"
			},
			"mail_receivers": {
				"name" : "Кому",
				"value": ["16x68z-15TnZm66F", "16x68z-18TnZm66F"],
				"value_description": "Персонал станции Вавилон 5, Гости станции Вавилон 5"
			},
			"mail_body": {
				"value": "Напоминаю всем, что сегодня в 20:00 состоится грандиозное шоу в честь годовщины станции. Не забудьте оставить все распри в ваших аппартаментах и захватить с собой хорошее настроение!\n\nP.S. Меры безопасности усилены. Пожалуйста, отнеситесь с пониманием.\nВаш капитан, Джон Шеридан."
			}
		},
		"actions": {
			"reply": {
				"code": "send_mail",
				"name": "Ответить",
				"type": "mail.reply",
				"params": {},
				"user_params": [
					{
						"code": "receivers",
						"type": "objects",
						"data": {
							"object_code": "receivers",
							"attribute_code": "value"
						},
						"default_value": "16x68z-17TnZm66F",
						"description": "Кому",
						"min_value_count": 1
					},
					{
						"code": "title",
						"type": "string",
						"data": {
							"min_length": "1",
							"max_length": "100"
						},
						"default_value": "Re: Напоминание о предстоящем празднике",
						"description": "Тема",
						"min_value_count": 1,
						"max_value_count": 1
					},
					{
						"code": "body",
						"type": "string",
						"data": {
							"min_length": "1",
							"multiline": true
						},
						"default_value": "> Напоминаю всем, что сегодня в 20:00 состоится грандиозное шоу в честь годовщины станции. Не забудьте оставить все распри в ваших аппартаментах и захватить с собой хорошее настроение!\n> \n> P.S. Меры безопасности усилены. Пожалуйста, отнеситесь с пониманием.\n> Ваш капитан, Джон Шеридан.",
						"description": "Сообщение",
						"min_value_count": 1,
						"max_value_count": 1
					}
				]
			},
			"reply_all": {
				"code": "send_mail",
				"name": "Ответить всем",
				"type": "mail.reply_all",
				"params": {},
				"user_params": [
					{
						"code": "receivers",
						"type": "objects",
						"data": {
							"object_code": "receivers",
							"attribute_code": "value"
						},
						"default_value": ["16x68z-17TnZm66F", "16x68z-15TnZm66F", "16x68z-18TnZm66F"],
						"description": "Кому",
						"min_value_count": 1
					},
					{
						"code": "title",
						"type": "string",
						"data": {
							"min_length": "1",
							"max_length": "100"
						},
						"default_value": "Re: Напоминание о предстоящем празднике",
						"description": "Тема",
						"min_value_count": 1,
						"max_value_count": 1
					},
					{
						"code": "body",
						"type": "string",
						"data": {
							"min_length": "1",
							"multiline": true
						},
						"default_value": "> Напоминаю всем, что сегодня в 20:00 состоится грандиозное шоу в честь годовщины станции. Не забудьте оставить все распри в ваших аппартаментах и захватить с собой хорошее настроение!\n> \n> P.S. Меры безопасности усилены. Пожалуйста, отнеситесь с пониманием.\n> Ваш капитан, Джон Шеридан.",
						"description": "Сообщение",
						"min_value_count": 1,
						"max_value_count": 1
					}
				]
			},
			"delete": {
				"code": "delete_mail",
				"name": "Удалить письмо",
				"type": "mail.delete",
				"params": {}
			}
		},
		"template": {
			"groups": [
				{
					"attributes": ["mail_title", "mail_author", "mail_receivers", "mail_body", "mail_send_time"],
					"actions": ["reply", "reply_all", "delete"]
				}
			]
		}
	},
	{
		"code": "16x68z-12MnZm66F",
		"attributes": {
			"mail_title": {
				"value": "Напоминание о предстоящем празднике 3"
			},
			"mail_send_time": {
				"name" : "Получено",
				"value": "05.02.2258 20:49"
			},
			"mail_author": {
				"name" : "От",
				"value": "16x68z-17TnZm66F",
				"value_description": "Посол Г-кар"
			},
			"mail_receivers": {
				"name" : "Кому",
				"value": ["16x68z-15TnZm66F", "16x68z-18TnZm66F"],
				"value_description": "Персонал станции Вавилон 5, Гости станции Вавилон 5"
			},
			"mail_body": {
				"value": "Напоминаю всем, что сегодня в 20:00 состоится грандиозное шоу в честь годовщины станции. Не забудьте оставить все распри в ваших аппартаментах и захватить с собой хорошее настроение!\n\nP.S. Меры безопасности усилены. Пожалуйста, отнеситесь с пониманием.\nВаш капитан, Джон Шеридан."
			}
		},
		"actions": {
			"reply": {
				"code": "send_mail",
				"name": "Ответить",
				"type": "mail.reply",
				"params": {},
				"user_params": [
					{
						"code": "receivers",
						"type": "objects",
						"data": {
							"object_code": "receivers",
							"attribute_code": "value"
						},
						"default_value": "16x68z-17TnZm66F",
						"description": "Кому",
						"min_value_count": 1
					},
					{
						"code": "title",
						"type": "string",
						"data": {
							"min_length": "1",
							"max_length": "100"
						},
						"default_value": "Re: Напоминание о предстоящем празднике",
						"description": "Тема",
						"min_value_count": 1,
						"max_value_count": 1
					},
					{
						"code": "body",
						"type": "string",
						"data": {
							"min_length": "1",
							"multiline": true
						},
						"default_value": "> Напоминаю всем, что сегодня в 20:00 состоится грандиозное шоу в честь годовщины станции. Не забудьте оставить все распри в ваших аппартаментах и захватить с собой хорошее настроение!\n> \n> P.S. Меры безопасности усилены. Пожалуйста, отнеситесь с пониманием.\n> Ваш капитан, Джон Шеридан.",
						"description": "Сообщение",
						"min_value_count": 1,
						"max_value_count": 1
					}
				]
			},
			"reply_all": {
				"code": "send_mail",
				"name": "Ответить всем",
				"type": "mail.reply_all",
				"params": {},
				"user_params": [
					{
						"code": "receivers",
						"type": "objects",
						"data": {
							"object_code": "receivers",
							"attribute_code": "value"
						},
						"default_value": ["16x68z-17TnZm66F", "16x68z-15TnZm66F", "16x68z-18TnZm66F"],
						"description": "Кому",
						"min_value_count": 1
					},
					{
						"code": "title",
						"type": "string",
						"data": {
							"min_length": "1",
							"max_length": "100"
						},
						"default_value": "Re: Напоминание о предстоящем празднике",
						"description": "Тема",
						"min_value_count": 1,
						"max_value_count": 1
					},
					{
						"code": "body",
						"type": "string",
						"data": {
							"min_length": "1",
							"multiline": true
						},
						"default_value": "> Напоминаю всем, что сегодня в 20:00 состоится грандиозное шоу в честь годовщины станции. Не забудьте оставить все распри в ваших аппартаментах и захватить с собой хорошее настроение!\n> \n> P.S. Меры безопасности усилены. Пожалуйста, отнеситесь с пониманием.\n> Ваш капитан, Джон Шеридан.",
						"description": "Сообщение",
						"min_value_count": 1,
						"max_value_count": 1
					}
				]
			},
			"delete": {
				"code": "delete_mail",
				"name": "Удалить письмо",
				"type": "mail.delete",
				"params": {}
			}
		},
		"template": {
			"groups": [
				{
					"attributes": ["mail_title", "mail_author", "mail_receivers", "mail_body", "mail_send_time"],
					"actions": ["reply", "reply_all", "delete"]
				}
			]
		}
	}
];


var g_recv=
{
	"result": "ok",
	"data": {
		"last_modified": "2017-01-11T15:00:00.000Z",
		"objects": [
			{
				"code": "16x68z-14TnZm66F",
				"attributes": {
					"name": {
						"value": "Г'Кар"
					}
				}
			},
			{
				"code": "16x68z-17TnZm66F",
				"attributes": {
					"name": {
						"value": "Джон Шеридан"
					}
				}
			},
			{
				"code": "16x68z-16TnZm66F",
				"attributes": {
					"name": {
						"value": "Дипломаты Центавра"
					}
				}
			},
			{
				"code": "16x68z-18TnZm66F",
				"attributes": {
					"name": {
						"value": "Гости станции Вавилон 5"
					}
				}
			},
			{
				"code": "16x68z-15TnZm66F",
				"attributes": {
					"name": {
						"value": "Персонал станции Вавилон 5"
					}
				}
			}
		]
	}
}
