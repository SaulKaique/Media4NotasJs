const form = document.querySelector('#form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const nota1 = Number(document.querySelector('#nota1').value);
        const nota2 = Number(document.querySelector('#nota2').value);
        const nota3 = Number(document.querySelector('#nota3').value);
        const nota4 = Number(document.querySelector('#nota4').value);

        if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10) {
            alert('Digite somente notas entre 0 e 10.');
        } else {
            const media = (nota1 + nota2 + nota3 + nota4) / 4;

            let resultado;

            if (media < 5) {
                resultado = 'Reprovado';
            } else if (media >= 6) {
                resultado = 'Aprovado';
            } else {
                resultado = 'Em recuperação';
            }

            alert(`Você ficou com média ${media.toFixed(1)}. Resultado: ${resultado}`);
        }
    });