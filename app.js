// get all img container 

let childElement = document.querySelectorAll(".image-container")
// array of image URL 
let imageUrls = ["2020-bmw-m8-competition-gran-coupe-102-1617900094.jpg", "BMW-M8-CC-0.jpg", "Bmw-rose.jpg", "img-1.jpg"];
//  Initial z-index value
let zIndex = 1
// ITEREATE through each img container

childElement.forEach((element, index)=>{
    // create an img Element
    let img = document.createElement("img");
    img.setAttribute("src", imageUrls[index]);
    img.setAttribute("class","image");
    element.appendChild(img);
    // Add a click event listener
    element.addEventListener("click", () =>{
        zIndex++;
        element.style.right = "50em"
        element.style.zIndex = zIndex.toString();
        element.style.transform = "rotate(0deg)"
        // APPLY Transition to right property
        element.style.transition = " right 0.3 ease" 
        // Remove the class and reset properties after delay
        setTimeout(()=>{
            zIndex -= 3 ;
            element.style.right="";
            element.style.zIndex = zIndex.toString();
            element.style.transform = "",
// set a transition for clearing the transition property
element.style.transition = "all 0.3 ease";
// clrar the transition property after a slight delay 
setTimeout(()=>{
    element.style.transition = "";
 
},300)
        }, 1000)


    })
})
