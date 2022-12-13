const root = document.querySelector(":root");

// SIDE BAR ========================
// sidebar variables
const menuItems = document.querySelectorAll(".menu-item");

// remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    // notification pop-up
    if (item.id !== "notifications") {
      document.querySelector(
        "#notifications .notifications-popup"
      ).style.display = "none";
      document.querySelector(".notification-count").style.display = "block";
    } else {
      document.querySelector(
        "#notifications .notifications-popup"
      ).style.display = "block";
      document.querySelector(".notification-count").style.display = "none";
    }
  });
});

// MESSAGES ========================
//messages variables
const messagesNotification = document.querySelector("#messages-notifications");
const messageCount = document.querySelector("#message-count");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// Highlight message card when message menu item is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notification-count").style.display =
    "none";
  messageCount.style.display = "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// message search
const searchMessage = () => {
  const inputValue = messageSearch.value.toLowerCase();

  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(inputValue) != -1) {
      chat.style.display = "block";
    } else {
      chat.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

// CUSTOMIZE THEME ================
// theme variables
const themeModal = document.querySelector(".customize-theme");
const themeBtn = document.querySelector("#theme");

// open theme modal
themeBtn.addEventListener("click", () => {
  themeModal.style.display = "grid";
});

// closes theme modal
const themeModalState = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
    themeBtn.classList.remove("active");
    document.querySelector("#home").classList.add("active");
  }
};

themeModal.addEventListener("click", themeModalState);

// CHANGE FONTSIZE ================
// fonts varibales
const fontSizes = document.querySelectorAll(".choose-size span");

const removeSizeSelector = () => {
  fontSizes.forEach((selector) => {
    selector.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelector();
    size.classList.toggle("active");

    let fontSize;
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }

    // change the font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// CHANGE COLOR ===============
// color variables
const colorPalletes = document.querySelectorAll(".choose-color span");

const removeActiveColorClass = () => {
  colorPalletes.forEach((color) => {
    color.classList.remove("active");
  });
};

colorPalletes.forEach((color) => {
  color.addEventListener("click", () => {
    removeActiveColorClass();
    let primaryHue;
    if (color.classList.contains("color-1")) {
      primaryHue = "252";
    } else if (color.classList.contains("color-2")) {
      primaryHue = "52";
    } else if (color.classList.contains("color-3")) {
      primaryHue = "352";
    } else if (color.classList.contains("color-4")) {
      primaryHue = "152";
    } else if (color.classList.contains("color-5")) {
      primaryHue = "202";
    }

    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// CHANGE BACKGROUND ================
// baclground variables
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// theme background values
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

// changes background color
const changeBG = () => {
  // alert(
  //   `${lightColorLightness}, ${darkColorLightness}, ${whiteColorLightness}`
  // );
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
};

// option 1
Bg1.addEventListener("click", () => {
  // remove active class
  Bg3.classList.remove("active");
  Bg2.classList.remove("active");
  // add active class
  Bg1.classList.add("active");
  // remove customized changes from local storage
  window.location.reload();
});

// option 2
Bg2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";

  // remove active class
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  // add active class
  Bg2.classList.add("active");
  changeBG();
});

// option 3
Bg3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";
  // remove active class
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  // add active class
  Bg3.classList.add("active");
  changeBG();
});
