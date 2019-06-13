function buttonA(){
			x = document.getElementById("box1").value;
			y = document.getElementById("box2").value;
            var z = parseFloat(x) + parseFloat(y);
            document.getElementById("box3").value = parseFloat(z);}
function buttonB(){
			document.getElementById("box1").value = "";
			document.getElementById("box2").value = "";
            document.getElementById("box3").value = "";}
function buttonC(){
			x = document.getElementById("box4").value;
			y = document.getElementById("box5").value;
            var z = parseFloat(x) - parseFloat(y);
            document.getElementById("box6").value = parseFloat(z);}
function buttonD(){
			document.getElementById("box4").value = "";
			document.getElementById("box5").value = "";
			document.getElementById("box6").value = "";
        }
function buttonE()
		{
			x = document.getElementById("box7").value;
			y = document.getElementById("box8").value;
            var z = parseFloat(x) * parseFloat(y);
            document.getElementById("box9").value = parseFloat(z);
		}
function buttonF()
		{
			document.getElementById("box7").value = "";
			document.getElementById("box8").value = "";
			document.getElementById("box9").value = "";
        }
function buttonG()
		{
			x = document.getElementById("box10").value;
			y = document.getElementById("box11").value;
            var z = parseFloat(x) / parseFloat(y);
            document.getElementById("box12").value = parseFloat(z);
		}
function buttonH()
		{
			document.getElementById("box10").value = "";
			document.getElementById("box11").value = "";
			document.getElementById("box12").value = "";
		}
