function f(x){
	if(x >= -Math.PI && x < -Math.PI/2)
		return Math.pow(-(x + Math.PI/2), 3) - Math.PI/2;
	if(x >= -Math.PI/2 && x < 0)
		return -Math.pow(x, 3) - Math.PI / 2;
	if(x >= 0 && x <= Math.PI/2)
		return Math.pow(x, 3) - Math.PI / 2;
	if(x >= Math.PI/2 && x <= Math.PI)
		return Math.pow(x - Math.PI/2, 3) - Math.PI/2;
	
	alert("out of range: x=" + x);
	return 42;
}
