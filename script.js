// Write your code here
let count = 0;
let subtitle = '';
function toggleOn(id){
    let lightBulb = document.getElementById(id);
    lightBulb.classList.toggle("active");
    count += 1;
    if(count == 1){
        subtitle = `You've clicked the lights 1 time`;
    }
    else{
        subtitle = `You've clicked the lights ${count} times`;
    }
    document.querySelector('h3').innerHTML = subtitle;
    return;
}

