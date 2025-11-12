const oso = document.querySelector('.oso');
const btn = document.getElementById('btnSaludo');

btn.addEventListener('click', () => {
    oso.style.animation = 'salto 1s ease';
    setTimeout(() => {
        oso.style.animation = 'respiracion 4s infinite ease-in-out';
    }, 1000);
});
