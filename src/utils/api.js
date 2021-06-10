class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}users/me`, {
            headers: this.headers,
        }).then(this._getResponseData);
    }

    getCards() {
        return fetch(`${this.baseUrl}cards`, {
            headers: this.headers,
        }).then(this._getResponseData);
    }

    setUserInfo(item) {
        return fetch(`${this.baseUrl}users/me`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                name: item.name,
                about: item.about,
            }),
        }).then(this._getResponseData);
    }

    createCard(newCard) {
        return fetch(`${this.baseUrl}cards`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                name: newCard.name,
                link: newCard.link,
            }),
        }).then(this._getResponseData);
    }

    deleteCard(id) {
        return fetch(`${this.baseUrl}cards/${id}`, {
            method: "DELETE",
            headers: this.headers,
        }).then(this._getResponseData);
    }

    likeCard(id) {
        return fetch(`${this.baseUrl}cards/likes/${id}`, {
            method: "PUT",
            headers: this.headers,
        }).then(this._getResponseData);
    }

    dislikeCard(id) {
        return fetch(`${this.baseUrl}cards/likes/${id}`, {
            method: "DELETE",
            headers: this.headers,
        }).then(this._getResponseData);
    }

    setAvatar(avatar) {
        return fetch(`${this.baseUrl}users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(avatar),
        }).then(this._getResponseData);
    }
    _getResponseData(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const api = new Api({
    baseUrl: "https://mesto.nomoreparties.co/v1/cohort-23/",
    headers: {
        authorization: "26429215-8866-45e2-ac2c-d933789bf3b4",
        "Content-Type": "application/json",
    },
});

export default api;

//  - получить список всех карточек в виде массива (GET)
//  - добавить карточку (POST)
//  - удалить карточку (DELETE)
//  - получить данные пользователя (GET)
//  - заменить данные пользователя (PATCH)
//  - заменить аватар (PATCH)
//  - лайкнуть карточку (PUT)
//  - удалить лайк карточки (DELETE)