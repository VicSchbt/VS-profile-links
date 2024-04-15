const profile = {
  name: "Vic Schbt",
  location: "Lille, France",
  labels: ["Software Engineer", "Software Craftwoman", "Content Creator"],
  description:
    "Working as Web Developer the day, Becoming a Creative Developer at night.",
  links: [
    {
      label: "Github",
      url: "https://github.com/VicSchbt",
      icon: `assets/icons-light-mode/icon-github-30x30-black.png`,
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/feed/",
      icon: `assets/icons-light-mode/icon-linkedin-50x50-black.png`,
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/vicschbt.codes/",
      icon: `assets/icons-light-mode/icon-instagram-30x30-black.png`,
    },
  ],
};

const nameHeading = document.querySelector(".header-content__name");
const labelsList = document.querySelector(".header-content__labels");
const bioParagraph = document.querySelector(".header-content__bio");
const linksList = document.querySelector(".header-content__links");

nameHeading.innerHTML = profile.name;
bioParagraph.innerHTML = '"' + profile.description + '"';

profile.labels.forEach((label) => {
  labelsList.innerHTML += `<li class="header-content__label">
  ${label}
</li>`;
});

profile.links.forEach((link) => {
  linksList.innerHTML += `
	<li class="header-content__link">
		<a href="${link.url}" target="_blank" aria-label="${link.label}">
			<img src="${link.icon}" alt="icon ${link.label}" type="image/png"/>
		</a>
	</li>`;
});
