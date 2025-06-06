document.addEventListener("DOMContentLoaded", () => {
  const fichiers = [
    { titre: "Cours Réseaux", url: "https://monlien.github.io/reseau.pdf" },
    { titre: "TP Linux", url: "https://monlien.github.io/tp-linux.zip" }
  ];

  const liste = document.getElementById("fichiers");
  fichiers.forEach(fichier => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${fichier.url}" download>${fichier.titre}</a>`;
    liste.appendChild(li);
  });
});



document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  const plainObject = Object.fromEntries(data.entries());
  const jsonData = JSON.stringify(plainObject);

  const response = await fetch("https://formspree.io/f/xannrora", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: jsonData
  });

  if (response.ok) {
    document.getElementById("confirmation").style.display = "block";
    form.reset();
    setTimeout(() => {
      window.location.href = "#accueil"; // ou "/" si tu veux aller à la vraie page d’accueil
    }, 2000);
  } else {
    alert("Une erreur est survenue. Veuillez réessayer.");
  }
});
