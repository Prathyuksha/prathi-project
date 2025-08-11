const memberData = [
  { name: "Dharanidharan", role: "Super Senior", year: "2024", photo: "assets/senior member1.jpeg" },
  { name: "Vidhula", role: "Super Senior", year: "2024", photo: "assets/senior member2.jpeg" },
  { name: "Kavin", role: "Senior Member", year: "2025", photo: "assets/senior member3.jpeg" },
  { name: "Eswara Prathyuksha", role: "Senior Member", year: "2025", photo: "assets/senior member4.jpeg" },
  { name: "Kali Raja", role: "Club Member", year: "2025", photo: "assets/club member1.jpeg" },
  { name: "Harini", role: "Club Member", year: "2025", photo: "assets/club member2.jpeg" }
];

let currentMemberIndex = null;

function showPresidentCarousel() {
  const slide = document.getElementById("term-member-slide");
  slide.innerHTML = "";

  memberData.forEach((member, index) => {
    const memberDiv = document.createElement("div");
    memberDiv.classList.add("member-rectangle");

    memberDiv.innerHTML = `
      <img src="${member.photo}" alt="${member.name}" />
      <div class="member-info">
        <strong>${member.name}</strong><br>${member.role} (${member.year})
      </div>
    `;

    memberDiv.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent bubbling up
      if (currentMemberIndex === index) {
        currentMemberIndex = null;
      } else {
        currentMemberIndex = index;
      }
      updateCarousel();
    });

    slide.appendChild(memberDiv);
  });

  document.getElementById("term-modal").style.display = "block";
  updateCarousel();
}

function updateCarousel() {
  const allMembers = document.querySelectorAll(".member-rectangle");

  allMembers.forEach((div, index) => {
    div.classList.remove("active");
    if (index === currentMemberIndex) {
      div.classList.add("active");
    }
  });
}

window.addEventListener("click", function (e) {
  const modal = document.getElementById("term-modal");
  const isInsideMember = e.target.closest(".member-rectangle");

  // Click outside member cards → shrink all
  if (e.target === modal || !isInsideMember) {
    currentMemberIndex = null;
    updateCarousel();
  }
});

function closeCarousel() {
  document.getElementById("member-carousel-modal").style.display = "none";
}

function prevMember() {
  if (currentMemberIndex > 0) {
    currentMemberIndex--;
    updateCarousel();
  }
}

function nextMember() {
  if (currentMemberIndex < memberData.length - 1) {
    currentMemberIndex++;
    updateCarousel();
  }
}

// Close carousel when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("member-carousel-modal");
  if (e.target === modal) closeCarousel();
});
document.getElementById("term-member-slide").appendChild(memberDiv);

if (event.target === document.getElementById("term-modal")) {
  const active = document.querySelector(".member-rectangle.active");
  if (active) active.classList.remove("active");
}
