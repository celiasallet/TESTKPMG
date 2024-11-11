function openModal(email) {
    document.getElementById("recipientEmail").value = email;
    document.getElementById("emailModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("emailModal").style.display = "none";
}

// Optional: Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById("emailModal");
    if (event.target === modal) {
        closeModal();
    }
}

// Contact details array
const contacts = [
    {
        name: "Alex Johnson",
        position: "Digital Marketing Manager",
        email: "alex.johnson@email.com",
        phone: "(123) 456-7890",
        cta: "Reach out for marketing solutions"
    },
    {
        name: "Jamie Lee",
        position: "Client Success Specialist",
        email: "jamie.lee@email.com",
        phone: "(987) 654-3210",
        cta: "Contact for customer support queries"
    },
    {
        name: "Taylor Smith",
        position: "Senior Sustainability Lead",
        email: "taylor.smith@email.com",
        phone: "(555) 123-4567",
        cta: "Learn about sustainability services"
    },
    {
        name: "Morgan Kim",
        position: "Event Coordinator",
        email: "morgan.kim@email.com",
        phone: "(321) 987-6543",
        cta: "Inquire about upcoming events"
    },
    {
        name: "Riley Nguyen",
        position: "Head of Public Sector",
        email: "riley.nguyen@email.com",
        phone: "(789) 012-3456",
        cta: "Explore public sector offerings"
    },
    {
        name: "Jordan Parker",
        position: "Tech Solutions Advisor",
        email: "jordan.parker@email.com",
        phone: "(456) 789-0123",
        cta: "Schedule a tech consultation"
    }
];

// Function to dynamically populate cards
function generateCards() {
    const cardContainer = document.getElementById("cardContainer");

    contacts.forEach(contact => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("onclick", `openModal('${contact.email}', '${contact.name}')`);

        card.innerHTML = `
            <div id="position" class="card-position">
                <p>${contact.position}</p>
            </div>
            <div id="cta" class="card-cta">
                <p>"${contact.cta}"</p>
            </div>
            <div id="profile-info" class="card-profile-info">
                <div class="profile-image">
                    <img src="Imagery/blank-profile-picture.png" alt="Profile Image">
                </div>
                <div class="profile-details">
                    <p id="name">${contact.name}</p>
                    <div class="coor-details">
                        <p id="email">${contact.email}</p>
                        <p id="phone">${contact.phone}</p>
                    </div>
                </div>
            </div>
        `;
        cardContainer.appendChild(card);
    });
}

// Modal control functions
function openModal(email, name) {
    document.getElementById("recipientEmail").value = email;
    document.getElementById("modalName").innerText = `Contact ${name}`;
    document.getElementById("emailModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("emailModal").style.display = "none";
}

// Initialize cards on page load
window.onload = generateCards;