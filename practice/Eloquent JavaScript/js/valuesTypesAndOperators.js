// Values, Types, and Operators

document.body.innerHTML = "<h2>Values, Types, and Operators</h2>" +
    "<h3>Numbers</h3>" +
    "<p>Simple: " + 13 + "; Fractional: " + 9.81 + "; Exponential 3e4: " + 3e4 + ".</p>" +
    "<h3>Arithmetic</h3>" + 
    "<p>100 + 4 * 11 = " + (100+4*11) + "; (10 + 4) * 11 = " + ((10+4)*11) + ".</p>" +
    "<h3>Special Numbers</h3>" + 
    "<p>Infinity and -Infinity.</p>" +
    "<h3>String</h3>" + 
    "<p> This is the first line \n" + "And this is the second using \" &#92;n \". </p>" + 
    "<p>Con" + "cat" + "e" + "nation!<p>" +
    "<p>Half of 100 is ${100/2} </p>" + 
    "<h3>Unary operators</h3>" +
    "<p>typeof 4.5 = " + typeof 4.5 + "; typeof \"x\" =" + typeof "x" + ".</p>" +
    "<h3>Unary operators</h3>" +
    "<p>Comparison: <br>  3 > 2 is " + (3 > 2) + " and 3 < 2 is " + (3 < 2) + 
    "<br> \"Aardvark\" < \"Zoroaster\" is " + ("Aardvark" < "Zoroaster") +
    "<br> \"Itchy\" != \"Scratchy\" is " + ("Itchy" != "Scratchy") +
    "<br> \"Apple\" == \"Orange\" is " + ("Apple" == "Orange") +
    "<br> NaN == NaN is " + //(NaN == NaN) 
    + ".</p>" +
    "<p>Logical operators: <br> true && false is " + (true && false) + " and true && true is " + (true && true ) +
    "<br> false || true is " + (false || true) + " and false || false is " + (false || false) +
    "<br> <b>1 + 1 == 2 && 10 * 10 > 50</b> is " + (1 + 1 == 2 && 10 * 10 > 50) +
    "<br>Ternary operators <b>true ? 1 : 2</b> is <b>" + //(true ? 1 : 2)
     + "</b> and <b>false ? 1 : 2</b> is <b>" + //(false ? 1 : 2) 
     + "</b>.</p>" +
    "<p> Empty values are <i>null</i> and <i>undefined</i>.</p>" +
    "<p>Automatic type conversion: <br><b>8 * null</b> is <b>" + (8 * null) + 
    "</b><br><b>\"5\" - 1</b> is <b>" + ("5" - 1) + 
    "</b><br><b>\"5\" + 1</b> is <b>" + ("5" + 1) + 
    "</b><br><b>\"five\" * 2</b> is <b>" + ("five" * 2) + 
    "</b><br><b>false == 0</b> is <b>" + (false == 0) + 
    "</b><br><b> null == undefined </b> is <b>" + (null == undefined) + 
    "</b><br><b> null == 0 </b> is <b>" + (null == 0) + 
    "</b></p>" +
    "<p>Short-circuiting of logical operators: <br><b>null || \"user\"</b> is <b>" + (null || "user") + 
    "</b><br><b>\"Agnes\" || \"user\"</b> is <b>" + ("Agnes" || "user") + "</b></p>";