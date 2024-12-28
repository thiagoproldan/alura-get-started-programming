let secretSantaFriends = [];

function addFriend() {
    let friendName = document.getElementById('friend-name').value.toLowerCase();

    if (friendName === '') {
        alert('Please enter a friend\'s name!');
        return;
    }

    if (secretSantaFriends.includes(friendName)) {
        alert(`${friendName} is already added!`);
        return;
    }

    let friendsList = document.getElementById('friends-list');
    secretSantaFriends.push(friendName);

    if (friendsList.textContent === '') {
        friendsList.textContent = friendName;
    } else {
        friendsList.textContent += ', ' + friendName;
    }

    document.getElementById('friend-name').value = '';

    updateFriendsList();
    updateDrawList();
}

function draw() {
    if (secretSantaFriends.length < 4) {
        alert('Please add at least 4 friends!');
        return;
    }

    shuffleArray(secretSantaFriends);
    let drawList = document.getElementById('draw-results');

    for (let i = 0; i < secretSantaFriends.length; i++) {
        if (i === secretSantaFriends.length - 1) {
            drawList.innerHTML += `${secretSantaFriends[i]} --> ${secretSantaFriends[0]}<br>`;
        } else {
            drawList.innerHTML += `${secretSantaFriends[i]} --> ${secretSantaFriends[i + 1]}<br>`;
        }
    }
}

function deleteFriend(index) {
    secretSantaFriends.splice(index, 1);
    updateFriendsList();
    updateDrawList();
}

function reset() {
    secretSantaFriends = [];
    document.getElementById('friends-list').innerHTML = '';
    document.getElementById('draw-results').innerHTML = '';
}

function shuffleArray(array) {
    for (let i = array.length; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * i);
        [array[i - 1], array[randomIndex]] = [array[randomIndex], array[i - 1]];
    }
}

function updateDrawList() {
    let drawList = document.getElementById('draw-results');
    drawList.innerHTML = '';
}

function updateFriendsList() {
    let friendsList = document.getElementById('friends-list');
    friendsList.innerHTML = '';

    for (let i = 0; i < secretSantaFriends.length; i++) {
        let paragraph = document.createElement('p');
        paragraph.textContent = secretSantaFriends[i];

        paragraph.addEventListener('click', function () {
            deleteFriend(i);
        });

        friendsList.appendChild(paragraph);
    }
}
