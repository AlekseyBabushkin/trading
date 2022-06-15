const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const closesPopup = document.querySelectorAll('.close-popup');
const timeout = 300;

let unlock = true;

function bodyLock() {
  const offset = document.querySelector('.main').offsetWidth;
  const lockPaddingValue = `${window.innerWidth - offset}px`;

  if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
      const element = lockPadding[index];
      element.style.paddingRight = lockPaddingValue;
    }
  }

  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock');

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(() => {
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const element = lockPadding[index];
        element.style.paddingRight = '0px';
      }
    }

    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(() => {
    unlock = true;
  }, timeout);
}

function close(popup, doUnlock = true) {
  if (unlock) {
    popup.classList.remove('open');

    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function open(popup) {
  if (popup && unlock) {
    const popupActive = document.querySelector('.open');

    if (popupActive) {
      close(popupActive, false);
    } else {
      bodyLock();
    }

    popup.classList.add('open');
    popup.addEventListener('click', (event) => {
      if (!event.target.closest('.popup__content')) {
        close(event.target.closest('.popup'));
      }
    });
  }
}

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', (event) => {
      event.preventDefault();
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const currentPopup = document.getElementById(popupName);
      open(currentPopup);
    });
  }
}

if (closesPopup.length > 0) {
  for (let index = 0; index < closesPopup.length; index++) {
    const closing = closesPopup[index];
    closing.addEventListener('click', (event) => {
      event.preventDefault();
      close(closing.closest('.popup'));
    });
  }
}

document.addEventListener('keydown', (event) => {
  if (event.which === 27) {
    const popupActive = document.querySelector('.open');
    if (popupActive) {
      close(popupActive);
    }
  }
});

export default { open, close };

setTimeout(() => {
  open(document.querySelector('#popup-banner'));
}, 1000);

// $(document).on('pjax:complete', () => {
//   const popupSuccess = document.querySelector('.popup_success');
//   if (popupSuccess) {
//     open(popupSuccess);
//   }
// });
