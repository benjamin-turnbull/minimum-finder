function minimum(a, b) {
	if (a < b) {
		return a;
	}
	else if (a > b) {
		return b;
	}
	else if (a == b) {
		return "Numbers are equal.";
	}
	else {
		return "Error.";
	}
}

console.log(minimum(4, 4));