// Data for each question and corresponding scores
const data = [
    {
        question: "Overall Satisfaction",
        scores: { week1: 4.1, week2: 4.2, week3: 4.3, week4: 4.1 },
        totalAverage: 4.18
    },
    {
        question: "Likely to Recommend",
        scores: { week1: 8.5, week2: 8.7, week3: 8.9, week4: 8.6 },
        totalAverage: 8.68
    },
    {
        question: "Customer Service",
        scores: { week1: "85", week2: "88", week3: "90", week4: "87" },
        totalAverage: "87.5"
    },
    {
        question: "Ease of Use of Product",
        scores: { week1: 4.3, week2: 4.4, week3: 4.5, week4: 4.2 },
        totalAverage: 4.35
    }
];

// Function to determine unit based on the total average value
function getUnit(average) {
    if (average > 50 || (typeof average === "string" && average.includes("%"))) {
        return "%";
    } else if (average <= 5) {
        return "/5";
    } else if (average > 5 && average <= 10) {
        return "/10";
    }
    return "";
}

// Function to create each vignette dynamically
function createVignette(data) {
    const container = document.getElementById("vignettes-container");
    data.forEach(item => {
        const unit = getUnit(item.totalAverage);

        // Vignette template
        const vignetteHTML = `
            <section class="sub-menu-parent" tabindex="0">
                <article class="vignette">
                    <h3>${item.totalAverage}<span class="unit">${unit}</span></h3>
                    <p class="sub2">${item.question}</p>
                </article>
                <article class="dropdown-content">
                    <div class="week-row">
                        <div class="week-item">
                            <span class="week-title">Week 1</span>
                            <span class="week-percentage">${item.scores.week1}${unit}</span>
                        </div>
                        <div class="week-item">
                            <span class="week-title">Week 3</span>
                            <span class="week-percentage">${item.scores.week3}${unit}</span>
                        </div>
                    </div>
                    <div class="week-row">
                        <div class="week-item">
                            <span class="week-title">Week 2</span>
                            <span class="week-percentage">${item.scores.week2}${unit}</span>
                        </div>
                        <div class="week-item">
                            <span class="week-title">Week 4</span>
                            <span class="week-percentage">${item.scores.week4}${unit}</span>
                        </div>
                    </div>
                </article>
            </section>
        `;

        // Append vignette to the container
        container.insertAdjacentHTML("beforeend", vignetteHTML);
    });
}

// Initialize vignettes
createVignette(data);


const questionsData = [
    {
        question: "Value for Money",
        scores: { week1: 4.0, week2: 4.1, week3: 4.2, week4: 4.0 },
        totalAverage: 4.08,
        scale: "1-5"
    },
    {
        question: "Issues Encountered",
        scores: { week1: "15", week2: "12", week3: "10", week4: "13" },
        totalAverage: "12.5",
        scale: "%"
    },
    {
        question: "Support Resolution Time",
        scores: { week1: 3.8, week2: 4.0, week3: 4.2, week4: 3.9 },
        totalAverage: 3.98,
        scale: "1-5"
    },
    {
        question: "Likelihood of Purchase Again",
        scores: { week1: 8.1, week2: 8.3, week3: 8.5, week4: 8.2 },
        totalAverage: 8.28,
        scale: "1-10"
    }
];

// Fonction pour générer les sections avec les données
function addQuestionsToPage(data) {
    const container2 = document.getElementById("vignettes-container2");
    data.forEach(item => {
        // Déterminer l'unité à afficher en fonction de la scale
        let unit = "";
        if (item.scale === "%") {
            unit = "%";
        } else if (item.scale === "1-5") {
            unit = "/5";
        } else if (item.scale === "1-10") {
            unit = "/10";
        }

        // Créer la structure HTML pour chaque vignette avec les données de la question
        const section = document.createElement('section');
        section.classList.add('sub-menu-parent2', 'sub-menu-parent');
        section.setAttribute('tabindex', '0');
        section.innerHTML = `
            <article class=".vignette2" id="color">
                <h3>${item.totalAverage}<span class="unit">${unit}</span></h3>
                <p class="sub2">${item.question}</p>
            </article>
            <article class="dropdown-content" id="unfold">
                <div class="week-row">
                    <div class="week-item">
                        <span class="week-title">Week 1</span>
                        <span class="week-percentage">${item.scores.week1}${unit}</span>
                    </div>
                    <div class="week-item">
                        <span class="week-title">Week 3</span>
                        <span class="week-percentage">${item.scores.week3}${unit}</span>
                    </div>
                </div>
                <div class="week-row">
                    <div class="week-item">
                        <span class="week-title">Week 2</span>
                        <span class="week-percentage">${item.scores.week2}${unit}</span>
                    </div>
                    <div class="week-item">
                        <span class="week-title">Week 4</span>
                        <span class="week-percentage">${item.scores.week4}${unit}</span>
                    </div>
                </div>
            </article>
        `;

        // Ajouter la nouvelle section à la page
        container2.appendChild(section);
    });
}

// Appeler la fonction pour ajouter dynamiquement les vignettes
addQuestionsToPage(questionsData);