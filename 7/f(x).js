function f(x){
	if(x >= -Math.PI && x < -Math.PI/2)
		return x + Math.PI;
	if(x >= -Math.PI/2 && x < 0)
		return x + Math.PI / 2;
	if(x >= 0 && x <= Math.PI/2)
		return x - Math.PI / 2;
	if(x >= Math.PI/2 && x <= Math.PI)
		return x - Math.PI;
	
	alert("out of range: x=" + x);
	return 42;
}
