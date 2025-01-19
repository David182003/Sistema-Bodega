document.addEventListener('DOMContentLoaded', () => {
    const saldo = document.querySelector('.saldo');
    const saldoNum = document.querySelector('.saldo_num');

    saldo.addEventListener('click', () => {
        if (saldoNum.style.display === 'none') {
            saldoNum.style.display = 'block';
        } else {
            saldoNum.style.display = 'none';
        }
    });
});
