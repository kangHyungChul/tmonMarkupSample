/* js import */
import { termsChkEvent, callTxtFile } from '../../asset/js/util'

/* css import */
import '../../asset/css/agree.scss'

/* etc import */
import '../../asset/txt/personal.txt'
import '../../asset/txt/refund.txt'
import '../../asset/txt/service.txt'

/* document script */
/* 체크박스 처리 */
const setButtonStatus = (status) => {
  const nowStatus = !status
  const target = document.querySelector('.fixed-btn-wrap__btn-submit')
  target.disabled = nowStatus
  if (nowStatus) {
    target.classList.add('disabled')
  } else {
    target.classList.remove('disabled')
  }
}

// 체크박스이벤트 호출
const termsChk = new termsChkEvent({
  allChk: '#all-chk', 
  chkList: ['#service-term', '#personal-term', '#refund-term'],
  callback (status) { // 전체 체크시 true반환 아닐경우 false반환
    setButtonStatus(status)
  } 
})
termsChk.init()

/* 약관 토글처리 */
const toggleTerms = {
  termsList: [
    { target: document.querySelector('.js-service-term'), url: '../../asset/txt/service.txt' },
    { target: document.querySelector('.js-personal-term'), url: '../../asset/txt/personal.txt' },
    { target: document.querySelector('.js-refund-term'), url: '../../asset/txt/refund.txt' },
  ],
  toggleBtn: '.terms-list__btn-toggle',
  detailClass: 'terms-list__detail',
  activeClass: 'open',
  init () {
    this.termsList.forEach((data, i) => {
      const target = data.target
      const url = data.url
      target.querySelector(this.toggleBtn).addEventListener('click', () => {
        if (target.classList.contains(this.activeClass)) {
          this.removeDetail(target)
        } else {
          this.getTxtFile(url).then((response) => {
            this.addDetail(target, response)
          })
        }
      })
    })
  },
  addDetail (target, response) {
    const ele = document.createElement('div')
    ele.classList.add(this.detailClass)
    ele.innerHTML = '<div class="terms-content"></div>'
    ele.querySelector('.terms-content').innerText = response
    target.insertAdjacentElement('beforeend', ele)
    target.classList.add(this.activeClass)
  },
  removeDetail (target) {
    target.querySelector(`.${this.detailClass}`).remove()
    target.classList.remove(this.activeClass)
  },
  async getTxtFile (url) {
    return await callTxtFile.getTxtContent(url)
  }
}
toggleTerms.init()