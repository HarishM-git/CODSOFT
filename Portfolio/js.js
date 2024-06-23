
const services=[{
  icon:'fa fa-code',
  name:'Web Developer',
  content:'Seamlessly merging creativity with code to sculpt engaging user interfaces, using HTML, CSS, and JavaScript as the artist\'s palette.'
},{
  icon:'fa fa-brain',
  name:'UI Designer',
  content:'Crafting digital realms where creativity meets functionality, sculpting interfaces that dance with user intuition and delight.'
},
{
  icon:'fa-solid fa-wand-sparkles fa',
  name:'Video and photo editor',
  content:'Crafting compelling stories through precise video editing, each scene woven seamlessly into a captivating narrative.'
}]


services.forEach(element => {
  const divElem = document.createElement('div')
  divElem.className = 'web-developer video-editor'
  const serdivElem = document.createElement('div')
  serdivElem.className = 'service-icon'
  const Icon = document.createElement('i')
  Icon.className = element.icon
  Icon.style = 'color: white'
  const titleDiv=document.createElement('div')
  titleDiv.className='title-name'
  const Hr=document.createElement('hr')
  Hr.className='line-l'
  const serviceCon=document.createElement('div')
  serviceCon.className='service-content'
  const h4 = document.createElement('h4')
  h4.innerText = element.name
  const h6 = document.createElement('h6')
  h6.innerText = element.content
  serdivElem.append(Icon)
  divElem.append(serdivElem)
  titleDiv.append(h4)
  divElem.append(titleDiv)
  divElem.append(Hr)
  serviceCon.append(h6)
  divElem.append(serviceCon)
  document.querySelector('.service-js').appendChild(divElem)

});



const Projects=[{
  img:"project-photos/rps-game.png",
  content:"This is an Rock Paper Scissor Game for JS Practice",
  href:"https://harishm-git.github.io/rps-game/"
},
{
  img:"project-photos/tdl.png",
  content:"This is an To Do List for JS Practice",
  href:"https://harishm-git.github.io/t-d-list/"
},
{
  img:"project-photos/youtube.png",
  href:"https://harishm-git.github.io/you-tube/" ,
  content:"This is an Youtube Clone for Html and Css Practice"
},
{
  img:"project-photos/amazon.png",
  href:"https://harishm-git.github.io/amazon-project/" ,
  content:"This is an Amazon Clone for Html and Css Practice"
}]


Projects.forEach((element)=>{

  const anch=document.createElement('a');
  anch.style="text-decoration:none";
  anch.href=element.href;
  const common_mo=document.createElement('div');
  common_mo.className="common-model youtube-con";
  const styleCo=document.createElement('div');
  styleCo.className="style-container";
  const Image=document.createElement('img');
  Image.src=element.img;
  Image.alt="photo about my project";
  const text_pro=document.createElement('div');
  text_pro.className="text-project";
  const h_4=document.createElement('h4');
  h_4.innerText=element.content;
  styleCo.append(Image);
  text_pro.append(h_4);
  common_mo.append(styleCo);
  common_mo.append(text_pro);
  anch.append(common_mo);

  document.querySelector('.feature-pro-container').appendChild(anch)



})



//scroll effects

document.addEventListener('DOMContentLoaded', function() {
  ScrollReveal().reveal('.header', { delay: 200, origin: 'top', distance: '100px' });
  ScrollReveal().reveal('.home-text', { delay: 350, origin: 'bottom', distance: '100px' });
  ScrollReveal().reveal('.intro-na',{
    origin:'top',
    distance:'100px',
    duration:1000,
    delay:350
  })
  ScrollReveal().reveal('.github-icon', {
    origin: 'left',
    distance: '200px',
    duration: 1000,
    delay: 200
  });

  ScrollReveal().reveal('.gmail-icon', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 400
  });

  ScrollReveal().reveal('.linkedin-icon', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 600
  });

  ScrollReveal().reveal('.facebook-icon', {
    origin: 'right',
    distance: '200px',
    duration: 1000,
    delay: 200
  });
  ScrollReveal().reveal('.service-text', { delay: 850, origin: 'right-bottom', distance: '100px' });
  ScrollReveal().reveal('.web-developer', {
    origin: 'left',
    distance: '200px',
    duration: 1000,
    delay: 600
  });



//for mobile view
  ScrollReveal().reveal('.feature-pro-text', { delay: 850, origin: 'bottom', distance: '100px' });
  ScrollReveal().reveal('.common-model', {
    origin: 'right-bottom',
    distance: '200px',
    duration: 1000,
    delay: 600
  });
  ScrollReveal().reveal('.bio-text', { delay: 900, origin: 'left', distance: '200px' });
  ScrollReveal().reveal('.contact-text', { delay: 850, origin: 'right-bottom', distance: '100px' });
  ScrollReveal().reveal('.lft-in-ct', {
    origin: 'right-bottom',
    distance: '200px',
    duration: 1000,
    delay: 600
  });
  ScrollReveal().reveal('#hire', {
    origin: 'left',
    distance: '200px',
    duration: 1000,
    delay: 600
  });
});









document.addEventListener('DOMContentLoaded', function() {
  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  // Initialize ScrollReveal
  const sr = ScrollReveal();

  sr.reveal('.header', { delay: 200, origin: 'top', distance: '100px' });

  if (isMobile) {
    sr.reveal('.home-text', { delay: 350, origin: 'bottom', distance: '50px' });
    sr.reveal('.github-icon', { origin: 'left', distance: '200px', duration: 1000, delay: 200 });
    sr.reveal('.gmail-icon', { origin: 'bottom', distance: '50px', duration: 1000, delay: 400 });
    sr.reveal('.linkedin-icon', { origin: 'top', distance: '50px', duration: 1000, delay: 600 });
    sr.reveal('.facebook-icon', { origin: 'right', distance: '200px', duration: 1000, delay: 200 });
    sr.reveal('.service-text', { delay: 700, origin: 'bottom', distance: '100px' });
    sr.reveal('.service-container', { origin: 'left', distance: '100px', duration: 1000, delay: 400 });
    sr.reveal('.feature-pro-text', { delay: 850, origin: 'bottom', distance: '100px', duration: 1000 });
    sr.reveal('.bio-text', { delay: 900, origin: 'bottom', distance: '200px', duration: 1000 });
    

    sr.reveal('.contact-text', { delay: 700, origin: 'bottom', distance: '100px' });
    sr.reveal('.lft-in-ct', { origin: 'left', distance: '100px', duration: 1000, delay: 400 });
   
  } else {
    sr.reveal('.home-text', { delay: 350, origin: 'bottom', distance: '100px' });
    sr.reveal('.github-icon', { origin: 'left', distance: '200px', duration: 1000, delay: 200 });
    sr.reveal('.gmail-icon', { origin: 'bottom', distance: '50px', duration: 1000, delay: 400 });
    sr.reveal('.linkedin-icon', { origin: 'top', distance: '50px', duration: 1000, delay: 600 });
    sr.reveal('.facebook-icon', { origin: 'right', distance: '200px', duration: 1000, delay: 200 });
    sr.reveal('.service-text', { delay: 700, origin: 'right-bottom', distance: '100px' });
    sr.reveal('.service-container', { origin: 'left', distance: '100px', duration: 1000, delay: 400 });
    sr.reveal('.feature-pro-text', { delay: 850, origin: 'right-bottom', distance: '100px', duration: 1000 });
    sr.reveal('.bio-text', { delay: 900, origin: 'left', distance: '200px', duration: 1000 });
    sr.reveal('.contact-text', { delay: 850, origin: 'bottom', distance: '100px' });

    sr.reveal('.service-text', { delay: 700, origin: 'right-bottom', distance: '100px' });
    sr.reveal('.service-container', { origin: 'left', distance: '100px', duration: 1000, delay: 400 });
    sr.reveal('.feature-pro-text', { delay: 850, origin: 'right-bottom', distance: '100px', duration: 1000 });
    sr.reveal('.contact-text', { delay: 850, origin: 'right-bottom', distance: '100px' });
    sr.reveal('.lft-in-ct', {
      origin: 'right-bottom',
      distance: '200px',
      duration: 1000,
      delay: 600
    });
    sr.reveal('#hire', {
      origin: 'left',
      distance: '200px',
      duration: 1000,
      delay: 600
    });
  }
});


