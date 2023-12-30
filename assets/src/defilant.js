function changeDiv(targetDiv) {
    const premierDiv = document.querySelector('.premier');
    const deuxiemeDiv = document.querySelector('.deuxième');
    const troisiemeDiv = document.querySelector('.troisième');

    switch (targetDiv) {
        case 'deuxième':
            premierDiv.style.display = 'none';
            deuxiemeDiv.style.display = 'block';
            troisiemeDiv.style.display = 'none';
            break;
        case 'troisième':
            premierDiv.style.display = 'none';
            deuxiemeDiv.style.display = 'none';
            troisiemeDiv.style.display = 'block';
            break;
        default:
            premierDiv.style.display = 'block';
            deuxiemeDiv.style.display = 'none';
            troisiemeDiv.style.display = 'none';
            break;
    }
}

function autoChangeDiv() {
    setInterval(function () {
        const premierDiv = document.querySelector('.premier');
        const deuxiemeDiv = document.querySelector('.deuxième');
        const troisiemeDiv = document.querySelector('.troisième');

        if (premierDiv.style.display === 'block') {
            changeDiv('deuxième');
        } else if (deuxiemeDiv.style.display === 'block') {
            changeDiv('troisième');
        } else {
            changeDiv('premier');
        }
    }, 5000);
}

autoChangeDiv();