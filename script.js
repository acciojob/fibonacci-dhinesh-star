function fibonacci(num) {
// your code here
	if(n==0) return 0;
	else if(n==1) return 1;

	let sum1 = fibonacci(num-1);
	let sum2 = fibonacci(num-2);

	return sum1+sum2;
} 

module.exports = fibonacci;
