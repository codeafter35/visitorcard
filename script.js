function generateVisitorCard() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;

    // Create a visitor card dynamically
    const visitorCardHTML = `
        <div class="visitor-card">
            <h2>Visitor Card</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Visit Date:</strong> ${date}</p>
        </div>
    `;

    // Display the visitor card on the page
    document.getElementById('visitorCardContainer').innerHTML = visitorCardHTML;
}

function printVisitorCard() {
    const printContents = document.getElementById('visitorCardContainer').innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    // Restore the original document content
    document.body.innerHTML = originalContents;
}

