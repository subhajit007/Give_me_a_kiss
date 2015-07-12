var love=1;

function f1()
{
    sweetAlert("Then Give Me A Kiss ");
}


function f()
{
    if(love==1)
        {
            document.getElementById('Bn').style.top = "90px";
            document.getElementById('Bn').style.left="500px";
            love=2;
        }
    else if(love==2)
        {
            document.getElementById('Bn').style.top="90px";
            document.getElementById('Bn').style.left="50px";
            love=3;
        }
    else if(love==3)
        {
            document.getElementById('Bn').style.top="235px";
            document.getElementById('Bn').style.left="360px";
            love=1;
        }
}