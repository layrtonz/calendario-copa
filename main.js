function createGame(player1, hour, player2){
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
    `
}

let delay = -0.4;

function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date}<span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
`
}
document.querySelector('#cards').innerHTML =
    createCard("20/11", "Domingo", createGame('qatar', '16:00', 'equador')) +

    createCard("21/11", "Segunda", createGame('inglaterra', '10:00', 'ira') + createGame('senegal', '13:00', 'holanda') + 
    createGame('usa', '16:00', 'gales')) +

    createCard("22/11", "Terça", createGame('argentina', '07:00', 'arabia-saudita') + createGame('dinamarca', '10:00', 'tunisia') + 
    createGame('mexico', '13:00', 'polonia') + createGame('france', '16:00', 'australia')) + 

    createCard("23/11", "Quarta", createGame('marrocos', '07:00', 'croacia') + createGame('alemanha', '10:00', 'japao') + 
    createGame('span', '13:00', 'costarica') + createGame('belgica', '16:00', 'canada')) + 

    createCard("24/11", "Quinta", createGame('suica', '07:00', 'cameroon') + createGame('uruguai', '10:00', 'coreiadosul') + 
    createGame('portugal', '13:00', 'gana') + createGame('brazil', '16:00', 'serbia')) + 

    createCard("25/11", "Sexta", createGame('gales', '07:00', 'ira') + createGame('qatar', '10:00', 'senegal') + 
    createGame('holanda', '13:00', 'equador') + createGame('inglaterra', '16:00', 'usa')) + 

    createCard("26  /11", "Sábado", createGame('tunisia', '07:00', 'australia') + createGame('polonia', '10:00', 'arabia-saudita') + 
    createGame('france', '13:00', 'dinamarca') + createGame('argentina', '16:00', 'mexico')) + 

    createCard("27/11", "Domingo", createGame('japao', '07:00', 'costarica') + createGame('belgica', '10:00', 'marrocos') + 
    createGame('croacia', '13:00', 'canada') + createGame('span', '16:00', 'alemanha')) + 

    createCard("28/11", "Segunda", createGame('cameroon', '07:00', 'serbia') + createGame('coreiadosul', '10:00', 'gana') + 
    createGame('brazil', '13:00', 'suica') + createGame('portugal', '16:00', 'uruguai')) + 

    createCard("29/11", "Terça", createGame('equador', '12:00', 'senegal') + createGame('holanda', '12:00', 'qatar') + 
    createGame('ira', '16:00', 'usa') + createGame('gales', '16:00', 'inglaterra')) + 

    createCard("30/11", "Quarta", createGame('tunisia', '12:00', 'france') + createGame('australia', '12:00', 'dinamarca') + 
    createGame('polonia', '16:00', 'argentina') + createGame('arabia-saudita', '16:00', 'mexico')) + 

    createCard("01/11", "Quinta", createGame('croacia', '12:00', 'belgica') + createGame('canada', '12:00', 'marrocos') + 
    createGame('japao', '16:00', 'span') + createGame('costarica', '16:00', 'alemanha')) + 

    createCard("02/12", "Sexta", createGame('coreiadosul', '12:00', 'portugal') + createGame('gana', '12:00', 'uruguai') + 
    createGame('serbia', '16:00', 'suica') + createGame('cameroon', '16:00', 'brazil')) 