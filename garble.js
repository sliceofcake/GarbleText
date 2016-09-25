// JavaScript script to replace all alphanumeric text on a webpage with parallel garbled text
// Letters retain their case, digits remain digits, all other characters remain
// May not reach all text. Verify that all text is garbled if that's critical
(function(){
	var p = {
		upperSA : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
		lowerSA : "abcdefghijklmnopqrstuvwxyz",
		numSA   : "0123456789",
		calcElTxtA : function(){
			var treeWalker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);
			var el;
			var elA = [];
			while (el = treeWalker.nextNode()){elA.push(el);}
			return elA;},
		genRandChar : function(upperF,lowerF,numF){
			var charA = "";
			if (upperF){charA += this.upperSA;}
			if (lowerF){charA += this.lowerSA;}
			if (numF  ){charA += this.numSA  ;}
			return charA.charAt(Math.floor(Math.random()*charA.length));},
		replace : function(str){
			var s = "";
			for (var i = 0; i < str.length; i++){
				var char = str.charAt(i);
				if      (this.upperSA.indexOf(char) !== -1){s += this.genRandChar(true ,false,false);}
				else if (this.lowerSA.indexOf(char) !== -1){s += this.genRandChar(false,true ,false);}
				else if (this.numSA  .indexOf(char) !== -1){s += this.genRandChar(false,false,true );}
				else                                       {s += char                               ;}}
			return s;},
		main : function(){
			this.calcElTxtA().forEach(function(that){return function(el){
				if (el.textContent.trim().length === 0){return;}
				el.textContent = that.replace(el.textContent);
			};}(this));
		},
	};
	p.main();
})();