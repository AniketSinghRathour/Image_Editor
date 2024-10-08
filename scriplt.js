const input = document.querySelector("input")
const uploadBtn = document.querySelector("#upload")
const img = document.querySelector("img")

const sliderVal = document.querySelector("#range")

let brightnessVal = 100
let blurVal = 0
let greyVal = 0
let hueVal = 0
let saturateVal = 0
let clickedOn


uploadBtn.addEventListener("click", function(){
    input.click()
})

input.addEventListener("change", function(){
    img.src = URL.createObjectURL(input.files[0])
})

function display(e, val){
    document.querySelector("#tag").innerHTML = e
    document.querySelector("#val").innerHTML = val
    sliderVal.value = val
}

document.querySelector("ul").addEventListener("click", function(dets){        
    clickedOn = dets.target.innerHTML;
    document.querySelector("#changes").style.display = "flex"
    if (clickedOn == "Brightness"){
        display(clickedOn, brightnessVal)
        sliderVal.max = 200
    }
    else if (clickedOn == "Blur"){
        display(clickedOn, blurVal)
        sliderVal.max = 10
    }
    else if (clickedOn == "GreyScale"){
        display(clickedOn, greyVal)
        sliderVal.max = 100
    }
    else if (clickedOn == "Hue Rotate"){
        display(clickedOn, hueVal)
        sliderVal.max = 360
    }
    else if (clickedOn == "Saturate"){
        display(clickedOn, saturateVal)
        sliderVal.max = 200
    }
    else if (clickedOn == "Export"){
        const canvas = document.createElement("canvas")
        const ctx = canvas.getContext("2d")
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight

        ctx.filter = `brightness(${brightnessVal}%) blur(${blurVal}px) grayscale(${greyVal}%) hue-rotate(${hueVal}deg) saturate(${saturateVal}%)`
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        document.body.appendChild(canvas)

        const link = document.createElement("a")
        link.download = "edited_image.jpg"
        link.href = canvas.toDataURL()
        link.click()
        canvas.style.display = "none"
    }
})

function effect(val){
    document.querySelector("#val").innerHTML = val
    img.style.filter = `brightness(${brightnessVal}%) blur(${blurVal}px) grayscale(${greyVal}%) hue-rotate(${hueVal}deg) saturate(${saturateVal}%)`
}

sliderVal.addEventListener("change", function(){
    val = sliderVal.value
    if (clickedOn == "Brightness"){
        brightnessVal = val
        effect(val)
    }
    else if(clickedOn =="Blur"){
        blurVal = val
        effect(val)
    }
    else if(clickedOn =="GreyScale"){
        greyValVal = val
        effect(val)
    }
    else if(clickedOn =="Hue Rotate"){
        hueVal = val
        effect(val)
    }
    else if(clickedOn =="Saturate"){
        saturateVal = val
        effect(val)
    }
    
})

document.querySelector("#reset").addEventListener("click", function(){
    brightnessVal = 100
    blurVal = 0
    greyVal = 0
    hueVal = 0
    saturateVal = 0

    img.style.filter = `brightness(${brightnessVal}%) blur(${blurVal}px) grayscale(${greyVal}%) hue-rotate(${hueVal}deg) saturate(${saturateVal}%)`
    document.querySelector("#changes").style.display = "none"
})

