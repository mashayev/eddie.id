const allPanels = Array.from(document.querySelectorAll(".panel"));
const allAccordion = Array.from(document.querySelectorAll(".accordion"));
const allChevrons = Array.from(document.querySelectorAll("[data-accordion-icon]"));

const expandAccordion = (elem) => {
  const accordionHeader = elem.closest('.accordion-header');
  const isCurrentlyActive = accordionHeader.classList.contains("active");
  
  if (!isCurrentlyActive) {
    allAccordion.forEach((acc) => {
      acc.classList.remove("active");
      const header = acc.closest('.accordion-header');
      if (header) header.classList.remove("active");
    });
    
    allChevrons.forEach((icon) => {
      icon.style.transform = "rotate(0deg)";
    });
    
    allPanels.forEach(function (panel) {
      panel.style.maxHeight = null;
      panel.classList.remove("active");
      panel.style.opacity = "0";
    });
    
    elem.parentElement.classList.add("active");
    accordionHeader.classList.add("active");
    
    const chevron = elem.querySelector("[data-accordion-icon]");
    if (chevron) {
      chevron.style.transform = "rotate(180deg)";
    }
    
    const activePanel = accordionHeader.nextElementSibling;
    if (activePanel) {
      activePanel.classList.add("active");
      activePanel.style.maxHeight = activePanel.scrollHeight + "px";
      activePanel.style.opacity = "1";
      elem.setAttribute("aria-expanded", "true");
      
      if (activePanel.id !== "skill-panel" && document.querySelector("#skill-panel")) {
        const skillBars = Array.from(document.querySelectorAll(".skill-bar"));
        skillBars.forEach((elem) => {
          elem.style.width = "0";
          elem.classList.remove("animate");
        });
      }
    }
  } else {
    accordionHeader.classList.remove("active");
    elem.parentElement.classList.remove("active");
    
    const chevron = elem.querySelector("[data-accordion-icon]");
    if (chevron) {
      chevron.style.transform = "rotate(0deg)";
    }
    
    const panel = accordionHeader.nextElementSibling;
    if (panel) {
      panel.style.maxHeight = null;
      panel.classList.remove("active");
      panel.style.opacity = "0";
      elem.setAttribute("aria-expanded", "false");
    }
  }
};

document.addEventListener('DOMContentLoaded', function() {
  allAccordion.forEach((acc, index) => {
    const button = acc.querySelector('button');
    const isActive = acc.classList.contains('active');
    const chevron = button?.querySelector("[data-accordion-icon]");
    
    if (button) {
      button.setAttribute("aria-expanded", isActive ? "true" : "false");
    }
    
    if (chevron && isActive) {
      chevron.style.transform = "rotate(180deg)";
    }
  });
  
  const accordionItems = document.querySelectorAll('.glass-card');
  accordionItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
});
