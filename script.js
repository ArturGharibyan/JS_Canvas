const canvas=document.getElementById("canvas")
const ctx=canvas.getContext("2d")
ctx.lineWidth=5
ctx.strokeStyle="black"

creat.addEventListener("click",function(){
    let inp1 = document.getElementById("inp1").value
    let inp2 = document.getElementById("inp2").value
  
    let x=inp1.split("-")
    ctx.rect(x[0], x[1], x[2], x[3]);
    ctx.stroke();

    let y = inp2.split("-")
    ctx.rect(y[0], y[1], y[2], y[3]);
    ctx.stroke()
})


document.addEventListener("keydown",function(e){
let select = document.getElementById("sec")
let color = document.getElementById("Color")
let inp3=document.getElementById("inp3")
let inp4=document.getElementById("inp4")
    if(e.keyCode==13){
    if(select.value=="a1"){
    let x =inp3.value.split("-")
    ctx.rect(x[0],x[1],x[2],x[3])
    ctx.strokeStyle=color.value
    ctx.stroke()
    }
    if(e.keyCode==13){
        if(select.value=="a2"){
        let y =inp3.value.split("-")
        ctx.beginPath()
        ctx.arc(y[0],y[1],y[2],y[3],y[4])
        ctx.strokeStyle=color.value
        ctx.stroke()
        ctx.closePath()
        }
    }
    if(e.keyCode==13){
        if(select.value=="a3"){
        let z =inp3.value.split("-")
        ctx.beginPath()
        ctx.moveTo(z[0],z[1])
        ctx.lineTo(z[2],z[3])
        ctx.lineTo(z[4],z[5])
        ctx.lineTo(z[6],z[7])
        ctx.strokeStyle=color.value
        ctx.stroke()
        ctx.closePath()

        }
    }
            
}
})
