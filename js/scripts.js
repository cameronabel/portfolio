window.onload = function() {
  

  let darkMode = document.getElementById('darkmode');
  if (localStorage.getItem('darkMode') === 'true') {
    darkMode.checked = true;
    enableDarkMode()
  } else {
    disableDarkMode()
  }
  setTimeout(showSwitch, 00)
  darkMode.addEventListener("change", function() {

    if (darkMode.checked){
      localStorage.setItem('darkMode', true);
    } else {
      localStorage.setItem('darkMode', false);
    }

    if (localStorage.getItem('darkMode') === 'true') {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
  
  };


function enableDarkMode() {
  document.body.style.backgroundColor = "#121212";
  const shadedAreas = document.querySelectorAll('.shaded');
  shadedAreas.forEach(element => {
    element.classList.remove('shaded');
    element.classList.add('shaded-dm');
  })
  const bodyAreas = document.querySelectorAll('.body-container');
  bodyAreas.forEach(element => {
    element.style.color = '#DDDDDD';
  })
  const genericBanners = document.querySelectorAll('.generic-banner')
  genericBanners.forEach(element => {
    element.classList.remove('generic-banner');
    element.classList.add('generic-banner-dm');
  })
  document.getElementById('dm-switch-area').classList.add('icon-dm')
}

function disableDarkMode() {
  document.body.style.backgroundColor = "white";
  const shadedAreas = document.querySelectorAll('.shaded-dm');
  shadedAreas.forEach(element => {
    element.classList.remove('shaded-dm');
    element.classList.add('shaded');
  })
  const bodyAreas = document.querySelectorAll('.body-container');
  bodyAreas.forEach(element => {
    element.style.color = 'black';
  })
  const genericBanners = document.querySelectorAll('.generic-banner')
  genericBanners.forEach(element => {
    element.classList.remove('generic-banner-dm');
    element.classList.add('generic-banner');
  })
  document.getElementById('dm-switch-area').classList.remove('icon-dm');
}

function showSwitch() {
  let area = document.getElementById("dm-switch-area");
  area.style.visibility = 'visible';
  area.style.opacity = 1;
}