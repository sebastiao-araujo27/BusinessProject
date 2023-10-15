//abre e fecha o menu quando clicar no ícone: hamburguer e x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//quando clicar em um item do menu, esconder o menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//mudar o header da página quando der scroll
const header = document.querySelector('#header')
const naveHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= naveHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //menor que a altura do header
    header.classList.remove('scroll')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})

//Testimonials carousel slider swiper
const swiper = new Swiper('.swiper-containerr', {
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

document.getElementById('loginBtn').addEventListener('click', function() {
  var modal = document.getElementById('loginModal');
  modal.style.display = 'flex';
  modal.style.opacity = 0;
  var opacity = 0;
  var fadeInInterval = setInterval(function() {
      opacity += 0.05;
      if (opacity >= 1) {
          clearInterval(fadeInInterval);
      }
      modal.style.opacity = opacity;
  }, 20);
});
function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
}

function register() {
  // Fechar o modal de login
  closeModal();
  // Abrir o modal de registro
  document.getElementById('registerModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
}

function closeRegisterModal() {
  document.getElementById('registerModal').style.display = 'none';
}

function concluirCadastro() {
  // Aqui você pode adicionar a lógica para lidar com a submissão do formulário de registro
  console.log('Formulário de registro submetido');
}


//ScrollReveal: mostrar elementos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

//Botão voltar para o topo
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// Menu ativo conforme a seção visível na página
const sections = document.querySelectorAll('section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

function openBookingModal(service) {
  document.getElementById('serviceTitle').innerText = service;
  let timeOptionsHtml = '';
  for (let hour = 8; hour <= 18; hour++) {
      timeOptionsHtml += `<option value="${hour}:00">${hour}:00</option>`;
  }
  document.getElementById('timeSelection').innerHTML = timeOptionsHtml;
  document.getElementById('bookingModal').style.display = 'block';
}

function closeBookingModal() {
  document.getElementById('bookingModal').style.display = 'none';
}

function selectProfessional(professional) {
  // Código para lidar com a seleção do profissional
  console.log(professional);  // por exemplo, para verificar qual profissional foi selecionado
}

function confirmBooking() {
  // Código para confirmar o agendamento
}


//When Scroll
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
