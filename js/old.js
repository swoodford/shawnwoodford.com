window.onload=function(){
	var tbl=document.createElement('table'),
	body=document.body;
	body.style.backgroundColor='#000';
	body.style.color='#060';
	body.style.fontFamily='Lucida Console';

	for(var i = 0; i <= 100; i++){
		var tr = tbl.insertRow();
		for(var j = 0; j <= 50; j++){
			var td = tr.insertCell();
			td.style.width="2%";
		}
	}
	body.appendChild(tbl);
	setInterval(function(){
		rain(Math.floor((Math.random()*50)),0)
	},20);
}
function rain(n,i) {
	setTimeout(function (){
		var e=document.getElementsByTagName('tr')[i].childNodes[n];
		e.style.color='#fff';
		e.innerHTML = '&#'+Math.floor((Math.random()*349)+12450)+';';
		setTimeout(function(){e.style.color=''},200)

		if (i++ < 100) rain(n,i);
	},20);
};
