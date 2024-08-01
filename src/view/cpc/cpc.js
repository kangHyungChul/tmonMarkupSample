/* js import */
import { SetModal } from '../../asset/js/modal'

/* css import */
import '../../asset/css/card.scss'

/* image import */
import '../../asset/img/card_horizontal_lg.png'
import '../../asset/img/card_vertical_lg.png'

/* document script */

// 신규발급대상 모달
const newCpcModal = () => SetModal.tConfirm({
  title: '신규 발급 대상자입니다.', // confirm모달 타이틀
  msg: '제휴카드 발급을 계속 진행하시겠습니까?', // confirm모달 내용
  // cancelText: opt.cancelText, // 취소버튼 텍스트, 기본값 '아니오'
  // okText: opt.okText, // 확인버튼 텍스트, 기본값 '예'
  callback (status) { // 콜백처리 status에 확인버튼은 true, 취소는 false 반환
    if (status) {
      cpcCompleteModal()
    }
  }
})

// 대상자 아닐경우 모달
const oldCpcModal = () => {
  SetModal.tConfirm({
    title: '신규 발급 대상자가 아닙니다.',
    msg: '카드 발급 이력이 있어 혜택 제공이 어렵습니다.<br/>제휴카드를 발급하시겠습니까?',
    // cancelText: opt.cancelText,
    // okText: opt.okText,
    callback (status) {
      if (status) {
        cpcCompleteModal()
      }
    }
  })
}

const cpcCompleteModal = () => {
  SetModal.tAlert({
    title: '카드 발급이 완료되었습니다.<br/>정기결제로 등록 진행 합니다.',
    // okText: opt.okText,
    // callback (status) {
    //   alert('최종 닫기 처리')
    // }
  })
} 

document.querySelector('.fixed-btn-wrap__btn-submit').addEventListener('click', () => {
  newCpcModal()
})