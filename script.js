/**
Destinations list
Total Budget
Days Planned
Hotel Suggestion
Trip Type
 */

const HotelBudgetSuggestion = (budget, days) => {
    const final = budget/days;
    if (final < 2_000)
        return "Budget Hotels.";
    else if (final <= 5_000)
        return "Mid-range Hotels.";
    return "Luxury Hotels.";
};


function main(){ // To use return to make program clean
    const destinations = [];
    const count = prompt("Enter the amount of destinations");
    if (!(count > 0)) return alert("Value is either invalid or is less than 1");

    if (count < 3 || count > 5) return alert("Value must be between 3 and 5");

    for (let i = 1; i <= count; ++i)
        destinations.push(prompt(`Enter the ${i}${i == 1 && "st" || i == 2 && "nd" || i == 3 && "rd" || "th"} destination name`));

    const budget = Number(prompt("Enter the monthly budget"));

    if (Number.isNaN(budget))
        return alert("Value you entered is not a number");

    if (budget < 10_000)
        console.log("Plan a short domestic trip.");
    else if (budget <= 50_000)
        console.log("You can plan a long domestic trip.");
    else 
        console.log("International trip possible!");

    const days = Number(prompt("Enter how many days"));
    if (Number.isNaN(days))
        return alert("Value you entered is not a number");

    let triptype = "";
    if (days < 3)
        triptype = "Weekend Getaway.";
    else if (days <= 7)
        triptype = ("Perfect Holiday Trip.");
    else
        triptype = ("Extended Vacation.");


    // Final Travel Summary
    console.log(`Destinations list: [${destinations}]`);
    console.log(`Total Budget: $${budget}`);
    console.log(`Days Planned: ${days}`);
    console.log(`Hotel Suggestion: ${HotelBudgetSuggestion(budget, days)}`);
    console.log(`Trip Type: ${triptype}`);
    console.log(`Travel Summary: You can enjoy ${budget <= 50_000 && "a domestic" || "an international"} holiday with ${(budget / days < 5_000) && "little difficulties" || "comfort"}`);
    return true; // indicating that the program completed successfully
}


while (!main());