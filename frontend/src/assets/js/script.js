"use strict";

/**
 * Add an event listener to an element or a list of elements
 * @param {Element|NodeList} elements - Target element or a NodeList of elements
 * @param {string} eventType - Type of event to listen for
 * @param {Function} handler - Callback function to execute
 */
const addEventListenerToElements = (elements, eventType, handler) => {
  if (NodeList.prototype.isPrototypeOf(elements)) {
    elements.forEach(element => element.addEventListener(eventType, handler));
  } else {
    elements.addEventListener(eventType, handler);
  }
};

/**
 * Toggle the visibility of the navigation bar and overlay
 */
const toggleNavbar = () => {
  const navbar = document.querySelector("[data-navbar]");
  const overlay = document.querySelector("[data-overlay]");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

const navTogglers = document.querySelectorAll("[data-nav-toggler]");
addEventListenerToElements(navTogglers, "click", toggleNavbar);

/**
 * Handle the activation of header and back-to-top button based on scroll position
 */
const handleScrollActivation = () => {
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  const isActive = window.scrollY > 100;

  header.classList.toggle("active", isActive);
  backTopBtn.classList.toggle("active", isActive);
};

addEventListenerToElements(window, "scroll", handleScrollActivation);

/**
 * Filter functionality to show and hide elements based on the filter category
 */
const handleFiltering = (event) => {
  const filterBtns = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter]");
  const selectedFilter = event.target.dataset.filterBtn;

  filterBtns.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  filterItems.forEach(item => {
    item.style.display = (item.dataset.filter === selectedFilter) ? "block" : "none";
  });
};

const filterBtn = document.querySelectorAll("[data-filter-btn]");
addEventListenerToElements(filterBtn, "click", handleFiltering);
