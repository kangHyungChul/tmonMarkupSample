class tabEvent {
  constructor (parent) {
    this.parent = document.querySelector(parent)
    this.tabList = Array.from(this.tabBtn())
    this.panelList = Array.from(this.tabPanel())
  }
  init () {
    this.tabList[0].classList.add('selected')
    this.tabList.forEach((ele, i) => {
      ele.onclick = (event) => {
        this.clickTab(event)
      }
    })
    this.panelList.forEach((ele, i) => {
      ele.style.display = 'none'
    })
    this.panelList[0].removeAttribute('style')
  }
  tabBtn () {
    return this.parent.querySelectorAll('[role="tab"]')
  }
  tabPanel () {
    return this.parent.querySelectorAll('[role="tabpanel"]')
  }
  clickTab (event) {
    const target = event.currentTarget
    this.tabList.forEach((ele, i) => {
      ele.classList.remove('selected')
      ele.setAttribute('aria-selected', false)
    })
    target.classList.add('selected')
    target.setAttribute('aria-selected', true)
    this.togglePanel(target.dataset.target)
  }
  togglePanel (target) {
    this.panelList.forEach((ele, i) => {
      ele.style.display = 'none'
    })
    this.parent.querySelector(`#${target}`).removeAttribute('style')
  }
}

class termsChkEvent {
  constructor (opt) {
    this.allChk = document.querySelector(opt.allChk)
    this.chkList = opt.chkList
    this.chkListArray = []
    this.callback = opt.callback || null
    this.chkList.forEach((data) => {
      this.chkListArray.push({ target: document.querySelector(data), checked: document.querySelector(data).checked })
    })
  }
  init () {
    this.chkListArray.forEach((ele, i) => {
      ele.target.addEventListener('change', (event) => {
        this.listChkEvent(ele, i) // 체크이벤트 실행
        this.listStatus() // 상태감지
      })
    })
    this.allChk.addEventListener('change', (event) => {
      const target = event.currentTarget
      target.checked ? this.toggleAllChecked(true) : this.toggleAllChecked(false)
    })
    this.listStatus()
  }
  listChkEvent (ele, i) {
    this.chkListArray[i].checked = ele.target.checked
  }
  toggleAllChecked (status) {
    this.chkListArray.forEach((ele, i) => {
      ele.target.checked = status
      ele.checked = status
    })
    this.listStatus() // 상태감지
  }
  listStatus () {
    const status = this.chkListArray.some((data) => { return data.checked === false })
    if (status) {
      this.allChk.checked = false
    } else {
      this.allChk.checked = true
    }
    if (this.callback !== null) {
      this.callback(!status)
    }
  }
}

const callTxtFile = {
  async getTxtContent (url) {
    try {
      const response = await fetch(url)
      return response.text()
    } catch(err) {
      alert(err)
    }
    // console.log(url, target)
  }
}

export {
  tabEvent,
  termsChkEvent, 
  callTxtFile
}