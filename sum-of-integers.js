function sumOfTwo(a,b){
	return String(Number(a) + Number(b))
	//OR
	
	return String(+a + +b)
}
console.log(sumOfTwo('5', '4'))
