function f(x){
	if(x >= -Math.PI && x < -Math.PI/2)
		return -1;
	if(x >= -Math.PI/2 && x < Math.PI/2)
		return x * x / 2;
	if(x >= Math.PI/2 && x <= Math.PI)
		return -1;
	
	alert("out of range: x=" + x);
	return 42;
}
