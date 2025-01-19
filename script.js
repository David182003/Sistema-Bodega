document.addEventListener('DOMContentLoaded', () => {
    const saldo = document.querySelector('.saldo');
    const saldoNum = document.querySelector('.saldo_num');

    saldo.addEventListener('click', () => {
        if (saldoNum.style.display === 'none') {
            saldoNum.style.display = 'block';
            saldoNum.style.display = 'flex';
            saldoNum.style.alignItems = 'center';
        } else {
            saldoNum.style.display = 'none';
        }
    });

    document.getElementById('exportarPDF').addEventListener('click', () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.autoTable({ html: '.movimientos_table' });
        doc.save('movimientos.pdf');
    });
});
