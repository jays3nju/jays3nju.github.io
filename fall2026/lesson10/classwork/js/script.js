    const menuToggle = document.getElementById("menuToggle");
    const primaryNav = document.getElementById("primaryNav");
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const classesMenu = document.getElementById("classesMenu");
    const submenuToggle = document.querySelector(".submenu-toggle");
    const topicsMenu = document.getElementById("topicsMenu");
    const contactForm = document.getElementById("contactForm");
    const formStatus = document.getElementById("formStatus");

    // Open or close the mobile navigation.
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Open navigation menu" : "Close navigation menu"
      );
      primaryNav.classList.toggle("is-open", !isOpen);
    });

    // Toggle the first level of the Classes dropdown.
    dropdownToggle.addEventListener("click", () => {
      const isOpen = dropdownToggle.getAttribute("aria-expanded") === "true";

      dropdownToggle.setAttribute("aria-expanded", String(!isOpen));
      classesMenu.hidden = isOpen;

      if (isOpen) {
        submenuToggle.setAttribute("aria-expanded", "false");
        topicsMenu.hidden = true;
      }
    });

    // Toggle the nested Course topics menu.
    submenuToggle.addEventListener("click", () => {
      const isOpen = submenuToggle.getAttribute("aria-expanded") === "true";

      submenuToggle.setAttribute("aria-expanded", String(!isOpen));
      topicsMenu.hidden = isOpen;
    });

    // Close the mobile navigation after a link is selected.
    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");
        primaryNav.classList.remove("is-open");
      });
    });

    // Demo form interaction: show a message instead of submitting.
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("name").value.trim();

      formStatus.textContent = `Thanks${name ? `, ${name}` : ""}! Your message is ready to be connected to a form service.`;
      contactForm.reset();
    });

    // Keep the copyright year current.
    document.getElementById("year").textContent = new Date().getFullYear();