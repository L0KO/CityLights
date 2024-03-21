import '../css/DetailsPage.css'
import { YMaps, Map } from '@pbe/react-yandex-maps';

function DetailsPage() {

  return (
    <div className="wrapper">
      <header className='header-search'>
        <div className="header-search__city header-search__component"><img src="/img/searchPage/icons/map_icon.png" alt="" />Таганрог</div>
        <div className="header-search__settings header-search__component"><img src="/img/searchPage/icons/settings_icon.svg" alt="" /></div>
        <div className="header-search__search header-search__component">
          <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <path d="M13.3744 3.61466C10.9019 3.61466 8.53075 4.51969 6.78247 6.13065C5.0342 7.7416 4.05203 9.92653 4.05203 12.2048C4.05203 14.483 5.0342 16.6679 6.78247 18.2789C8.53075 19.8899 10.9019 20.7949 13.3744 20.7949C15.8468 20.7949 18.218 19.8899 19.9662 18.2789C21.7145 16.6679 22.6967 14.483 22.6967 12.2048C22.6967 9.92653 21.7145 7.7416 19.9662 6.13065C18.218 4.51969 15.8468 3.61466 13.3744 3.61466ZM0.94458 12.2048C0.944863 10.382 1.41725 8.58568 2.32248 6.96501C3.22771 5.34433 4.53965 3.94614 6.14925 2.88663C7.75885 1.82712 9.61963 1.13689 11.5769 0.873315C13.5343 0.609737 15.5316 0.780419 17.4029 1.37118C19.2742 1.96193 20.9655 2.9557 22.3362 4.2699C23.7069 5.58409 24.7174 7.18075 25.2838 8.92718C25.8501 10.6736 25.956 12.5194 25.5925 14.3111C25.229 16.1028 24.4067 17.7887 23.1939 19.2286L31.5638 26.9411C31.8468 27.2111 32.0034 27.5728 31.9999 27.9481C31.9963 28.3235 31.8329 28.6826 31.5449 28.9481C31.2568 29.2135 30.8671 29.3641 30.4597 29.3673C30.0523 29.3706 29.6599 29.2263 29.3668 28.9655L20.9969 21.253C19.1596 22.5674 16.9588 23.3804 14.6449 23.5995C12.331 23.8186 9.99686 23.435 7.90782 22.4924C5.81877 21.5498 4.05869 20.0859 2.82773 18.2672C1.59677 16.4486 0.944322 14.3481 0.94458 12.2048Z" fill="black" />
            </g>
          </svg>
          Поиск мероприятий
          <div className="header-search__search-button">Найти</div>
        </div>
        <div className="header-search__calendar header-search__component">
          <img src="/img/searchPage/icons/calendar_icon.svg" alt="" />
        </div>
        <div className="header-search__eco header-search__component">
          <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 34C13 24.5719 13 19.8579 15.9289 16.9289C18.8579 14 23.5719 14 33 14H44C53.4281 14 58.1421 14 61.0711 16.9289C64 19.8579 64 24.5719 64 34V48C64 57.4281 64 62.1421 61.0711 65.0711C58.1421 68 53.4281 68 44 68H33C23.5719 68 18.8579 68 15.9289 65.0711C13 62.1421 13 57.4281 13 48V34Z" fill="white" />
            <g clip-path="url(#clip0_531_159)">
              <rect width="40" height="40" transform="translate(18 23)" fill="white" />
              <path d="M28.4167 36.4167C23.8667 40.9667 23.8667 48.3334 28.3833 52.8834C30.8333 47.2167 35.2 42.4834 40.65 39.6667C36.0333 43.5667 32.8 49.0167 31.6667 55.2C36 57.25 41.3333 56.5 44.9167 52.9167C50.7167 47.1167 51.6667 29.6667 51.6667 29.6667C51.6667 29.6667 34.2167 30.6167 28.4167 36.4167Z" fill="#1D7307" />
            </g>
            <g clip-path="url(#clip1_531_159)">
              <path d="M62.0177 71.6158C60.8256 70.4824 60.8256 68.6473 62.009 67.5138C62.6509 68.9254 63.7949 70.1046 65.2228 70.8062C64.0133 69.8347 63.1661 68.477 62.8692 66.9367C64.0045 66.426 65.4018 66.6129 66.3407 67.5055C67.8602 68.9503 68.1091 73.2973 68.1091 73.2973C68.1091 73.2973 63.5373 73.0606 62.0177 71.6158Z" fill="#406017" />
              <path d="M59.0291 13.2972C60.0385 12.5486 60.286 11.1716 59.5885 10.22C58.9369 11.2244 57.9558 12.0114 56.8352 12.4159C57.8353 11.7902 58.6271 10.8439 59.0482 9.71343C58.3012 9.23325 57.272 9.25407 56.477 9.84368C55.1902 10.798 54.4252 14.0386 54.4252 14.0386C54.4252 14.0386 57.7423 14.2516 59.0291 13.2972Z" fill="#406017" />
              <path d="M52.4712 4.68032C51.7246 5.92821 52.1943 7.65818 53.5135 8.54863C53.7105 7.12129 54.4036 5.83757 55.4658 4.96125C54.6625 6.05913 54.2733 7.46647 54.4094 8.96323C55.5274 9.27381 56.6948 8.88742 57.2827 7.90465C58.2344 6.31393 57.3383 2.17856 57.3383 2.17856C57.3383 2.17856 53.4229 3.0896 52.4712 4.68032Z" fill="#406017" />
              <path d="M64.2247 21.277C65.0803 22.0561 66.3683 22.0352 67.1042 21.2361C66.0811 20.8257 65.1959 20.0791 64.6315 19.1384C65.3743 19.9309 66.3699 20.4783 67.466 20.658C67.7672 19.8979 67.5657 18.9717 66.8918 18.3582C65.8012 17.365 62.7376 17.2492 62.7376 17.2492C62.7376 17.2492 63.134 20.2839 64.2247 21.277Z" fill="#406017" />
              <path d="M70.8453 13.8219C69.5853 13.3689 68.1057 14.1004 67.5354 15.4503C68.86 15.3748 70.1428 15.7732 71.1231 16.5772C69.9886 16.0464 68.648 15.9447 67.3199 16.3333C67.2378 17.3985 67.7941 18.3846 68.7864 18.7414C70.3925 19.3188 73.9697 17.775 73.9697 17.775C73.9697 17.775 72.4515 14.3993 70.8453 13.8219Z" fill="#406017" />
              <path d="M61.1606 27.7809C60.9588 29.3903 62.2189 30.9707 63.9701 31.3183C63.5285 29.7616 63.6595 28.1383 64.3516 26.7755C64.0243 28.2548 64.26 29.874 65.0736 31.3583C66.3577 31.195 67.3782 30.2919 67.5371 29.0244C67.7944 26.9728 65.0142 23.0968 65.0142 23.0968C65.0142 23.0968 61.4178 25.7293 61.1606 27.7809Z" fill="#406017" />
              <path d="M76.6523 30.3322C76.1453 28.3511 73.9493 27.024 71.7499 27.3573C72.9818 29.0035 73.5777 30.9709 73.4 32.8695C73.0992 30.9885 72.0781 29.1813 70.4464 27.7781C69.0265 28.5149 68.2545 30.0115 68.6538 31.5717C69.3001 34.0971 74.3246 37.4832 74.3246 37.4832C74.3246 37.4832 77.2987 32.8577 76.6523 30.3322Z" fill="#406017" />
              <path d="M68.9613 55.7329C68.3473 56.0473 68.1723 56.8847 68.5663 57.6032C68.9734 57.0683 69.5713 56.7248 70.2442 56.6475C69.6382 56.8851 69.1493 57.3605 68.8763 58.0129C69.3094 58.439 69.9202 58.5914 70.4037 58.3438C71.1864 57.943 71.7067 56.0017 71.7067 56.0017C71.7067 56.0017 69.744 55.3321 68.9613 55.7329Z" fill="#406017" />
              <path d="M72.8064 62.1205C73.2954 61.4704 73.0515 60.3452 72.2658 59.6058C72.109 60.4472 71.6518 61.1272 70.9789 61.5038C71.4988 60.9535 71.7729 60.153 71.7275 59.2197C71.0504 58.864 70.3254 58.926 69.9403 59.4381C69.3169 60.2668 69.7611 62.9227 69.7611 62.9227C69.7611 62.9227 72.183 62.9493 72.8064 62.1205Z" fill="#406017" />
              <path d="M32.1168 68.7731C31.8547 67.6861 30.6805 67.1016 29.4955 67.4613C30.1494 68.3019 30.4594 69.3742 30.3537 70.4673C30.2019 69.4212 29.6623 68.4729 28.7921 67.8014C28.0243 68.3302 27.601 69.2408 27.8074 70.0969C28.1416 71.4826 30.8263 73.0187 30.8263 73.0187C30.8263 73.0187 32.451 70.1588 32.1168 68.7731Z" fill="#406017" />
              <path d="M21.4468 71.6522C22.2757 72.7833 23.9615 72.9637 25.2135 72.0631C24.0311 71.3753 23.1518 70.2808 22.7616 68.9906C23.4386 70.1206 24.5348 70.9787 25.8969 71.3841C26.5683 70.4633 26.6456 69.2498 25.9929 68.3591C24.9363 66.9173 20.9874 66.277 20.9874 66.277C20.9874 66.277 20.3903 70.2105 21.4468 71.6522Z" fill="#406017" />
              <path d="M57.1253 76.0626C57.9827 75.3419 58.1017 74.12 57.397 73.3315C56.8833 74.2531 56.0546 75.0056 55.0701 75.4321C55.9285 74.8197 56.5736 73.9399 56.8687 72.9227C56.1552 72.5502 55.2242 72.6348 54.549 73.2024C53.456 74.1211 53.0106 77.0086 53.0106 77.0086C53.0106 77.0086 56.0324 76.9814 57.1253 76.0626Z" fill="#406017" />
              <path d="M50.7757 68.8632C50.1983 70.0565 50.7215 71.5926 51.9387 72.2986C52.0212 70.9853 52.5493 69.7636 53.428 68.8833C52.7912 69.9447 52.5383 71.2549 52.7532 72.6051C53.7565 72.7997 54.7589 72.3566 55.2137 71.4169C55.9498 69.8957 54.8984 66.206 54.8984 66.206C54.8984 66.206 51.5118 67.3421 50.7757 68.8632Z" fill="#406017" />
              <path d="M11.3952 34.8503C12.4099 33.9895 12.5147 32.5274 11.6363 31.5822C11.0442 32.6842 10.0652 33.583 8.88723 34.0913C9.9066 33.3602 10.6592 32.3086 10.9837 31.0918C10.1081 30.6446 8.98394 30.7438 8.18482 31.4217C6.89136 32.5189 6.44486 35.9736 6.44486 35.9736C6.44486 35.9736 10.1017 35.9475 11.3952 34.8503Z" fill="#406017" />
              <path d="M3.55873 26.2204C2.89568 27.6483 3.56413 29.488 5.04504 30.335C5.11019 28.7628 5.71325 27.3009 6.7464 26.2482C6.00861 27.518 5.73857 29.0863 6.03165 30.7032C7.24235 30.9375 8.43545 30.4085 8.95763 29.2839C9.80284 27.4638 8.44406 23.0449 8.44406 23.0449C8.44406 23.0449 4.40394 24.4003 3.55873 26.2204Z" fill="#406017" />
              <path d="M5.78066 19.7861C7.05228 19.8504 8.15876 18.9547 8.25828 17.7886C7.09041 18.1451 5.81495 18.128 4.68733 17.7308C5.86994 17.8832 7.10653 17.6593 8.18178 17.0614C7.9295 16.2241 7.12737 15.5915 6.12591 15.5408C4.50494 15.4589 1.76112 17.4516 1.76112 17.4516C1.76112 17.4516 4.15969 19.7042 5.78066 19.7861Z" fill="#406017" />
              <path d="M10.8718 8.89696C12.2167 10.1757 12.2167 12.2459 10.8817 13.5246C10.1575 11.9321 8.86689 10.6019 7.25603 9.81031C8.62058 10.9063 9.57626 12.438 9.91124 14.1757C8.63043 14.7518 7.05406 14.541 5.99493 13.534C4.28062 11.904 3.99983 7 3.99983 7C3.99983 7 9.15753 7.26698 10.8718 8.89696Z" fill="#406017" />
              <path d="M71.5451 67.0327C70.2433 66.3304 68.5712 66.7639 67.8054 67.9946C69.2365 68.1834 70.5691 68.8358 71.5307 69.8319C70.3725 69.0772 68.9442 68.7086 67.4737 68.8309C67.2646 69.8753 67.7502 70.9682 68.7754 71.5212C70.4348 72.4164 74.4519 71.5921 74.4519 71.5921C74.4519 71.5921 73.2045 67.9278 71.5451 67.0327Z" fill="#406017" />
              <path d="M61.3078 4.45655C59.5662 6.11244 59.5662 8.79341 61.295 10.4493C62.2328 8.38702 63.9042 6.66441 65.9902 5.63933C64.2231 7.05867 62.9855 9.0421 62.5517 11.2924C64.2104 12.0385 66.2518 11.7655 67.6233 10.4614C69.8433 8.35063 70.207 2 70.207 2C70.207 2 63.5278 2.34574 61.3078 4.45655Z" fill="#406017" />
              <path d="M1.15313 60.4782C-0.382496 61.9383 -0.382496 64.3022 1.14188 65.7623C1.96875 63.9439 3.4425 62.425 5.28188 61.5211C3.72375 62.7726 2.6325 64.5215 2.25 66.5057C3.7125 67.1636 5.5125 66.9229 6.72188 65.773C8.67937 63.9118 9 58.3121 9 58.3121C9 58.3121 3.11063 58.617 1.15313 60.4782Z" fill="#406017" />
              <path d="M70 45C70 45.5523 69.5523 46 69 46C68.4477 46 68 45.5523 68 45C68 44.4477 68.4477 44 69 44C69.5523 44 70 44.4477 70 45Z" fill="#94A24C" />
              <circle cx="2" cy="21" r="1" fill="#94A24C" />
              <circle cx="8" cy="3" r="2" fill="#94A24C" />
              <circle cx="33" cy="3" r="1" fill="#94A24C" />
              <circle cx="35" cy="73" r="1" fill="#94A24C" />
              <circle cx="59" cy="70" r="1" fill="#94A24C" />
              <circle cx="50.5" cy="2.5" r="0.5" fill="#94A24C" />
              <circle cx="23" cy="7" r="2" fill="#94A24C" />
              <circle cx="12" cy="55" r="2" fill="#94A24C" />
              <circle cx="65" cy="63" r="2" fill="#94A24C" />
              <circle cx="72" cy="24" r="2" fill="#94A24C" />
              <circle cx="1.5" cy="33.5" r="1.5" fill="#94A24C" />
              <path d="M3.49988 40.5C3.49988 40.7761 3.27602 41 2.99988 41C2.72374 41 2.49988 40.7761 2.49988 40.5C2.49988 40.2239 2.72374 40 2.99988 40C3.27602 40 3.49988 40.2239 3.49988 40.5Z" fill="#94A24C" />
              <circle cx="57.5" cy="6.5" r="0.5" fill="#94A24C" />
              <circle cx="15.5" cy="74.5" r="0.5" fill="#94A24C" />
              <circle cx="67.5" cy="35.5" r="0.5" fill="#94A24C" />
              <circle cx="72.5" cy="8.5" r="0.5" fill="#94A24C" />
              <path d="M12.1638 6.52988C11.68 8.33892 12.8619 10.3026 14.7967 10.9237C14.5412 9.09216 14.9467 7.25827 15.9486 5.79336C15.3428 7.43787 15.3546 9.3143 16.0443 11.1111C17.5291 11.0898 18.8316 10.191 19.2126 8.76633C19.8293 6.46031 17.2831 1.68425 17.2831 1.68425C17.2831 1.68425 12.7805 4.22386 12.1638 6.52988Z" fill="#406017" />
              <path d="M28.792 11.7713C30.0975 12.893 32.0471 12.7983 33.1507 11.5682C31.5964 11.0055 30.2464 9.93371 29.3796 8.55621C30.5146 9.70362 32.029 10.4723 33.6907 10.6867C34.1367 9.53634 33.8194 8.16254 32.7912 7.27911C31.127 5.84918 26.4876 5.8271 26.4876 5.8271C26.4876 5.8271 27.1278 10.3413 28.792 11.7713Z" fill="#406017" />
              <path d="M34.4195 7.23093C33.2755 8.8274 33.776 11.2264 35.5277 12.5944C35.9251 10.6872 36.9981 9.03562 38.5473 7.98095C37.3379 9.36741 36.6755 11.2238 36.7337 13.266C38.257 13.8244 39.9093 13.4457 40.8103 12.1884C42.2686 10.1534 41.3863 4.4466 41.3863 4.4466C41.3863 4.4466 35.8778 5.19587 34.4195 7.23093Z" fill="#406017" />
              <path d="M2.1199 42.3089C2.60206 41.9443 2.76819 41.2633 2.49404 40.7871C2.16187 41.2807 1.69086 41.6645 1.17272 41.8577C1.64578 41.5541 2.03841 41.0901 2.27239 40.5325C1.95715 40.2896 1.49534 40.2932 1.11561 40.5803C0.50099 41.045 0.0282112 42.6464 0.0282112 42.6464C0.0282112 42.6464 1.50528 42.7736 2.1199 42.3089Z" fill="#406017" />
              <path d="M0.714802 40.2698C1.19216 40.7462 1.95234 40.7348 2.41408 40.248C1.82511 39.9965 1.32914 39.5399 1.0291 38.9653C1.4395 39.4497 2.00747 39.7848 2.64749 39.8956C2.85156 39.4321 2.76498 38.8667 2.38903 38.4916C1.78053 37.8845 -0.0218029 37.8105 -0.0218029 37.8105C-0.0218029 37.8105 0.106298 39.6627 0.714802 40.2698Z" fill="#406017" />
              <path d="M3.81412 38.417C3.31198 38.7967 3.13897 39.5059 3.42448 40.0018C3.77041 39.4877 4.26093 39.0881 4.80054 38.8868C4.30788 39.2031 3.89899 39.6863 3.65531 40.267C3.98361 40.5199 4.46455 40.5161 4.86001 40.2171C5.50009 39.7332 5.99246 38.0655 5.99246 38.0655C5.99246 38.0655 4.4542 37.9331 3.81412 38.417Z" fill="#406017" />
              <path d="M5.24463 40.8646C4.84625 40.3442 4.06632 40.2888 3.50186 40.7373C4.05693 41.0417 4.47808 41.5439 4.67646 42.1474C4.34812 41.6248 3.83034 41.2383 3.19645 41.0707C2.90004 41.5183 2.88175 42.0939 3.19549 42.5037C3.70332 43.1671 5.5334 43.3998 5.5334 43.3998C5.5334 43.3998 5.75245 41.528 5.24463 40.8646Z" fill="#406017" />
              <path d="M13.6702 72.7309C16.0636 71.5886 17.0895 68.8499 15.9761 66.613C14.2394 68.424 11.8913 69.6565 9.39118 70.0457C11.7199 69.1532 13.7294 67.5173 15.0288 65.3553C13.6382 64.07 11.4709 63.705 9.586 64.6046C6.53503 66.0607 3.73765 72.4335 3.73765 72.4335C3.73765 72.4335 10.6192 74.187 13.6702 72.7309Z" fill="#406017" />
              <path d="M15.5373 44.4465C16.2673 43.6769 16.1449 42.4955 15.2698 41.8053C14.9302 42.7356 14.2357 43.5329 13.3177 44.0324C14.0702 43.3665 14.5521 42.4641 14.6501 41.4625C13.8489 41.1717 12.9172 41.3387 12.3423 41.9447C11.4119 42.9257 11.5335 45.7326 11.5335 45.7326C11.5335 45.7326 14.6069 45.4274 15.5373 44.4465Z" fill="#406017" />
              <path d="M11.9404 41.6267C13.0228 42.3275 14.5387 42.1354 15.3299 41.2034C14.0852 40.9098 12.9709 40.2468 12.2163 39.3387C13.1671 40.0685 14.3924 40.5087 15.7012 40.5516C15.9839 39.7178 15.6583 38.7768 14.8058 38.2248C13.426 37.3315 9.80472 37.6153 9.80472 37.6153C9.80472 37.6153 10.5606 40.7333 11.9404 41.6267Z" fill="#406017" />
              <path d="M1.54896 47.1555C0.956307 47.891 1.03161 49.0646 1.7126 49.7789C1.99884 48.8705 2.56386 48.1062 3.30065 47.6448C2.69199 48.2769 2.2935 49.1527 2.1975 50.1404C2.82718 50.4569 3.56871 50.325 4.03545 49.7458C4.79091 48.8083 4.74599 46.0261 4.74599 46.0261C4.74599 46.0261 2.30442 46.218 1.54896 47.1555Z" fill="#406017" />
              <path d="M5.76028 50.9589C4.65103 50.0126 3.06074 50.1993 2.20458 51.3683C3.49627 51.7963 4.63997 52.6952 5.40015 53.8953C4.42937 52.917 3.16259 52.3007 1.79612 52.193C1.47453 53.2559 1.78531 54.4812 2.65889 55.2264C4.07287 56.4326 7.86643 56.2122 7.86643 56.2122C7.86643 56.2122 7.17426 52.1651 5.76028 50.9589Z" fill="#406017" />
              <path d="M41.5458 72.3369C42.2283 71.8246 42.4472 70.8512 42.0393 70.1616C41.5762 70.8625 40.9104 71.4026 40.1712 71.6683C40.8424 71.2432 41.3932 70.5862 41.7133 69.7913C41.2531 69.4356 40.5894 69.4304 40.0519 69.8339C39.182 70.4869 38.5491 72.7743 38.5491 72.7743C38.5491 72.7743 40.6759 72.99 41.5458 72.3369Z" fill="#406017" />
              <path d="M39.8286 69.2037C40.5042 69.8693 41.5978 69.8333 42.273 69.1282C41.4317 68.7856 40.7288 68.1486 40.3105 67.3385C40.8896 68.0173 41.6988 68.4794 42.6167 68.6205C42.9208 67.9554 42.8092 67.1528 42.2771 66.6287C41.4159 65.7802 38.8255 65.722 38.8255 65.722C38.8255 65.722 38.9674 68.3553 39.8286 69.2037Z" fill="#406017" />
              <path d="M43.6581 66.6205C42.9436 67.1569 42.7144 68.176 43.1415 68.898C43.6263 68.1642 44.3234 67.5987 45.0972 67.3206C44.3946 67.7657 43.8179 68.4535 43.4828 69.2857C43.9646 69.658 44.6594 69.6634 45.2221 69.241C46.1328 68.5574 46.7954 66.1627 46.7954 66.1627C46.7954 66.1627 44.5688 65.9369 43.6581 66.6205Z" fill="#406017" />
              <path d="M45.829 69.8456C45.2504 69.088 44.1312 69.0054 43.328 69.6556C44.1283 70.0997 44.7393 70.8308 45.0323 71.7087C44.5541 70.9481 43.8061 70.3848 42.8947 70.1395C42.4759 70.7893 42.4578 71.6259 42.9135 72.2225C43.651 73.1883 46.2787 73.5316 46.2787 73.5316C46.2787 73.5316 46.5666 70.8114 45.829 69.8456Z" fill="#406017" />
              <path d="M67.0021 50.1343C68.118 49.2966 68.4761 47.7047 67.809 46.5771C67.0518 47.7232 65.963 48.6064 64.7543 49.0408C65.8517 48.3457 66.7525 47.2714 67.2759 45.9715C66.5233 45.3899 65.438 45.3815 64.5592 46.0412C63.1367 47.1091 62.1017 50.8495 62.1017 50.8495C62.1017 50.8495 65.5796 51.2022 67.0021 50.1343Z" fill="#406017" />
              <path d="M63.6285 45.2824C64.7333 46.3708 66.5215 46.3118 67.6257 45.1589C66.2499 44.5986 65.1006 43.557 64.4164 42.2322C65.3635 43.3423 66.6867 44.098 68.1877 44.3287C68.685 43.2411 68.5025 41.9287 67.6324 41.0715C66.2241 39.6841 61.9881 39.5889 61.9881 39.5889C61.9881 39.5889 62.2201 43.895 63.6285 45.2824Z" fill="#406017" />
              <path d="M69.629 40.6076C68.5131 41.4454 68.1551 43.0372 68.8221 44.1649C69.5794 43.0187 70.6682 42.1355 71.8768 41.7011C70.7794 42.3962 69.8787 43.4705 69.3552 44.7705C70.1078 45.352 71.1931 45.3605 72.0719 44.7007C73.4944 43.6328 74.5294 39.8924 74.5294 39.8924C74.5294 39.8924 71.0515 39.5398 69.629 40.6076Z" fill="#406017" />
              <path d="M72.8636 46.1896C71.9599 45.0063 70.2117 44.8771 68.9572 45.8928C70.2072 46.5864 71.1615 47.7284 71.6191 49.0996C70.8722 47.9116 69.7039 47.0318 68.2804 46.6485C67.6263 47.6636 67.5979 48.9703 68.3096 49.9022C69.4617 51.4106 73.566 51.9469 73.566 51.9469C73.566 51.9469 74.0156 47.698 72.8636 46.1896Z" fill="#406017" />
            </g>
            <defs>
              <clipPath id="clip0_531_159">
                <rect width="40" height="40" fill="white" transform="translate(18 23)" />
              </clipPath>
              <clipPath id="clip1_531_159">
                <rect width="76" height="77" rx="10" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="header-search__favorite header-search__component">
          <img src="/img/searchPage/icons/favorite_icon.svg" alt="" />
          Избранное
        </div>
      </header>
      <main className="main-details">
        <div className="main-details__info-container">
          <img src="/img/searchPage/events/4.svg" alt="" className="main-details__info-img" />
          <div className="main-details__info-text-conteiner">
            <div className="main-details__info-text-header">
              <div>
                <p className="main-details__info-text">Концерт</p>
                <p className="main-details__info-text"><span className="bold">Курентзис: Моцарт</span></p>
              </div>
              <img src="/img/searchPage/icons/favorite_icon.svg" alt="" className="main-details__favorite-icon" />
            </div>
            <div className="main-details__info-main-container">
              <p className="main-details__info-text main-details__info-main-feedback">«Это был волнующий концерт» (Süddeutsche Zeitung)</p>
              <p className="main-details__info-text main-details__info-main-text">Концерты греко-российского дирижёра Теодора Курентзиса и его оркестра musicAeterna нередко больше напоминают перформанс и священнодействие, чем просто блестящую интерпретацию музыки, и неизменно становятся яркими событиями в музыкальной жизни.</p>
            </div>
            <div className="main-details__info-footer-container">
              <p className="main-details__info-footer-text">Хронометраж: 83 мин.</p>
              <p className="main-details__info-footer-text">Страна: Австрия</p>
              <p className="main-details__info-footer-text">Год: 2021</p>
            </div>
          </div>
        </div>
        <div className="main-detail__button-row">
          <button className="main-detail__button">Буду</button>
          <button className="main-detail__button">Перейти к источнику</button>
          <button className="main-detail__button">Пожаловаться</button>
        </div>
        <div className="main-detail__map-container">
          <p className="main-detail__map-adress">Адрес: <span>пл Мира, 7, Таганрог, Ростовская обл</span></p>
          <YMaps>
            <div className='main-detail__map'>
              <Map defaultState={{ center: [47.217482, 38.898857], zoom: 15 }} />
            </div>
          </YMaps>
        </div>
        <div className="main-detail__recomendation-container">
          <div className="main-detail__recomendation-header">Рекомендации</div>
          <div className="main-detail__recomendation-row">
            <div className="main-detail__recomendation-card">
              <img src="/img/searchPage/events/11.svg" alt="" className="main-detail__recomendation-img" />
              <div className="main-detail__recomendation-card-bottom">
                <div>
                  <p className="main-detail__recomendation-text">«Мир акварели»</p>
                  <p className="main-detail__recomendation-text">19 июня - 16 июля</p>
                </div>
                <img src="/img/searchPage/icons/favorite_icon.svg" alt="" className="main-details__favorite-icon" />
              </div>
            </div>
            <div className="main-detail__recomendation-card">
              <img src="/img/searchPage/events/12.svg" alt="" className="main-detail__recomendation-img" />
              <div className="main-detail__recomendation-card-bottom">
                <div>
                  <p className="main-detail__recomendation-text">«Роден»</p>
                  <p className="main-detail__recomendation-text">24 мая в 19:00</p>
                </div>
                <img src="/img/searchPage/icons/favorite_icon.svg" alt="" className="main-details__favorite-icon" />
              </div>
            </div>
            <div className="main-detail__recomendation-card">
              <img src="/img/searchPage/events/13.svg" alt="" className="main-detail__recomendation-img" />
              <div className="main-detail__recomendation-card-bottom">
                <div>
                  <p className="main-detail__recomendation-text">Концерт «Любимая музыка кино»</p>
                  <p className="main-detail__recomendation-text">18 июня в 16:00</p>
                </div>
                <img src="/img/searchPage/icons/favorite_icon.svg" alt="" className="main-details__favorite-icon" />
              </div>
            </div>
            <div className="main-detail__recomendation-card">
              <img src="/img/searchPage/events/14.svg" alt="" className="main-detail__recomendation-img" />
              <div className="main-detail__recomendation-card-bottom">
                <div>
                  <p className="main-detail__recomendation-text">Концерт «Богатыри эпохи славной»</p>
                  <p className="main-detail__recomendation-text">12 июня в 16:00</p>
                </div>
                <img src="/img/searchPage/icons/favorite_icon.svg" alt="" className="main-details__favorite-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="nothing">V.Sol</div>
      </main>
    </div>
  )
}

export default DetailsPage