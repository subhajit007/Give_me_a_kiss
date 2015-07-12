var love=1;

function f1()
{
    sweetAlert("Then Give Me A Kiss ");
}


function f()
{
    if(love==1)
        {
            Bn.style.top=90;
            Bn.style.left=500;
            love=2;
        }
    else if(love==2)
        {
            Bn.style.top=90;
            Bn.style.left=50;
            love=3;
        }
    else if(love==3)
        {
            Bn.style.top=235;
            Bn.style.left=360;
            love=1;
        }
}
swal("Good job!", "You clicked the button!", "success")