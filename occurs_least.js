function occurs_least(str) {
	var a = [],b = 0,occurrence;
	for(var i = 0; i < str.length;i++){
		if(a[str[i]] != undefined){
			a[str[i]]++;
		}else{
			a[str[i]] = -1;
		}
	}
	for(var key in a){
		if(a[key] < b){
			b = a[key];
			occurrence = key;
		}
	}
	return occurrence;
}