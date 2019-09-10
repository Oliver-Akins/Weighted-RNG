const add_choice = () => {
    let index = document.getElementsByClassName("choice").length;


    let choice_div = document.getElementById("choice-template");
    let clone = choice_div.content.cloneNode(true);
    clone.childNodes[1].childNodes[1].id = `text-in-${index}`;
    clone.childNodes[1].childNodes[3].id = `weight-in-${index}`;

    // Add to document without resetting the other ones
    document.getElementById("choices").appendChild(clone);
};