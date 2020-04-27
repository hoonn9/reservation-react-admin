const COMPANY_NAME = "냥이특별시";
const COMPANY_ADDRESS = "서울 중구 소공로 포스트타워 B코어 12층";
const COMPANY_CEO = "코젤";
const COMPANY_TEL = "1599-9999";
//사업자 번호
const COMPANY_BN_NUMBER = "123-45-67890";
//신고 번호
const COMPANY_RG_NUMBER = "2020-서울중구-1234";
const COMPANY_EMAIL = "google@gmail.com";

const getLanguage = (language = "kr") => {
  if (language === "kr") {
    return {
      text_company_name: COMPANY_NAME,
      text_company_address: COMPANY_ADDRESS,
      text_company_ceo: COMPANY_CEO,
      text_company_tel: COMPANY_TEL,
      text_company_bn_number: COMPANY_BN_NUMBER,
      text_company_rg_number: COMPANY_RG_NUMBER,
      text_company_email: COMPANY_EMAIL,
      text_ceo: "대표",
      text_tel: "대표번호",
      text_bn_number: "사업자등록번호",
      text_rg_number: "통신판매신고번호",
      text_login: "로그인",
      text_logout: "로그아웃",
      text_join: "회원가입",
      text_mypage: "마이페이지",
      text_free_board: "자유게시판",
      text_reserve: "예약",
      text_infomation: "안내",
      text_event: "이벤트",
      text_count: "건",
      text_notice: "공지사항",
      text_center: "고객센터",
      text_roadmap: "오시는길",
      text_id: "아이디",
      text_pw: "비밀번호",
      text_pw_confirm: "비밀번호 확인",
      text_email: "이메일",
      text_address: "주소",
      text_phone_num: "휴대폰번호",
      text_name: "이름",
      text_username: "실명",
      text_nickname: "닉네임",
      text_cancel: "취소",
      text_write: "글쓰기",
      text_list: "목록",
      text_alert: "알림",
      text_close: "닫기",
      text_confirm: "확인",
      text_change: "변경",
      text_more_info: "상품 보기",
      text_reserve_check: "예약조회",
      text_reserve_do: "예악하기",
      text_welcome_logout: "환영합니다. 로그인 해주세요.",
      text_welcome_login: "님 반갑습니다.",
      text_no_member: "비회원",
      text_member: "회원",
      text_write_title_placeholder: "제목을 입력해주세요.",
      text_regist: "등록",
      text_network_error: "Network error. your connection has heen denied. ",
      text_join_title: `${COMPANY_NAME} 서비스 이용 동의`,
      text_join_subTitle: "회원가입시 개인정보 수집 및 이용 동의가 필요합니다.",
      text_join_all_agree: "전체 동의",
      text_join_1_agree: `(주) ${COMPANY_NAME} 개인정보 수집 및 이용동의 (필수)`,
      text_join_2_agree: `${COMPANY_NAME} 이용약관 (필수)`,
      text_join_3_agree: "마케팅 활용 및 광고 정보 수신 동의 (선택)",
      text_join_detail: "자세히 보기",
      text_join_error:
        "가입에 실패하였습니다. 입력한 가입 정보를 다시 확인하세요.",
      text_join_success: "가입에 성공하였습니다. 로그인 하세요.",
      text_join_phone_placeholder: "' - ' 를 제외하고 입력 해주세요.",
      text_agree: "동의",
      text_email_error: "이메일 주소를 다시 확인해주세요.",
      text_email_exist: "이미 사용 중인 이메일 입니다.",
      text_nickname_error:
        "한글, 영문 대 소문자, 숫자, '-' '_' 로 16자 이내로만 가능합니다.",
      text_nickname_exist: "이미 사용 중인 닉네임 입니다.",
      text_id_error:
        "5~20자의 영문 소문자, 숫자와 특수기호(_)만 사용 가능합니다.",
      text_id_exist: "이미 사용 중이거나 탈퇴한 계정입니다.",
      text_pw_error: "8~15자의 영문 대 소문자, 숫자, 특수문자를 사용하세요. ",
      text_phone_error:
        "휴대폰 번호를 다시 입력하세요. ( '-' 를 제외하고 입력하세요. )",
      text_pwcf_error: "비밀번호가 서로 일치하지 않습니다.",
      text_login_pw_error: "비밀번호가 일치하지 않습니다.",
      text_login_error:
        "계정이 존재하지 않거나 입력한 정보가 일치하지 않습니다.",
      text_board_header_no: "번호",
      text_board_header_title: "제목",
      text_board_header_name: "작성자",
      text_board_header_views: "조회수",
      text_board_header_date: "작성일",
      text_reservation_widget_title:
        "지구 최강의 숙소와 즐길거리를 예약하세요!",
      text_check_in: "체크인",
      text_check_out: "체크아웃",
      text_room: "객실",
      text_room_info: "객실 정보",
      text_adult: "성인",
      text_child: "소아",
      text_search: "검색",
      text_position: "위치",
      text_option: "옵션",
      text_option_expect_check_in: "체크인 예정시간",
      text_option_expect_check_out: "체크아웃 예정시간",
      text_option_request: "특별요청",
      text_option_request_placeholder: "ex) 높은 층 제외, 조용한 객실",
      text_next: "다음",
      text_add_info: "추가 정보",
      text_reserve_user: "예약자",
      text_reserve_user_info: "예약자 정보",
      text_guest: "투숙자",
      text_guest_user_info: "투숙자 정보",
      text_bio: "성별",
      text_man: "남",
      text_woman: "여",
      text_price: "가격",
      text_use_agree: "활용 동의",
      text_use_agree_text: "[필수] 개인정보수집 및 활용에 동의",
      text_user_info: "회원 정보",
      text_current_pw: "현재 비밀번호",
      text_new_pw: "신규 비밀번호",
      text_new_pw_confirm: "신규 비밀번호 확인",
      text_pw_placeholder: "********",
      text_not_correct: "정확한 정보를 입력해주세요.",
      text_pw_changed: " 비밀번호가 변경되었습니다.",
      text_pw_change_error: "비밀번호를 변경하는데 문제가 발생하였습니다.",
      text_no_result: "결과 없음",
      text_user_info_change: "회원정보변경",
      text_user_createdAt: "가입일",
      text_reserve_createdAt: "예약일",
      text_pack: "패키지",
      text_info: "정보",
      text_number: "수",
      text_persons: "명",
      text_total: "총합",
      text_secret: "시크릿",
      text_is_agree: "활용 동의",
      text_post: "게시글",
      text_board: "게시판",
      text_writer: "작성자",
      text_createdAt: "생성일",
      text_updatedAt: "갱신일",
      text_type: "타입",
      text_title: "제목",
      text_content: "내용",
      text_comment: "댓글",
      text_views: "조회수",
      text_file: "파일",
      text_files: "파일",
      text_url: "경로",
      text_link: "링크",
    };
  } else if (language === "en") {
    return {
      text_login: "LOGIN",
      text_join: "JOIN",
      text_mypage: "MYPAGE",
      text_id: "ID",
      text_pw: "PASSWORD",
      text_join_all_agree: "전체 동의",
    };
  }
};

export const globalText = getLanguage();