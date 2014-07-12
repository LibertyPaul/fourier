const integralPrecision = 1000;
var harmonicsCount = 40;
const plotPrecision = 500;
var a0;
var a = [], b = [];
var activeHarmonics = [];




function calcHarmonics(){
	a0 = 0;
	var step = 2 * Math.PI / integralPrecision;
	
	
	for(var x = -Math.PI; x <= Math.PI; x += step)
		a0 += f(x);
	a0 /= integralPrecision;
	
	if(a.length !== b.length)
		alert("error");
		
	for(var i = a.length; i < harmonicsCount; ++i){
		a.push(0);
		b.push(0);
		activeHarmonics.push(true);
		for(var x = -Math.PI; x <= Math.PI; x += step){
			a[i] += f(x) * Math.cos((i + 1) * x);
			b[i] += f(x) * Math.sin((i + 1) * x);
		}
		
		a[i] *= 2;
		a[i] /= integralPrecision;
	
		b[i] *= 2;
		b[i] /= integralPrecision;
	}
	
}


function plot(){
	if(a.length != harmonicsCount || b.length != harmonicsCount)
		calcHarmonics();
	
	var coords = [], origin = [];
	
	var plotStep = 2 * Math.PI / plotPrecision;
	for(var x = -Math.PI; x <= Math.PI; x += plotStep){
		var y = a0;
		for(var j = 0; j < harmonicsCount; ++j){
			if(activeHarmonics[j]){
				y += Math.cos((j + 1) * x) * a[j];
				y += Math.sin((j + 1) * x) * b[j];
			}
		}
		coords.push([x, y]);
		origin.push([x, f(x)]);
	}
	
	
	
	
	
	var options = {
		series: {
			lines: {
				show: true
			},
			points: {
				show: false
			}
		}
	};
	
	var plot = $.plot("#plot", [
		{label: "Исходный график", data: origin, color: "#222"},
		{label: "Гармоники", data : coords, color: "#F00"}
	], options);
}

function createHarmonicsDescription(n){
	var row = document.createElement('tr');
	row.className = 'harmonicsDescription';
	var checkBox = document.createElement('input');
	checkBox.setAttribute('type', 'checkbox');
	checkBox.className = 'harmonicsChecker';
	checkBox.checked = true;
	checkBox.onchange = function(){
		activeHarmonics[n] = checkBox.checked;
		plot();
	};
	
	var desc = document.createElement('p');
	desc.textContent = a[n].toFixed(4) + ' * cos('+ (n + 1) + ' * x) + ' + b[n].toFixed(4) + ' * sin(' + (n + 1) + ' * x)';
	
	var td1 = document.createElement('td');
	var td2 = document.createElement('td');
	
	td1.appendChild(checkBox);
	td2.appendChild(desc);
	
	row.appendChild(td1);
	row.appendChild(td2);
	
	return row;
}

function buildHarmonicsList(){
	var list = document.getElementById('harmonicsList');
	
	for(var i = 0; i < harmonicsCount; ++i)
		list.appendChild(createHarmonicsDescription(i));
}


window.onload = function(){
	if(typeof f === 'undefined'){
		alert("Функция f(x) не найдена");
		return;
	}
	
	calcHarmonics();
	buildHarmonicsList();
	plot();
}

function setAllCheckboxes(mode){
	var boxes = document.getElementsByClassName('harmonicsChecker');
	for(var i = 0; i < boxes.length; ++i)
		boxes[i].checked = mode;
	for(var i = 0; i < activeHarmonics.length; ++i)
		activeHarmonics[i] = mode;
	plot();
}
	
	
		
			
	
	
	
	
	
