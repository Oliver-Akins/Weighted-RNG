const add_choice = () => {
    let index = document.getElementsByClassName("choice").length;


    let choice_div = document.getElementById("choice-template");
    let clone = choice_div.content.cloneNode(true);
    clone.children[0].children[0].id = `text-in-${index}`;
    clone.children[0].children[1].id = `weight-in-${index}`;

    // Add to document without resetting the other ones
    document.getElementById("choices").appendChild(clone);
};