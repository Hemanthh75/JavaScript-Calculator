# JavaScript-Calculator
I have created a Calculator using JavaScript in this project. Please go through the readme file for more understanding.
Index.html page:

1.First I have created a folder named Javascript assignment and added it to visual studio.
2.Now in the folder I have created index.html page and added the doctype, html, head and body elements.
3.In head I have added the meta information, the title and added bootstrap's CSS link.
4.Just before end body tag I have added the bootstrao's JS link.
5.Now coming to body element first I have created a h1 tag with title 'JavaScript Calculator'.
6.Using inline styling I have added the text decoration to underline.
7.Now I have created div element using bootstrap's class 'container-fluid'.
8.Then I have created the row div element and in that I have added 3 column div elements with class name 'col-sm-4' so that 12 sections will shared by three columns.
9.In the first div column I have added an h3 tag 'Number-1' and then I have added a number type input field with some id and width as 100%.
10.In the second div column I have created a dropdown using select and options tags and I have given a value attribute for all the options.
11.In the third div column I have added an h3 tag 'Number-2' and then I have added a number type input field with some id and width as 100%.
12.Then I have given a line break using br tag.
13.Now I have created a button using bootstrap link. So for creating large button I have taken 'd-grid' class and I have created a primary button using 'btn btn-primary' class
   and named it as 'Submit'.
14.Then I have created another div using bootstrap row class and in that I have created two column divs.
15.I left first div as empty and in the second div I have added a h3 tag 'Answer:' and added a number type input field with some id and width as 100%.
16.Used diabled option in input field so that it can be readonly.
17.By now I have completed the html, css and bootstrap part, now we are gonna dive into JS.


Adding Javascript:

1.Firstly I have created a code.js file and linked it in the html file using script tag.
2.Now the thing is when we click on the submit button the result needs to be shown on the Answer box.
3.Let's do this using functions.
4.So first of all I'm creating a function named result() in code.js using function keyword and curly braces.
6.At the same time in the HTML page, I have created an attribute named 'onclick' in the button element and linked the function there using 'onclick = result()'.
7.Now in code.js, in the result function I'm writing the code.
8.First of all I have declared a variable named 'a' using let and assigned the value of number 1 input field using the method 'document.getElementById("num1").value.
9.Using the id I have targetted the element and I have placed the method in parseInt() so that the vlue will be number datatype.
10.Similary I have declared varibale 'b' and assigned the vakue of number 2 inout field using same process.
11.Now I have declared another variable for storing operator value.
12.Like the above two variablea I have targetted the opeartor by id using the same method but here I did not added parseInt as operator is not a number.
13.Now I have started using conditional statements.
14.Using if-else statements I have written the code as follows.
15.First I have used if keyword with the condition (sum == "add") where sum is the variable that we declared above for operands and "add" is the value attribute from options
   of dropdown in the html page.
16.This means if the value of sum variable is '+' we need to add the variable a and b so that we will get the result of (a+b).
17.So for this using set method I have set the value of the Answer input field as follows 'document.getElementByID("answer").value = (a+b);.
18.Next I have used else if and for the condition (sum == 'sub') I have set the value of answer to (a-b) using same above menthod.
19.Simliarly using else if, I have set the values for two other conditions (sum == 'mul') and (sum == 'div') as (a*b) and (a/b) using the same above document method.
20.From this the Javascript for result input field is done.
21.Now we need to set the following step for our assignment "On change of any input, the answer should be blank and need to click the button again"
22.To do this I have created a new function named clr().
23.At the same time for the input fields of number1, operator and number2 I have added 'onchange' attribute and linked it to the clr function as follows 'onchange = clr()'
24.So coming to the clr() function, we need to write the code so that upon changing any input the answer box should be empty.
25.For this i have targetted the answer box using id and set the answer box value to "" (empty) using document.getElementById("answer").value = "".
26.So save all the files and refresh the page and calculator is created.
