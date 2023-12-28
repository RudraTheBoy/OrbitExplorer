document.addEventListener("DOMContentLoaded", function () {
  const commander = document.getElementById("commander");
  const ms = document.getElementById("ms");
  const pilot = document.getElementById("pilot");
  const fe = document.getElementById("fe");

  const crewPic = document.querySelector(".crewPic");
  const roleElement = document.querySelector(".role");
  const nameElement = document.querySelector(".name");
  const aboutElement = document.querySelector(".about");

  function updateTeamMemberInfo(pic, roleName, memberName, memberAbout) {
    crewPic.src = pic;
    roleElement.textContent = roleName;
    nameElement.textContent = memberName;
    aboutElement.innerHTML = memberAbout.replace(/\n/g, "<br>");
  }

  commander.addEventListener("click", () => {
    removeMemberIndicator();
    commander.classList.add("memberIndicator");
    updateTeamMemberInfo(
      "assets/crew/image-douglas-hurley.png",
      "Commander",
      "Douglas Hurley",
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot \n and former NASA astronaut. He launched into space for the third time as \n commander of Crew Dragon Demo-2."
    );
  });
  ms.addEventListener("click", () => {
    removeMemberIndicator();
    ms.classList.add("memberIndicator");
    updateTeamMemberInfo(
      "assets/crew/image-mark-shuttleworth.png",
      "Mission Specialist",
      "Mark Shuttleworth",
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind \n the Linux-based Ubuntu operating system. Shuttleworth became the first South \n African to travel to space as a space tourist."
    );
  });
  pilot.addEventListener("click", () => {
    removeMemberIndicator();
    pilot.classList.add("memberIndicator");
    updateTeamMemberInfo(
      "assets/crew/image-victor-glover.png",
      "Pilot",
      "Victor Glover",
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the \n International Space Station. Glover is a commander in the U.S. Navy where \n he pilots an F/A-18.He was a crew member of Expedition 64, and served as a \n station systems flight engineer."
    );
  });
  fe.addEventListener("click", () => {
    removeMemberIndicator();
    fe.classList.add("memberIndicator");
    updateTeamMemberInfo(
      "assets/crew/image-anousheh-ansari.png",
      "Flight Engineer",
      "Anousheh Ansari",
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. \n Ansari was the fourth self-funded space tourist, the first self-funded woman to \n fly to the ISS, and the first Iranian in space."
    );
  });

  function removeMemberIndicator() {
    commander.classList.remove("memberIndicator");
    ms.classList.remove("memberIndicator");
    pilot.classList.remove("memberIndicator");
    fe.classList.remove("memberIndicator");
  }
});
