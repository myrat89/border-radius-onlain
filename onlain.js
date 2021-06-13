//условия для Internet Explorer

window.onload = function() {
	if (navigator.userAgent.search(/MSIE/) > 0 || navigator.userAgent.search(/NET CLR /) > 0) {
		alert("Вы запустили данный итернет сервис на браузере Internet Explorer");
		alert("Данный интернет сервис не корректно работает на браузере Internet Explorer пожалуйста воспользуйтись другим браузером");
		
	}
}

// скрипт события на кнопках слайдер !

let buttons = document.getElementsByClassName("but_menu"); 
let box_lenta = document.getElementsByClassName("box_lenta")[0];
for (let ib = 0; ib < buttons.length; ib++) 
	buttons[ib].addEventListener("click", function() {	
		if (buttons[ib] == buttons[0]) {
			buttons[0].style.backgroundColor = "gold"; buttons[0].style.color = "blue";
			buttons[1].style.backgroundColor = ""; buttons[1].style.color = "";
			buttons[2].style.backgroundColor = ""; buttons[2].style.color = "";
			box_lenta.style.left = "0px";
			let box_0 = document.getElementsByClassName("box_element")[0];
			box_0.style.backgroundColor = "#D05300";
			
		}
		if (buttons[ib] == buttons[1]) {
			buttons[1].style.backgroundColor = "gold"; buttons[1].style.color = "blue";
			buttons[0].style.backgroundColor = ""; buttons[0].style.color = "";
			buttons[2].style.backgroundColor = ""; buttons[2].style.color = "";
			box_lenta.style.left = "-400px";
			let box_1 = document.getElementsByClassName("box_element")[1];
			box_1.style.backgroundColor = "#AEC7E8";

		}
		if (buttons[ib] == buttons[2]) {
			buttons[2].style.backgroundColor = "gold"; buttons[2].style.color = "blue";
			buttons[1].style.backgroundColor = ""; buttons[1].style.color = "";
			buttons[0].style.backgroundColor = ""; buttons[0].style.color = "";
			box_lenta.style.left = "-800px";
			let box_2 = document.getElementsByClassName("box_element")[2];
			box_2.style.backgroundColor = "#B5F3B5";

		}
		
	});
  
	
// скрипт проверки inputa на количество символов в строке
	
	let boxss = document.getElementsByClassName("box_element"); //глобальная область видимости
	
	let mass_inp = document.getElementsByClassName("numb"); //inputs
	for(let inp = 0; inp < mass_inp.length; inp++) {
	mass_inp[inp].addEventListener("input", function() {
		if(this.value.length > 3 || this.value > 200) {
			alert("Введие корректное число от 0 до 200");
			this.value = 0;
			
			
		}
		else {
			//первый блок округление углов
			let val_left_top = mass_inp[2].value; 
			let val_right_top = mass_inp[0].value;
			let val_right_buttom = mass_inp[1].value;
			let val_left_buttom = mass_inp[3].value;
			boxss[0].style.borderRadius = 	val_left_top + "px " + val_right_top + "px " + val_right_buttom + "px " + val_left_buttom + "px ";
			let text_1 = document.getElementsByClassName("text_output")[0];
			text_1.innerHTML = "border-radius: " + val_left_top + "px " + val_right_top + "px " + val_right_buttom + "px " + val_left_buttom + "px;";
		}
	});
  }	
	
// скритп тени второй блок 
// условия на инпутах
	let color_shadow = document.getElementById("col"); //input color 
	let box_shadow = document.getElementsByClassName("box_shablon2")[0]; //блок с тенью
	let inps2 = document.getElementsByClassName("shodow");
	for (let in2 = 0; in2 < inps2.length; in2++)
	inps2[in2].addEventListener("input", function() {
		if(this.value.length > 3 || this.value > 100) {
			if(this.type == "number") {
				alert("Не превышайте трех символов в строке");
				this.value = 0;
			}
	
		}
		let colors = inps2[0].value; 
		let sho_gori = inps2[1].value;
		let sho_vert = inps2[2].value;
		let sho_blur = inps2[3].value;
		let sho_depth = inps2[4].value;
		box_shadow.style.boxShadow = sho_gori + "px " + sho_vert + "px " + sho_blur + "px " + sho_depth + "px " + colors;
		let text_shodow = document.getElementsByClassName("text_output2")[0];
		text_shodow.innerHTML = "box-shadow: " + sho_gori + "px " + sho_vert + "px " + sho_blur + "px " + sho_depth + "px " + colors + ";";

	});
	
// Онлаин градиент блока
	
	let text_output3 = document.getElementsByClassName("text_output3")[0]; //параграф вывода
	let color_gradient = document.getElementsByClassName("rgadient"); //глобальная переменная массив
	let box_gradient = document.getElementsByClassName("box_gradient")[0]; // блок с боксам градиента
	let span_0 = document.createElement("span"); span_0.id = "spn_0";
	for (let i = 0; i < color_gradient.length; i++) 
		color_gradient[i].addEventListener("input", function() {
			let color1 = color_gradient[0].value; let color2 = color_gradient[1].value;
			box_gradient.style.background = "linear-gradient" + "(" + color1 + ", " + color2 + ")";
			span_0.innerHTML = "background:linear-gradient" + "(" + color1 + ", " + color2 + ");";
			text_output3.prepend(span_0); 
		});
// высота блока 

	let but_height = document.getElementsByClassName("nymb_height")[0];	
	let span = document.createElement("span");
	span.id = "spn"; 
	but_height.addEventListener("input", function() {
	let height_value = but_height.value; 
		if (this.value > 200) {
			this.value = 200;
			box_gradient.style.height = "200px";
		}
		
		else if (this.value < 30) {
			this.value = 200;
			box_gradient.style.height = "200px";
			
		}
		else if (this.value < 200) {
		box_gradient.style.height = height_value + "px";
		span.innerHTML = " " + "height: " + height_value + "px;";
		console.log(span); text_output3.appendChild(span);
		}
	});
	
	
	//checked change
	
	// работа с chekbox 
	
	let chekbox = document.getElementsByClassName("chek")[0]; console.log(chekbox.checked);
	
	chekbox.addEventListener("change", function(event) {
		if (chekbox.checked == true) {
			alert("вы установили флажок!");
		}
		
	});
	
	
	