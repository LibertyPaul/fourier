function f(x){
	if(x >= -Math.PI && x < -Math.PI/2)
		return 0;
	if(x >= -Math.PI/2 && x < 0)
		return 1;
	if(x >= 0 && x <= Math.PI/2)
		return -1;
	if(x >= Math.PI/2 && x <= Math.PI)
		return 0;
	
	alert("out of range: x=" + x);
	return 42;
}
