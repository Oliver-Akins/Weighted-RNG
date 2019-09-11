const construct_choices = () => {
    let choices = document.getElementById("choices").children;
    let start_of_next_range = 1;
    let options = [];

    // Construct the array for choosing
    for (choice of choices) {
        let name = choice.children[0].value;
        let weight = parseInt(choice.children[1].value);

        if (Number.isNaN(weight)) {
            break;
        };

        options.push({
            "name": name,
            "min": start_of_next_range,
            "max": start_of_next_range + weight - 1
        });
        start_of_next_range += weight;
    };

    return {
        "choices": options,
        "max_value": start_of_next_range - 1
    };
};


const choose_option = () => {
    let {choices, max_value} = construct_choices();

    // No options, error
    if (choices.length === 0 && max_value === 0) {
        document.getElementById("result").innerText = "\nERROR: No Choices to pick from";
        return;
    }
    
    // Only one option exists, no need to waste time with randomness
    else if (choices.length === 1) {
        document.getElementById("result").innerText = choices[0].name
    };


    let chosen_value = Math.round(Math.random() * max_value);


    // Find the choice which the randomly chosen number fits within
    for (choice of choices) {
        if (choice.min <= chosen_value <= choice.max) {
            document.getElementById("result").innerText = choice.name;
            return;
        };
    };
};