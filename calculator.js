var round = function(text, pos) {
    function setCharAt(str,index,chr) {
       if(index > str.length-1) return str;
        return str.substr(0,index) + chr + str.substr(index+1);
    }
    if (text.length > pos) {
        for (i=1;i<text.length;i++){
            if (text[i] === ".") {
                i = text.length;
                if (parseFloat(text[pos],10) >= 5) {
                    text = (setCharAt(text,pos-1,((parseFloat(text[pos-1],10))+1).toString(10))).substr(0,pos);
                } else {
                    text = text.substr(0,pos);
                }
            } 
        }
    }
    return text;
};
var $ = jQuery.noConflict();
$(function() {
    var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");
    $("#numbers > a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
    });
    $("#operators > a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text("0");
    });
    $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
    });
    $("#equals").click(function(){
		if (operator === "+"){
			number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
		} else if (operator === "-"){
			number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
		} else if (operator === "/"){
			number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
		} else if (operator === "*"){
			number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
		}
		totaldiv.text(number);
		testNumLength(number);
		number = "";
		newnumber = "";
    });
}); 