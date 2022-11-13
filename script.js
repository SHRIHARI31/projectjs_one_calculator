let outputscreen = document.getElementById('output-screen');
let error
function display(num)
{
    outputscreen.value += num;
}
function equ()
{
    try{
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err){
      outputscreen.value = 'syntax error ';
    }
   
}
function ac()
{
   outputscreen.value = ' ';
}
function del()
{
    outputscreen.value = outputscreen.value.slice(0,-1);
}

