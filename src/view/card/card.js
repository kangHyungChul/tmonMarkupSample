/* js import */
import { tabEvent } from '../../asset/js/util'

/* css import */
import '../../asset/css/card.scss'

/* image import */
import '../../asset/img/card_horizontal.png'
import '../../asset/img/card_vertical.png'

/* document script */
// 탭 이벤트 호출
const cardTab = new tabEvent('.card-page') // 탭요소 감싸는 부모 선택
cardTab.init()