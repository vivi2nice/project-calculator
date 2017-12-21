$(document).ready(function(){
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
    //Add your last .click() here!
    $('#equals').click(function () {
    const a = parseInt(newnumber,10) || 0;
    const b = parseInt(number,10) || a;
    var n;
    switch (operator) {
    case "+":
        n = a + b;
        break;
    case "-":
        n = a - b;
        break;
    case "*":
        n = a * b;
        break;
    case "/":
        n = a / b || 0;
        break;
    default: n = 0;
    }
    totaldiv.text(n.toString(10));
    testNumLength(n);
    [number, newnumber] = ['', '']
});
});