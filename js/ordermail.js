const TO_ADDRESS = "orders@examplewebsite142.com";
const form = document.querySelector("#order-form");

function buildOrderMailto() {

    const shirtsize = document.querySelector("#shirtsize").value;
    const shirtcolor = document.querySelector("#shirtcolor").value;
    const quantity = document.querySelector("#quantity").value;
    const productname = document.querySelector("#product-name").textContent;

    const subject = "Order: " + shirtcolor + " " + shirtsize + " " + productname + " x " + quantity;
    const body =
        "Name: " + "\r\n" + "Email: " + "\r\n\r\n" + "Order Details: " + "\r\n" + "Product: " + productname + "\r\n" + "Size: " + shirtsize + "\r\n" + "Color: " + shirtcolor + "\r\n" + "Quantity: " + quantity;
    return (
        "mailto:" + TO_ADDRESS + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body)
    );
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    window.location.href = buildOrderMailto();
});