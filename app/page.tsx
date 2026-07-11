export default function Home() {
  const products = [
    { name: "Visa Gift Card", price: "₹500" },
    { name: "Mastercard Gift Card", price: "₹500" },
    { name: "American Express Gift Card", price: "₹1000" },
    { name: "Amazon Gift Card", price: "₹100" },
    { name: "Google Play Gift Card", price: "₹100" },
    { name: "Apple Gift Card", price: "₹1000" },
    { name: "Steam Gift Card", price: "₹250" },
    { name: "Xbox Gift Card", price: "₹500" },
    { name: "PlayStation Gift Card", price: "₹500" },
    { name: "Nintendo eShop Card", price: "₹1000" },
    { name: "Netflix Gift Card", price: "₹500" },
    { name: "Spotify Gift Card", price: "₹119" },
    { name: "Razer Gold", price: "₹250" },
    { name: "Garena Shells", price: "₹100" },
    { name: "Free Fire Diamonds", price: "₹80" },
    { name: "BGMI UC", price: "₹75" },
  ];

  return (
    <main style={{ fontFamily: "Arial", padding: "20px", background: "#f5f5f5" }}>
      <h1 style={{ textAlign: "center", color: "#2563eb" }}>
        CardZone India
      </h1>

      <p style={{ textAlign: "center" }}>
        Buy Digital Gift Cards Instantly
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.name}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,.1)",
            }}
          >
            <h3>{item.name}</h3>
            <p>{item.price}</p>

            <button
              style={{
                width: "100%",
                padding: "10px",
                background: "#2563eb",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
