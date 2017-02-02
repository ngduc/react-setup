
// ClientDS (Client Data Storage) works with Local/Session Storage, Cached Data, etc.
// Note that __SERVER__ side will crash when accessing Local/Session Storage => do a check for __CLIENT__
// Usage: ClientDS.Local.setItem('myKey', 'value')

let isClient = false
if (typeof __CLIENT__ === 'undefined') {
  isClient = true // e.g. run from Storybook
} else {
  isClient = __CLIENT__
}

export default class ClientDS {

  static Session = {
    setItem: (key, val) => {
      if (isClient) {
        sessionStorage.setItem(key, val)
      }
    },
    setJson: (key, val) => {
      if (val) {
        ClientDS.Session.setItem(key, JSON.stringify(val))
      } else {
        ClientDS.Session.setItem(key, JSON.stringify({}))
      }
    },
    getItem: (key) => {
      if (isClient) {
        return sessionStorage.getItem(key)
      }
      return null
    },
    getJson: (key) => {
      const item = ClientDS.Session.getItem(key)
      if (item) {
        try {
          return JSON.parse(item)
        } catch (ex) {
          return null
        }
      }
    },
    removeItem: (key) => {
      if (isClient) {
        sessionStorage.removeItem(key)
      }
    }
  }

  static Local = {
    setItem: (key, val) => {
      if (isClient) {
        localStorage.setItem(key, val)
      }
    },
    setJson: (key, val) => {
      if (val) {
        ClientDS.Local.setItem(key, JSON.stringify(val))
      } else {
        ClientDS.Local.setItem(key, JSON.stringify({}))
      }
    },
    getItem: (key) => {
      if (isClient) {
        return localStorage.getItem(key)
      }
      return null
    },
    getJson: (key) => {
      const item = ClientDS.Local.getItem(key)
      if (item) {
        try {
          return JSON.parse(item)
        } catch (ex) {
          return null
        }
      }
    },
    removeItem: (key) => {
      if (isClient) {
        localStorage.removeItem(key)
      }
    }
  }

  static getLoginSession () {
    const ss = ClientDS.Session.getJson('sessionData')
    if (!ss) {
      return null
    }
    return ss
  }

  static setLoginSession (ss) {
    ClientDS.Session.setJson('sessionData', ss)
  }
}
