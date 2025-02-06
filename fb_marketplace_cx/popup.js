document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");
    const uploadButton = document.getElementById("upload-button");

    // Fetch products from Laravel API
    fetch("http://localhost:8000/api/products")
        .then((response) => response.json())
        .then((products) => {
            products.forEach((product) => {
                const option = document.createElement("option");
                option.value = product.id;
                option.textContent = `${product.name} - €${product.price}`;
                productList.appendChild(option);
            });
        })
        .catch((error) => console.error("Error fetching products:", error));

    // Handle upload button click
    uploadButton.addEventListener("click", () => {
        const selectedProductId = productList.value;
        uploadToMarketplace(selectedProductId);
    });
});

// Function to upload product to Facebook Page using Graph API
async function uploadToMarketplace(productId) {
    try {
        // Step 1: Fetch product details from Laravel API
        const response = await fetch(
            `http://localhost:8000/api/products/${productId}`
        );
        const product = await response.json();

        // Step 2: Facebook Page ID & Access Token (Replace with your own)
        const PAGE_ID = "YOUR_FACEBOOK_PAGE_ID"; // Replace with your Page ID
        const ACCESS_TOKEN = "YOUR_FACEBOOK_PAGE_ACCESS_TOKEN"; // Replace with your page access token

        // Step 3: Construct the post message
        const postMessage = `${product.name}\n\nPrice: €${product.price}\n\n${product.description}\n\n👉 Buy now: http://yourwebsite.com/products/${product.id}`;

        // Step 4: Upload product as a post on the Facebook Page
        const fbResponse = await fetch(
            `https://graph.facebook.com/v18.0/${PAGE_ID}/feed`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: postMessage,
                    link: `http://yourwebsite.com/products/${product.id}`,
                    access_token: ACCESS_TOKEN,
                }),
            }
        );

        const fbResult = await fbResponse.json();
        console.log("Facebook API Response:", fbResult); // ✅ Log entire response

        if (fbResult.error) {
            console.error("Facebook API Error:", fbResult.error.message); // ✅ Log error message
            alert(`Error uploading: ${fbResult.error.message}`);
        } else {
            alert(`Product uploaded successfully! Post ID: ${fbResult.id}`);
        }
    } catch (error) {
        console.error("Unexpected Error:", error); // ✅ Log unexpected errors
        alert(error);
    }
}
