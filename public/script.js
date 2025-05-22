import items from "./data.js"
const mainTag = document.querySelector("main");


const contentArray = items.map((item) => {
    let itemCarrier = document.createElement("div");

    const content = `
            <article class="card" >
                    <img src=${item.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p>Price: $${item.price}</p>
                    <p>Description: ${item.description}</p>
                    
                    <button class = "purchase-button"> Purchase</button>
                    </div>
                </article>

    `;
    itemCarrier.innerHTML = content;

    const button = itemCarrier.querySelector(".purchase-button");
    
    button.addEventListener("click",(event) => {
        window.location.href = "purchase.html"
    });

    return itemCarrier;
});

for (let i = 0; i < contentArray.length; i++){
    mainTag.append(contentArray[i]);
}