function get_random_color()
            {var color = "";
                for(var i = 0; i < 3; i++) {
                    var sub = Math.floor(Math.random() * 256).toString(16);
                    color += (sub.length == 1 ? "0" + sub : sub);}
                return "#" + color;}

          var start = new Date().getTime()
          function makeFunctionAppear(){
          var width = (Math.random() * 200 + 100);
          var top = Math.random() * 400;
          var left = Math.random() * 400;

          if(Math.random()<0.5) {
          document.getElementById("square").style.borderRadius = "50%"}
          else{document.getElementById("square").style.borderRadius = "0"}
          document.getElementById("square").style.backgroundColor = get_random_color()
          document.getElementById("square").style.width = width + "px"
          document.getElementById("square").style.height = width + "px"
          document.getElementById("square").style.top = top + "px"
          document.getElementById("square").style.left = left + "px"
          document.getElementById("square").style.display = "block"
          start = new Date().getTime()}

          function Appear(){
                setTimeout(makeFunctionAppear,Math.random()*500)}

          Appear();

            document.getElementById("square").onclick = function(){
            document.getElementById("square").style.display = "none"
            var end = new Date().getTime()
            var timeTaken = ((end - start) / 1000)
            document.getElementById("new-value").innerHTML = timeTaken + " seconds."
            Appear();}
