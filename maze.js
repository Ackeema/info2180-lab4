 


    var boundary;
    var start = true;
    var end = false;

	window.onload = function(){
    boundary = document.querySelectorAll(".boundary");
    document.getElementById("boundary1").addEventListener("mouseover",function(){
    document.getElementById("boundary1").className="boundary youlose";
    });


    for(let i=0;i<=boundary.length-1;i++){
        boundary[i].addEventListener("mouseover",function(){
            for(var j =0;j<boundary.length-1;j++){
                boundary[j].className="boundary youlose";
                document.getElementById("status").innerHTML="You Lose!";
            }
        });
    }

    document.getElementById("start").addEventListener("click",function(){
        for(var i=0;i<boundary.length-1;i++){
            boundary[i].className="boundary";
        }
    });

    document.getElementById("end").addEventListener("mouseover",function(){
        if(!document.getElementById("boundary1").classList.contains("youlose")){
            document.getElementById("status").innerHTML="You Win!";
        }
        else{
            document.getElementById("status").innerHTML="You Lose!";
        }
    });

    document.getElementById("maze").addEventListener("mouseout",function(){
        if(start){
            end= !end;
            start= !start;
            document.getElementById("status").innerHTML="Womp you tried to cheat!";
            for(i=0;i<boundary.length;i++){
                boundary[i].classList.add('youlose');
            }
        }
    });
}