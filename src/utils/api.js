class Api {
  constructor({ baseUrl, token, groupId }) {
    this._address = baseUrl;
    this._token = token;
    this._groupId = groupId;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._checkResponse)
  }

  getInfoUser() {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(this._checkResponse)
  }

  setInfoUser({ author, about }) {
    return fetch(`${this._address}/${this._groupId}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: author,
        about,
      })
    })
      .then(this._checkResponse)
  }

  setCard({ name, link }) {
    return fetch(`${this._address}/${this._groupId}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(this._checkResponse)
  }

  removeCard(id) {
    return fetch(`${this._address}/${this._groupId}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      }
    })
      .then(this._checkResponse)
  }

  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._address}/${this._groupId}/cards/likes/${id}`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: {
        authorization: this._token,
      }
    })
      .then(this._checkResponse)
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this._address}/${this._groupId}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar,
      })
    })
      .then(this._checkResponse)
  }
}

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/',
  token: '26429215-8866-45e2-ac2c-d933789bf3b4',
  groupId: 'cohort-23'
}

const api = new Api(config);

export default api;