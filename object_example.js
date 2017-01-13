var tmp_obj={
	"result": "ok",
	"data": {
		"last_modified": "2016-12-27T23:00:00.000Z",
		"objects": [
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
								"default_value": 635,
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
								"default_value": 635.33,
								"min_value_count": 1,
								"max_value_count": 1
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
			}
		]
	}
}
