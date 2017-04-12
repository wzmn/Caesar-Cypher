function initialize(){
	let ceasar = {
		button : document.getElementById("btn"),
		shift : document.getElementById("shift"),
		dis : document.getElementById("text"),		
		lowercase : "abcdefghijklmnopqrstuvwxyz",
		uppercase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		format : /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
		lShift : function(letter, shift){
			if (shift && shift / Math.abs(shift) == -1) {
				pointer = ceasar.lowercase.indexOf(letter);
					for (var i = Math.abs(shift) - 1; i >= 0; i--) {
						if (pointer <= 0) {
							pointer = 26;
						}
						pointer--;
					}
				return ceasar.lowercase[pointer];
			}else{
				pointer = ceasar.lowercase.indexOf(letter);
					for (i = 0; i <= shift -1; i++) {
						pointer++;
						if (pointer == 26) {
							pointer = 0;
						}
					}
				return ceasar.lowercase[pointer];
			}
		},
		UShift : function(letter, shift){
			if (shift && shift / Math.abs(shift) == -1) {
				pointer = ceasar.uppercase.indexOf(letter);
					for (var i = Math.abs(shift) - 1; i >= 0; i--) {
						if (pointer <= 0) {
							pointer = 26;
						}
						pointer--;
					}
				return ceasar.uppercase[pointer];
			}else{
				pointer = ceasar.uppercase.indexOf(letter);
					for (i = 0; i <= shift -1; i++) {
						pointer++;
						if (pointer == 26) {
							pointer = 0;
						}
					}
				return ceasar.uppercase[pointer];
			}
		},
		cipher : function(text, shift){
			output = ""; 
			for (var i = 0; i <= text.length - 1; i++) {
				if (/\s/.test(text[i])) { // Skip spaces
				    output = output + " ";
				    continue
				}
				if (ceasar.format.test(text[i])) { // Skip special characters
					output = output + text[i];
					continue
				}
				if (!isNaN(parseFloat(text[i])) && isFinite(text[i])) { // Skip numbers
					output = output + text[i];
					continue
				}
				if (text[i] == text[i].toLowerCase()) { // Case check
				  output = output + ceasar.lShift(text[i], shift);
				} else {
				  output = output + ceasar.UShift(text[i], shift);
				}
			}
			ceasar.dis.value = output;
		}
	}
	ceasar.button.onclick = function(){	ceasar.cipher(ceasar.dis.value, ceasar.shift.value)	}
}
