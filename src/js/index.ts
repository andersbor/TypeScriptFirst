interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement>document.getElementById("content");
element.innerHTML = "<h2>" + greeter(user) + " and Anders" + "</h2>";

let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("nameButton");
button.addEventListener("click", doIt);

function doIt(): void {
    let element: HTMLInputElement = <HTMLInputElement>document.getElementById("nameInput");
    let name: string = element.value;

    let divElement: HTMLDivElement = <HTMLDivElement>document.getElementById("nameOutput");
    divElement.innerHTML = "Hallo " + name;

}

let hideShowButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("hideShowButton");
hideShowButton.addEventListener("click", () => {
    let textElement: HTMLDivElement = <HTMLDivElement>document.getElementById("textId");
    if (textElement.style.display === "none") {
        textElement.style.display = "block";
        hideShowButton.innerText = "Hide";
    } else {
        textElement.style.display = "none";
        hideShowButton.innerText = "Show";
    }
});