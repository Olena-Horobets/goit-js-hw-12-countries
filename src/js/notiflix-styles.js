import { Notify, Loading } from 'notiflix';

Notify.init({
  width: 'auto',
  position: 'right-top',
  distance: '36px',
  opacity: 1,
  borderRadius: '8px',
  timeout: 2000,
  showOnlyTheLastOne: true,

  fontFamily: 'inherit',
  fontSize: '16px',

  cssAnimationDuration: 250,
  cssAnimationStyle: 'from-top',
  useIcon: true,
  useFontAwesome: true,
  fontAwesomeIconSize: '14px',

  success: {
    background: '#00A19D',
    textColor: '#FFF8E5',
    fontAwesomeClassName: 'fas fa-like icon',
  },

  failure: {
    background: '#E05D5D',
    textColor: '#FFF8E5',
    fontAwesomeClassName: 'fas fa-poop icon',
  },

  warning: {
    background: '#FFB319',
    textColor: '#FFFFFF',
    fontAwesomeClassName: 'fas fa-bell icon',
  },

  info: {
    background: '#6F69AC',
    textColor: '#FFFFFF',
    fontAwesomeClassName: 'fas fa-bell icon',
  },
});

Loading.init({
  backgroundColor: 'transparent',
  svgSize: '60px',
  svgColor: 'rgb(3, 104, 104)',
});
