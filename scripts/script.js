const btn_install = document.getElementById('download');

btn_install.addEventListener('click', function() {
    btn_install.style.backgroundColor = 'green';
    btn_install.style.color = 'lime';
    btn_install.textContent = 'Скачиваем...';
    setTimeout(() => {
        btn_install.style.backgroundColor = 'rgba(0, 80, 171, 0.477)';
        btn_install.style.color = 'cyan';
        btn_install.textContent = 'Установить';
    }, 5000);
});