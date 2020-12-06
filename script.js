let tdList = document.querySelectorAll('.block')
let playerTurn = true
let p1 = '🙂'
let p2 = "🙃"

let clearFields = () => {
    document.location.reload()
    document.querySelector('#results').style.display = "none";

}

let checkWinner = (mark) => {
    if ((tdList[0].innerText === mark && tdList[1].innerText === mark && tdList[2].innerText === mark)
        || (tdList[3].innerText === mark && tdList[4].innerText === mark && tdList[5].innerText === mark)
        || (tdList[6].innerText === mark && tdList[7].innerText === mark && tdList[8].innerText === mark)
        || (tdList[2].innerText === mark && tdList[4].innerText === mark && tdList[6].innerText === mark)
        || (tdList[0].innerText === mark && tdList[4].innerText === mark && tdList[8].innerText === mark)
        || (tdList[0].innerText === mark && tdList[3].innerText === mark && tdList[6].innerText === mark)
        || (tdList[2].innerText === mark && tdList[5].innerText === mark && tdList[8].innerText === mark)
        || (tdList[1].innerText === mark && tdList[4].innerText === mark && tdList[7].innerText === mark)
    ) {
        return true

    }
}

let sum = 0

let draw = () => {
    tdList.forEach(td => {
        td.innerText === p1 || td.innerText === p2 && sum++;

    })

}

let cpuMove = () => {
    let randTd = Math.floor(Math.random() * tdList.length)
    try {
        if (tdList[randTd].innerText === p1 || tdList[randTd].innerText === p2) {
            cpuMove()
        } else if (tdList[randTd].innerText === '') {
            tdList[randTd].innerText = p2
            playerTurn = !playerTurn
        }
    } catch (error) {
        document.querySelector('#results h2').innerText = `It's a Draw!`
        document.querySelector('#results').style.display = "block";
    }
}

tdList.forEach(td => {
    td.addEventListener('mouseup', () => {
        let mark = ''
        playerTurn ? mark = p1 : mark = p2
        td.innerText = mark
        playerTurn = !playerTurn

        playerTurn === false && cpuMove()

        draw()
        if (!checkWinner(mark) && sum === 20) {
            document.querySelector('#results h2').innerText = `It's a Draw!`
            document.querySelector('#results').style.display = "block";

        }
        if (checkWinner(mark)) {
            document.querySelector('#results h2').innerText = `Player with ${mark} won!`
            document.querySelector('#results').style.display = "block";
            return
        }

    }, { once: true })
})
