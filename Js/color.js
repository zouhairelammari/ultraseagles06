class Color{
    constructor(){
        this.color1 = document.getElementById("color1");
        this.color1.addEventListener("click",()=>{
            this.select_color("color1");
        });
        this.color2 = document.getElementById("color2");
        this.color2.addEventListener("click",()=>{
            this.select_color("color2");
        });
        this.color3 = document.getElementById("color3");
        this.color3.addEventListener("click",()=>{
            this.select_color("color3");
        });
        this.color4 = document.getElementById("color4");
        this.color4.addEventListener("click",()=>{
            this.select_color("color4");
        });

        if(localStorage.getItem("COLOR")==null){
            document.body.style.background = "linear-gradient(90deg, rgba(160,247,146,1) 0%, rgba(58,154,40,1) 51%, rgba(155,200,144,1) 100%)";
        }

        this.select_color(localStorage.getItem("COLOR"));
    }

    select_color(color){
        if(color=="color1"){
            document.body.style.background = "linear-gradient(90deg, rgba(160,247,146,1) 0%, rgba(58,154,40,1) 51%, rgba(155,200,144,1) 100%)";
        }
        else if(color=="color2"){
            document.body.style.background = "rgb(175,224,180)";
        }
        else if(color=="color3"){
            document.body.style.background = "rgb(24,119,40)";
        }
        else if(color=="color4"){
            document.body.style.background = "rgb(142,181,138)";
        }
        localStorage.setItem("COLOR",color);
    }
}

onload = new Color();