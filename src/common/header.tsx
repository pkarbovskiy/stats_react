import React, { useState, useContext, MouseEvent } from 'react'
import { GlobalState } from '../routes'
import Search from '../components/Search'
import Popup from "../components/shared/Popup"
import Registration from "../components/user/Registration"
import Login from "../components/user/Login"
import LoginLogoutButton from "../components/user/LoginLogoutButton"
import RegistrationButton from "../components/user/RegistrationButton"
import DropdownMenu from '../components/shared/DropdownMenu'
import { Games, ActionTypes } from '../constants'

import { Link, useHistory, useLocation } from 'react-router-dom'
import Logo from './logo'

type PopupType = 'login' | 'registration'
type ContextProps = {
    isPopupShown: boolean;
    togglePopup?: Function;
    popupType: PopupType;
    setPopupType: Function;
}
// TODO properly identify type of this shiiiiiiit
const games: any = {
    default: Games.fortnite,
    dic: {
        [Games.fortnite]: {
            icon: <svg width="101" height="29" viewBox="0 0 101 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 14.0931C0 21.8459 0.0191652 28.1862 0.0447188 28.1862C0.0830491 28.1862 5.28959 27.2211 5.92843 27.0933L6.26063 27.0293V21.8523V16.6816H8.24103H10.2214V15.7357C10.2214 15.218 10.2406 13.8694 10.2661 12.7317L10.3045 10.6737H8.28575H6.26063V8.40473V6.13577H8.59239C9.87646 6.13577 10.9242 6.12299 10.9242 6.10381C10.9242 6.03351 11.4352 0.57523 11.4672 0.300398L11.5055 0H5.74955H0V14.0931Z" fill="#666FE4" />
                <path d="M95.5573 0.824446L90.4594 1.24628V13.978V26.7097L90.6702 26.7417C90.8554 26.7736 100.726 27.4895 100.924 27.4831C100.981 27.4831 101 26.8056 101 24.3193V21.1556H98.8281H96.6561V18.8547V16.5537H98.5087H100.361V13.8054V11.0571H98.4448H96.5283V9.23556V7.41401L96.6753 7.38844C96.7519 7.36927 97.4035 7.3437 98.1254 7.31814C98.8473 7.29896 99.7864 7.267 100.221 7.24144L101 7.20309V3.79646V0.383438L100.828 0.38983C100.726 0.396221 98.3554 0.587963 95.5573 0.824446Z" fill="#666FE4" />
                <path d="M62.8302 1.70625C62.8941 2.34539 63.6223 11.9773 63.6096 11.9901C63.6032 12.0028 62.6641 9.69553 61.5206 6.86413C60.3834 4.03273 59.4252 1.68707 59.3996 1.64233C59.3613 1.57203 57.5981 1.89799 54.7041 2.51157L54.4294 2.56909V13.5559V24.5428H57.2723H60.1151L60.0832 24.0826C60.0193 23.2262 59.7829 16.1445 59.8085 15.8633C59.8276 15.614 60.0193 16.0486 61.8336 20.4331C62.9324 23.0983 63.8651 25.3034 63.8907 25.3417C63.929 25.3801 64.817 25.3226 66.3246 25.1947C67.6343 25.0797 68.7075 24.9774 68.7075 24.971C68.7139 24.9646 68.682 20.3564 68.6372 14.732C68.5925 9.10752 68.5542 3.79624 68.5542 2.92062L68.5478 1.34194H65.673H62.7919L62.8302 1.70625Z" fill="#666FE4" />
                <path d="M17.8575 1.73105C14.0373 1.98671 11.9355 4.6008 11.2711 9.90569C11.1369 11.005 11.0794 14.7376 11.1753 16.0415C11.4947 20.2726 12.6382 23.0209 14.6697 24.4206C15.7621 25.1684 17.404 25.5711 19.0266 25.4752C20.8728 25.3729 22.1314 24.8488 23.2621 23.7176C24.1884 22.7908 24.6931 21.9216 25.1786 20.4388C25.8558 18.3679 26.1624 15.2745 26.0091 12.0532C25.8366 8.44844 25.2936 6.20505 24.1756 4.48576C23.1088 2.84955 21.4223 1.87166 19.4546 1.75023C19.1416 1.73105 18.8094 1.71188 18.72 1.6991C18.6305 1.69271 18.2472 1.70549 17.8575 1.73105ZM18.7583 6.75471C19.2246 7.25964 19.4227 9.27294 19.4227 13.5808C19.4227 18.8856 19.0905 21.0907 18.3622 20.6177C18.0492 20.4068 17.8128 19.3778 17.6978 17.6713C17.6148 16.4249 17.6148 10.7174 17.6978 9.5222C17.8192 7.83486 18.0364 6.90172 18.3622 6.67802C18.5411 6.55019 18.573 6.55658 18.7583 6.75471Z" fill="#666FE4" />
                <path d="M26.8308 13.3506V24.9893H29.7631H32.689L32.7273 24.1776C32.7528 23.7238 32.804 22.2538 32.8423 20.8988C32.8806 19.5439 32.9317 18.355 32.9573 18.2592C32.9892 18.125 33.2639 18.9878 34.1072 21.9023C34.7205 24.0051 35.2379 25.7499 35.2635 25.7755C35.3146 25.833 41.3069 25.3601 41.3708 25.2961C41.39 25.2706 40.7256 23.1806 39.8951 20.6368L38.3874 16.0222L38.7068 15.741C39.7673 14.8142 40.6425 13.0246 40.8917 11.2542C41.0003 10.4808 40.93 8.56339 40.7639 7.85394C40.1251 5.07367 38.4321 2.91336 36.2729 2.10805C35.3338 1.76291 35.4104 1.7693 30.9705 1.74373L26.8308 1.71817V13.3506ZM33.4172 7.22758C33.8708 7.45128 34.2413 8.0265 34.4394 8.81904C34.5735 9.34953 34.5544 11.0305 34.4074 11.5674C34.1327 12.5772 33.6472 13.1652 32.9189 13.3889L32.772 13.4273V10.2315V7.02944L32.9828 7.07418C33.0914 7.09336 33.2895 7.16366 33.4172 7.22758Z" fill="#666FE4" />
                <path d="M41.0774 4.76085V7.73286H42.7064H44.3355V16.2974V24.8619H47.4019H50.4683V16.8087V8.75549H52.1293H53.7903V5.78348V2.81146L53.6498 2.7859C53.5156 2.75394 41.3329 1.78244 41.1604 1.78884C41.0966 1.78884 41.0774 2.42798 41.0774 4.76085Z" fill="#666FE4" />
                <path d="M69.8879 14.0284V25.6288H73.0502H76.2124V14.0284V2.42797H73.0502H69.8879V14.0284Z" fill="#666FE4" />
                <path d="M83.4328 3.23408C79.9703 3.41943 77.0891 3.57283 77.0316 3.57283C76.923 3.57922 76.9166 3.76457 76.9166 6.58319V9.58716H78.5457H80.1747V17.9919V26.3966H83.2731H86.3714V17.6404V8.8841H88.0963H89.8212V5.88013C89.8212 4.22475 89.802 2.88255 89.7765 2.88255C89.7445 2.88894 86.8953 3.04234 83.4328 3.23408Z" fill="#666FE4" />
            </svg>,
            type: Games.fortnite
        },
        [Games.valorant]: {
            icon:
                <svg width="146" height="21" viewBox="0 0 146 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.5457 0H57.2613C61.1699 0.137265 64.8536 2.65753 66.386 6.25567C67.7969 9.43976 67.4639 13.3237 65.5017 16.2062C63.8432 18.7288 61.0349 20.4524 58.0309 20.7787C55.0808 21.1365 52.007 20.1464 49.822 18.1324C47.6482 16.1837 46.3723 13.2787 46.4151 10.3579C46.4084 7.33578 47.8193 4.35872 50.146 2.43701C51.9214 0.924849 54.2212 0.0855092 56.5457 0ZM55.2338 3.74215C52.4435 4.41272 50.326 7.0455 50.1595 9.89431C49.9165 12.5923 51.4129 15.3556 53.8364 16.5798C56.1046 17.7859 59.057 17.4529 61.0169 15.7989C63.5079 13.803 64.2505 10.0226 62.7519 7.21427C61.4332 4.51173 58.1569 2.94782 55.2338 3.74215Z" fill="#666FE4" />
                    <path d="M0 0.606658C1.11162 0.386134 2.25698 0.496396 3.3821 0.512148C3.70839 0.460392 3.72189 0.892439 3.72864 1.10846C3.73089 5.54369 3.72639 9.98116 3.72864 14.4164C7.28401 9.98791 10.8236 5.54819 14.3655 1.11296C14.6085 0.822681 14.892 0.485145 15.3106 0.505397C16.6877 0.462643 18.0694 0.485145 19.4488 0.516648C19.1472 1.22772 18.6027 1.78128 18.1324 2.3776C13.5014 8.17422 8.86592 13.9686 4.23719 19.7675C4.00767 20.0217 3.75789 20.348 3.3731 20.33C2.25023 20.393 1.12287 20.357 0 20.3053V0.606658Z" fill="#666FE4" />
                    <path d="M24.4889 1.9584C24.9704 1.34184 25.4947 0.588014 26.3498 0.520507C27.3039 0.466501 28.2647 0.4575 29.2188 0.520507C29.5226 0.682523 29.4079 1.06056 29.4416 1.33509C29.4304 6.88866 29.4394 12.4422 29.4371 17.998C29.4281 18.7744 29.4911 19.5575 29.3561 20.327C28.2827 20.3563 27.2094 20.3698 26.136 20.3405C25.7422 20.3743 25.4497 20.0795 25.2269 19.8005C23.5235 17.6695 21.8313 15.534 20.1144 13.4143C18.4245 15.525 16.7345 17.638 15.0514 19.7532C14.8286 20.0075 14.5878 20.336 14.2075 20.3293C12.8259 20.3833 11.442 20.3428 10.0581 20.3405C10.0198 19.9805 10.3124 19.7285 10.4991 19.4607C15.1706 13.6326 19.8286 7.7955 24.4889 1.9584ZM22.1869 10.4148C23.357 11.8842 24.5271 13.3513 25.704 14.8162C25.7017 11.8887 25.713 8.96337 25.6972 6.03582C24.5159 7.48722 23.3615 8.95887 22.1869 10.4148Z" fill="#666FE4" />
                    <path d="M33.8667 1.36115C33.914 1.07762 33.7474 0.544308 34.184 0.512805C35.3181 0.530807 36.5017 0.335036 37.6066 0.636568C37.5954 6.02814 37.6021 11.4197 37.6021 16.8113C40.4734 16.8338 43.3447 16.7663 46.2115 16.8495C45.8402 17.7226 45.0954 18.355 44.5598 19.1223C44.1166 19.6173 43.7543 20.4252 42.9689 20.3487C39.9514 20.3262 36.9315 20.4162 33.9185 20.3014C33.806 13.9895 33.9072 7.67307 33.8667 1.36115Z" fill="#666FE4" />
                    <path d="M70.6382 1.58166C70.672 1.19237 70.4852 0.434041 71.1108 0.492547C76.0748 0.474545 81.0411 0.492547 86.0051 0.483546C86.2571 0.465544 86.7229 0.517299 86.6464 0.888588C86.6397 2.36699 86.7364 3.86115 86.5924 5.33055C85.087 7.46153 83.3408 9.42824 81.7432 11.494C83.8696 14.1515 85.9849 16.818 88.1226 19.4665C88.3184 19.7253 88.5569 19.9863 88.5704 20.3306C87.1887 20.3486 85.8071 20.3711 84.4254 20.3306C83.9169 20.3261 83.6514 19.8243 83.3543 19.4913C81.2616 16.7978 79.0406 14.1987 77.0109 11.4579C78.9664 8.96694 80.9668 6.51193 82.929 4.02767C80.078 4.02542 77.2269 4.02317 74.3759 4.02992C74.3444 9.45074 74.4344 14.8738 74.3309 20.2924C73.1202 20.3824 71.9006 20.3846 70.69 20.2924C70.5797 14.057 70.6832 7.81932 70.6382 1.58166Z" fill="#666FE4" />
                    <path d="M91.6657 1.10163C91.6364 0.854107 91.7174 0.440063 92.0595 0.50307C93.1373 0.50532 94.2309 0.415311 95.2998 0.554825C95.8376 0.827104 96.1256 1.40766 96.5149 1.84421C101.18 7.67682 105.835 13.5162 110.507 19.342C110.727 19.6458 111.054 19.9294 111.045 20.3389C109.674 20.3479 108.299 20.3772 106.929 20.3344C106.542 20.3547 106.285 20.0306 106.06 19.7673C104.375 17.6454 102.678 15.5301 100.986 13.4127C99.276 15.5301 97.5815 17.6656 95.8826 19.7943C95.6576 20.0689 95.3718 20.3704 94.9825 20.3412C94.0014 20.3637 93.0158 20.3682 92.0347 20.3344C91.6027 20.3952 91.6837 19.8416 91.6634 19.5828C91.6702 13.4217 91.6634 7.26053 91.6657 1.10163ZM95.3943 6.0274C95.3876 8.95721 95.3921 11.887 95.3921 14.8146C96.5734 13.3542 97.7435 11.8848 98.9159 10.4154C97.7323 8.95946 96.5779 7.48105 95.3943 6.0274Z" fill="#666FE4" />
                    <path d="M108.194 0.648656C108.728 0.322371 109.427 0.558646 110.026 0.488889C110.76 0.567647 111.72 0.232361 112.247 0.916435C115.856 5.41017 119.446 9.92191 123.05 14.4224C123.075 9.8409 122.999 5.2549 123.086 0.677909C123.147 0.637405 123.264 0.556396 123.325 0.515892C124.356 0.468637 125.395 0.473137 126.428 0.511391C126.894 0.49789 126.743 1.06945 126.784 1.35748C126.745 7.67166 126.842 13.9881 126.736 20.2978C125.667 20.3945 124.594 20.354 123.523 20.3473C123.118 20.381 122.805 20.111 122.58 19.8117C119.014 15.3495 115.456 10.8828 111.88 6.42728C111.853 9.18833 111.928 11.9516 111.842 14.7104C111.538 14.6272 111.315 14.4224 111.138 14.1771C110.251 13.034 109.326 11.9201 108.435 10.7792C108.053 10.3472 108.161 9.74414 108.14 9.21533C108.185 6.35977 108.075 3.49971 108.194 0.648656Z" fill="#666FE4" />
                    <path d="M129.423 0.684097C129.621 0.42532 129.99 0.51758 130.274 0.481576C133.951 0.490577 137.628 0.492827 141.304 0.481576C141.867 0.533332 142.551 0.339811 143.024 0.735853C143.863 1.64045 144.588 2.6508 145.362 3.61165V4.02345C143.141 4.03695 140.92 4.0212 138.699 4.03245C138.676 9.46001 138.766 14.8876 138.672 20.3129C137.452 20.3647 136.228 20.3894 135.011 20.2971C134.945 14.8763 134.993 9.45326 134.966 4.0302C133.186 3.99644 131.401 4.08645 129.626 3.99419C129.574 3.94244 129.473 3.84118 129.423 3.78942C129.347 2.75881 129.356 1.7147 129.423 0.684097Z" fill="#666FE4" />
                </svg>,
            type: Games.valorant
        },
        [Games.lol]: {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 600 229.42">
                    <g fill="#c79b3b">
                        <path d="m566.8 164.82c-10.2-2.6-19-4.8-19-13.2 0-6.6 5-10.8 13-10.8 7.4-0.4 14.2 4.6 15.6 12l20-9.6c-5.4-13.2-18.4-21.2-35-21.2-21.6 0-36.6 13.2-36.6 32 0 23 16.6 27.4 31.4 31.2 10.4 2.6 19.2 5 19.2 13.6 0 7.2-5.8 11.8-14.6 11.8s-16.2-4.8-18.2-12l-20 9.6c5.6 13.2 19.8 21.2 37.4 21.2 23.4 0 38.4-13 38.4-33.4 0-23.2-17.6-27.6-31.6-31.2z" />
                        <path d="m600 29.019v10.6h-17v10h14.8l-2.8 10.2h-12v15.8h-11.6v-46.6z" />
                        <path d="m542.2 39.819c7.2 0 13 5.8 13 13s-5.8 13-13 13-13-5.8-13-13 5.8-13 13-13zm0 37.2c13.4 0 24.2-11 24.2-24.4s-11-24.2-24.4-24.2-24.2 11-24.2 24.2c0 13.6 11 24.6 24.4 24.4z" />
                        <path d="m329 226.42h21.6v-68.2l49 68.2h22.6v-103.8h-21.8v69.2l-48.4-69.2h-28l5 10.2z" />
                        <path d="m495.4 186.82c-3 7.4-9 13.2-16.2 16.4-3.8 1.6-7.8 2.4-12 2.4h-12.4v-62h12.4c4.2 0 8.2 0.8 12 2.4 7.4 3 13.2 9 16.2 16.4 3.2 8 3.2 16.6 0 24.4zm-7.2-60c-6.6-2.6-13.6-4-20.6-4.4h-35.4v103.8h35.4c14 0 27.4-5.2 37.6-14.8 4.8-4.6 8.8-10.2 11.4-16.4 8.6-19.6 4-42.4-11.4-57.2-5-4.6-10.6-8.4-17-11z" />
                        <path d="m138.4 226.42h-61.8v-103.8h61.8v20.2h-39.2v21h35.8l-5.4 19.6h-30.4v22.8l39.2 0.2z" />
                        <path d="m279.6 142.82h39.2v-20.2h-61.6v103.8h61.6v-20l-39.2-0.2v-22.8h30.4l5.4-19.6h-35.8z" />
                        <path d="m358 82.019c-2-5.8-3-11.8-2.8-17.8l0.40002-64h22.4l-0.1999 63c0 7 1.6 12.6 4.8 16.6 7.6 8 20.4 8.2 28.2 0.4l0.4-0.4c3.4-4 5-9.6 5-16.6l0.2001-63.2h22.8l-0.40002 64.6c0 6-0.79999 12-2.8 17.8-1.8 5-4.8 9.6-8.4 13.6-3.8 3.8-8.2 6.8-13.2 8.6-11.4 4-23.8 4-35.2-0.2001-5-2-9.4-4.8-13-8.8-3.6-3.8-6.4-8.4-8.2-13.6z" />
                        <path d="m245.6 74.019c-2.8-6.6-4.2-13.8-4.2-20.8 0-7.2 1.6-14.2 4.4-20.8 2.8-6.4 6.8-12.2 11.8-17 5-5 11-8.8 17.4-11.4 6.6-2.8 13.8-4.2 21.2-4 9.8-0.20011 19.6 2.4 28.2 7.2 8 4.6 14.6 11.4 18.8 19.8l-20.4 9.6c-2.4-4.8-6.2-8.8-10.8-11.6-4.8-2.8-10.4-4-16-4-4.2 0-8.6 0.80001-12.4 2.4-3.8 1.6-7.2 4-10 7-3 3-5.2 6.6-6.8 10.4-3.4 8.2-3.4 17.2-0.2 25.4 3 7.8 9.2 14.2 16.8 17.6 4 1.8 8.2 2.8 12.6 2.6 6.4 0.2001 12.8-1.8 18-5.4 4.8-3.4 8.2-8.6 9.6-14.4h-37l9.2-18.8h51.6c0.2001 4 0 12.6-0.2001 14.4-0.6 4.8-1.8 9.6-3.6 14.2-5 12.4-14.8 22-27.2 27-20.4 8.2-43.6 3.4-59.2-12.2-5-5-8.8-10.8-11.6-17.2z" />
                        <path d="m5.2 93.619v-82.6l-5.2-10.8h27.6v83.8h41.4l-5.8 20.4h-63.2z" />
                        <path d="m5.2 215.62v-82.6l-5.2-10.8h27.6v83.8h41.4l-5.8 20.4h-63.2z" />
                        <path d="m138.4 104.42h-61.8v-103.8h61.8v20.2h-39.2v21h35.8l-5.4 19.6h-30.4v22.6l39.2 0.2001z" />
                        <path d="m510.8 104.42h-61.6v-103.8h61.8v20.2h-39.2v21h35.8l-5.4 19.6h-30.4v22.6l39.2 0.2001v20.2z" />
                        <path d="m197.6 29.419 13 35h-26.6zm-29 75 7.8-20.2h41.6l8 20.2h23.4l-41.8-104.2h-32l6.8 13.6-36.8 90.6z" />
                        <path d="m185.2 228.02c3.8 0.8 7.6 1.2 11.6 1.2 7 0.2 14-1.2 20.6-3.8 12.4-5 22.2-14.6 27.2-27 1.8-4.6 3-9.4 3.6-14.2 0.4-4.8 0.4-9.6 0.2-14.6h-51.6v0.2l-9.2 18.8h36.8c-1.4 5.8-4.8 11-9.6 14.4-5.2 3.8-11.4 5.6-17.8 5.4-2 0-3.8-0.2-5.8-0.6l-4.6-1.2c-0.8-0.19999-1.4-0.6-2.2-0.8-7.6-3.4-13.8-9.6-16.8-17.6-3.2-8.2-3.2-17.4 0.19999-25.6 1.6-3.8 4-7.4 6.8-10.4s6.4-5.2 10.2-6.8c4-1.6 8.2-2.4 12.4-2.4 5.6-0.2 11.2 1.2 16 4 4.6 2.8 8.4 6.8 10.8 11.6l20.4-9.6c-4.2-8.4-10.6-15.2-18.8-19.8-8.6-4.8-18.2-7.2-28.2-7.2-14.4-0.2-28.2 5.4-38.6 15.6-5 4.8-9 10.6-11.8 17-5.8 13.2-5.8 28.4-0.2 41.6 2.8 6.4 6.6 12.2 11.4 17.2 4.4 4.4 9.6 8 15.2 10.8 3.9333 1.7718 7.8667 3.2094 11.8 3.8z" />
                    </g>
                </svg>,
            type: Games.lol
        },
    },
    list: [Games.fortnite, Games.valorant],
}
function changePopupType(type: string, changeFuction: Function, event: MouseEvent<HTMLAnchorElement>): void {
    event.preventDefault()
    changeFuction(type)
}
// TODO identify history type
const Header = ({ toggleMenu, handleAuthentication }: { toggleMenu: Function, handleAuthentication: Function }) => {
    const { isAuthenticated, currentGame, dispatchGlobStateAction } = useContext(GlobalState)

    // @todo change to reducer
    const [isPopupShown, togglePopup] = useState<boolean>(false)
    const [popupType, setPopupType] = useState<PopupType>('login')

    let component: JSX.Element = <></>

    let location = useLocation()
    let history = useHistory()

    const isItGameHome = ['/valorant/', '/valorant', '/fortnite/', '/fortnite', '/lol/', '/lol'].includes(location.pathname)
    let search: JSX.Element = <div className="other__search relative dummy"></div>

    let urlToRedirect = `/${currentGame}/`
    let dropdownMenu: JSX.Element = <></>

    if (location.pathname !== '/') {
        dropdownMenu = <DropdownMenu currentlySet={games.dic[currentGame]} list={games.list.map((game: Games) => games.dic[game])} passCurrentValue={handleGameChange} />
        search = <Search currentGame={currentGame} />
    }

    if (isItGameHome) {
        search = <div className="other__search relative dummy"></div>
    }

    // TODO may be
    switch (popupType) {
        case 'registration':
            component = <Registration togglePopup={togglePopup} setAuthenticated={handleAuthentication} />
            break
        default:
            component = <Login setPopupType={setPopupType} togglePopup={togglePopup} setAuthenticated={handleAuthentication}>
                <p className="text-black">Not registered? <a href="#" onClick={changePopupType.bind(null, 'registration', setPopupType)}>Sign Up Here!</a></p>
            </Login>
    }
    function changeHistory(url: string) {
        history.push(url)
    }
    function handleGameChange(game: Games) {

        urlToRedirect = '/'
        if (Games[game] != null && game !== currentGame) {

            urlToRedirect = `/${game}/`

            changeHistory(urlToRedirect)

            dispatchGlobStateAction({ type: ActionTypes.setCurentGame, payload: game })
        }
    }
    return (
        <>
            <header className={`w-full p-6 header bg-primary-900 lg:p-0 lg:h-auto${isItGameHome || location.pathname === '/' ? ' no_search_bar' : ''}`}>
                <div className="flex-grow mb-4 md:mb-0 logo_container lg:mb-0">
                    <Link to={urlToRedirect} className="flex items-center lg:h-full lg:px-8">
                        <Logo />
                    </Link>
                    <button className="expand-collapse" onClick={() => toggleMenu((showMenu: boolean) => !showMenu)}>
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 13.9495L8.08426 15.8333L-3.46049e-07 7.91667L8.08426 -8.37396e-08L10 1.88381L3.83943 7.91667L10 13.9495Z" fill="#666FE4" />
                        </svg>
                    </button>
                </div>
                <div className="lg:bg-white header__side">
                    {dropdownMenu}
                    {search}
                    <div className="header__side__login_reg">
                        {!isAuthenticated &&
                            <RegistrationButton togglePopup={togglePopup} setPopupType={setPopupType} />}
                        <LoginLogoutButton isAuthenticated={isAuthenticated} setAuthenticated={handleAuthentication} togglePopup={togglePopup} />
                    </div>
                </div>
            </header>
            {isPopupShown &&
                <Popup togglePopup={togglePopup} setPopupType={setPopupType}>
                    {component}
                </Popup>
            }
        </>
    )
}

export default Header