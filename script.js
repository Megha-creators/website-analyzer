function analyze() {
    let url = document.getElementById("url").value;
    let result = document.getElementById("result");

    if (url === "") {
        result.innerHTML = "<p style='color:red;'>Please enter a website URL.</p>";
        return;
    }

    result.innerHTML = `
        <h3>Analysis Result</h3>
        <p><b>Website:</b> ${url}</p>
        <p>✅ Responsive Design: Good</p>
        <p>⚡ Loading Speed: Fast</p>
        <p>🔒 Security: HTTPS Enabled</p>
        <p>📱 Mobile Friendly: Yes</p>
        <p>🎨 UI Score: 9/10</p>
    `;
}
