/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        defaultLight: 'var(--defaultLight)',
        defaultDark: 'var(--defaultDark)',
        indexHeading: "var(--index-devTinder-heading)",
        indexButtonBgColor: 'var(--index-button-bg-color)',
        indexButtonBgHover: "var(--index-button-bg-hover)",
        indexButtonTextColor: 'var(--index-button-text-color)',

        footerBg: 'var(--footer-bg)',
        footerHeading: 'var(--footer-heading)',
        footerContent: 'var(--footer-content)',

        signupBorder: 'var(--signup-border)',
        inputBoxHoverBorder: 'var(--input-box-hover-border)',
        singupButton: 'var(--signup-button)',
        singupButtonHover: 'var(--signup-button-hover)',
        signupInputBg: 'var(--signup-input-bg)',

        interestedBg: 'var(--feed-interested-bg-hover)',
        ignoredBg: 'var(--feed-ignored-bg-hover)',
        interestedBorderText: 'var(--feed-interested-border-text-color)',
        ignoredBorderText: 'var(--feed-ignored-border-text-color)',

        reqPushHeading: 'var(--req-push-text-heading)',
        reqPullHeading: 'var(--req-pull-text-heading)',
        reqMergeHeading: 'var(--req-merge-text-heading)',

        logoutBoxBg: 'var(--logout-box-bg)',
        cancelBg: 'var(--cancel-bg)',
        cancelHover: 'var(--cancel-hover)',
        logoutBg: 'var(--logout-bg)',
        logoutHover: 'var(--logout-hover)',

        navbarLogout: 'var(--logout-navbar-color)',
        navbarLogoutHover: 'var(--logout-navbar-hover)',
        navbarColor : 'var(--navbar-color)',

        errorText: 'var(--error-text)',

        btnBg: 'var(--update-btn-bg)',
        btnHover: 'var(--update-btn-hover)',

        successColor: 'var(--success-text)',

        pushBg: 'var(--req-push-bg)',
        pullBg: 'var(--req-pull-bg)',
        mergeBg: 'var(--req-merge-bg)',
        settingsBg: 'var(--settings-bg)',


      },
      backgroundImage: {
        signupContColor: 'var(--signup-cont-color)',
        signupBg: 'var(--signup-bg-color)',

        updateBg: 'var(--update-bg)',


        userCardBg: 'var(--feed-userCard-bg)',

        profileBg: 'var(--profile-bg)',
      },

      boxShadow: {
        feedBoxShadow: 'var(--feed-userCars-boxShadow)',
        signupBoxShadow: 'var(--singup-box-shadow)',
        signupInputShadow: 'var(--signup-input-shadow)',
        singupInputHover: 'var(--signup-input-hover)',
        errorBoxShadow: 'var(--error-box-shadow)',
        reqShadow: 'var(--req-shadow)',
        navbarShadow : 'var(--navbar-shadow)',
        footerShadow : 'var(--footer-shadow)',
        profilePictureShadow : 'var(--profile-picture-shadow)'
      },
      fontFamily: {
        toggleFont: 'var(--toggleFont)'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: false, // Disable DaisyUI themes if you want full control
    darkTheme: "dark", // Or configure to match your class
  },
}
