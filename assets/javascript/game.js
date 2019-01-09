        var score = 0;
        var wins=0;
        var losses=0;
        var goal =0;
        var ranNums = [];


    function initialize(){
        score=0;
        ranNums=[];
        //sets the randomized goal number
        goal = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
        //pushes random numbers for the buttons into the ranNums array
        for(i = 0; i < 4; i++){
            ranNums.push(Math.floor(Math.random() * (12 - 1 + 1) + 1));
            console.log(ranNums[i]);
        }
       
        console.log(goal);
        $("#tomeet").html(goal);

        }

        function events(){
            $("#bluebtn").click(function(){
                var x;
                x = ranNums[0];
                score = score + x;
                $("#score").html(score);
                console.log(x);
                checkWin();
            });
            $("#greenbtn").click(function(){
                var x;
                x = ranNums[1];
                score = score + x;
                $("#score").html(score);
                console.log(x);
                checkWin();
            });
            $("#purplebtn").click(function(){
                var x;
                x = ranNums[2];
                score = score + x;
                $("#score").html(score);
                console.log(x);
                checkWin();
            });
            $("#pinkbtn").click(function(){
                var x;
                x = ranNums[3];
                score = score + x;
                $("#score").html(score);
                console.log(x);
                checkWin();
            });
        }
    

    function checkWin(event){
        

        if (score == goal){
            alert("You Win!");
            wins++;
            $("#wins").html(wins);
            score = 0;
            $("#score").html(score);
            initialize();
        } else if (score > goal){
            alert("You Lose!");
            losses++;
            $("#losses").html(losses);
            score = 0;
            $("#score").html(score);
            initialize();
        }
    }

    $( document ).ready(function() {
        initialize();
        events();
    });