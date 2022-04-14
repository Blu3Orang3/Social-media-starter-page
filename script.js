//sidebarr
const menuItems = document.querySelectorAll('.menu-item');
const themeItem = document.querySelector('.neutral');
//meddages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//Theme
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
let root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');4

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

//remove active class to remaining menuitems
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}

// -----sidebarr-----------------------
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
    if(item.id != 'notifications') {
      document.querySelector('.notification-popup').style.
      display = "none";
    }else {
      document.querySelector('.notification-popup').style.
      display = "block";
      document.querySelector('#notifications .notification-count').style.display="none";
    }
  })
})


// =============messages===================

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach(chat => {
    let name = chat.querySelector('h5').textContent.toLowerCase();
    if(name.indexOf(val) != -1) {
      chat.style.display = 'flex';
    } else {
      chat.style.display ='none';
    }
  })
}

//search chat
messageSearch.addEventListener('keyup',searchMessage);

//highlightv message card when messages mnu is clicked
messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector('.notification-count').style.display='none';
  setTimeout(()=>{
    messages.style.boxShadow = 'none';
  },2000)
})

//THEME/ COSTUMIZATION

//open modal
const openThemeModel = () => {
  themeModel.style.display = 'grid';
};

//close modal
const closeThemeModel = (e) => {
  if(e.target.classList.contains('customize-theme')) {
    themeModel.style.display = 'none';
    themeItem.classList.remove('active');
  }
};
themeModel.addEventListener('click',closeThemeModel);
theme.addEventListener('click',openThemeModel);


// -------------Font Size change-------------

//----remove active class from theme size spans
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
}

fontSizes.forEach(size => {
  size.addEventListener('click', ()=> {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
  
    if(size.classList.contains('font-size-1')){
      fontSize = '10px';
      root.style.setProperty('--sticky-top-left','5.4rem');
      root.style.setProperty('--sticky-top-right','5.4rem');
  
    } else if(size.classList.contains('font-size-2')){
      fontSize = '13px';
      root.style.setProperty('--sticky-top-left','5.4rem');
      root.style.setProperty('--sticky-top-right','-7rem');
  
    } else if(size.classList.contains('font-size-3')){
      fontSize = '16px';
      root.style.setProperty('--sticky-top-left','-2rem');
      root.style.setProperty('--sticky-top-right','-17rem');
  
    } else if(size.classList.contains('font-size-4')){
      fontSize = '19px';
      root.style.setProperty('--sticky-top-left','-5rem');
      root.style.setProperty('--sticky-top-right','-25rem');
  
    } else if(size.classList.contains('font-size-5')){
      fontSize = '22px';
      root.style.setProperty('--sticky-top-left','-10rem');
      root.style.setProperty('--sticky-top-right','-33rem');
  
    };

      //change  font size of rot html element
      document.querySelector('html').style.fontSize = fontSize;
  })

})

// --------Change Color-----

//roemove active when aother is clicked
const changeActiveColorClass = () => {
  colorPalette.forEach(active => {
    active.classList.remove('active');
  })
}

//vhange primary color
colorPalette.forEach(color => {
  color.addEventListener('click', ()=> {
    changeActiveColorClass();
    let primaryHue = 252;

    if(color.classList.contains('color-1')) {
      primaryHue = 252;
    } else if(color.classList.contains('color-2')){
      primaryHue = 52;
    } else if(color.classList.contains('color-3')){
      primaryHue = 352;
    } else if(color.classList.contains('color-4')){
      primaryHue = 152;
    } else if(color.classList.contains('color-5')){
      primaryHue = 202;
    }
    color.classList.add('active');
    root.style.setProperty('--primary-color-hue',primaryHue)
  })
})

//--------backgroundd color--------

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change BG func

const changeBG = () => {
  root.style.setProperty('--light-color-lightness',lightColorLightness);
  root.style.setProperty('--white-color-lightness',whiteColorLightness);
  root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

bg1.addEventListener('click', ()=> {
   
  darkColorLightness = '17%';
  whiteColorLightness = '100%';
  lightColorLightness = '95%';
  //add active class
  bg1.classList.add('active');
  bg2.classList.remove('active');
  bg3.classList.remove('active');
  changeBG();
})

bg2.addEventListener('click', ()=> {
  darkColorLightness = '80%';
  whiteColorLightness = '10%';
  lightColorLightness = '5%';

  //add active class
  bg2.classList.add('active');
  bg1.classList.remove('active');
  bg3.classList.remove('active');
  changeBG();
})

bg3.addEventListener('click', ()=> {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';

  //add active class
  bg3.classList.add('active');
  bg2.classList.remove('active');
  bg3.classList.remove('active');
  changeBG();
})