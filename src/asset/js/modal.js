/* modaljs */
export const SetModal = {
  dimmedClass: 'modal-dimmed',
  modalClass: 'modal-content',
  btnOkClass: 'btn-ok',
  btnCancelClaass: 'btn-cancel',
  tConfirm (opt) {

    const confirmOpt = {
      title: opt.title || '', // 타이틀문구
      msg: opt.msg || '', // 메세지문구
      okText: opt.okText || '예', // ok 텍스트
      cancelText: opt.cancelText || '아니오',
      callback: opt.callback || null
    }

    // 배경만들기
    this.createBg()

    // 모달 element 생성
    const confirm = document.createElement('div')
    confirm.classList.add(this.modalClass)
    confirm.innerHTML = `
      <div class="modal-content__system">
        <div class="modal-content__content">
          <h4 class="s-title">${confirmOpt.title}</h4>
          <p class="s-msg">${confirmOpt.msg}</p>
        </div>
        <div class="modal-content__btn-wrap">
          <button type="button" class="modal-content__${this.btnCancelClaass}">${confirmOpt.cancelText}</button>
          <button type="button" class="modal-content__${this.btnOkClass}">${confirmOpt.okText}</button>
        </div>
      </div>`
    document.body.insertAdjacentElement('afterend', confirm)

    // 확인 취소 버튼에 callback 처리
    confirm.querySelector('.modal-content__btn-ok').onclick = () => {
      this.returnEvent().then(() => {
        confirmOpt.callback(true)
      })
    }
    confirm.querySelector('.modal-content__btn-cancel').onclick = () => {
      this.returnEvent().then(() => {
        confirmOpt.callback(false)
      })
    }

  },
  tAlert (opt) {

    const alertOpt = {
      title: opt.title || '', // 타이틀문구
      okText: opt.okText || '확인', // ok 텍스트
      callback: opt.callback || null // 콜백처리
    }

    this.createBg()

    const alert = document.createElement('div')
    alert.classList.add(this.modalClass)
    alert.innerHTML = `
      <div class="modal-content__system">
        <div class="modal-content__content">
          <h4 class="s-title">${alertOpt.title}</h4>
        </div>
        <div class="modal-content__btn-wrap">
          <button type="button" class="modal-content__btn-ok">${alertOpt.okText}</button>
        </div>
      </div>`
    document.body.insertAdjacentElement('afterend', alert)

    alert.querySelector('.modal-content__btn-ok').onclick = () => {
      this.returnEvent().then(() => {
        alertOpt.callback(true)
      })
    }

  },
  async returnEvent () {
    await this.closeModal()
  },
  closeModal () {
    return new Promise((resolve, reject) => {
      try {
        document.querySelector(`.${this.dimmedClass}`).remove()
        document.querySelector(`.${this.modalClass}`).remove()
        resolve('success')
      } catch {
        reject('fail')
      }
    })
  },
  createBg () {
    const bg = document.createElement('div')
    bg.classList.add(this.dimmedClass)
    document.body.insertAdjacentElement('afterend', bg)
  },
  // removeBg: function () {}
}