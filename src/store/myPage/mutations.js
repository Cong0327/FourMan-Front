import {
   // 마이페이지 내 정보 관련
   REQUEST_MY_INFO_TO_SPRING,

    //나의게시판 관련
    REQUEST_MY_FREE_BOARD_LIST_TO_SPRING,

    //나의 질문게시판 관련
    REQUEST_MY_QUESTION_BOARD_LIST_TO_SPRING,

    //나의 리뷰게시판 관련
    REQUEST_MY_REVIEW_BOARD_LIST_TO_SPRING,
 } from './mutation-types'

 export default {

   // 마이페이지 내 정보 관련
   [REQUEST_MY_INFO_TO_SPRING] (state, passingData) {
      state.myInfo = passingData
   },

   //나의 게시판 관련
   [REQUEST_MY_FREE_BOARD_LIST_TO_SPRING] (state, passingData) {
    state.myFreeBoards = passingData
  },

  //나의 질문 게시판 관련
  [REQUEST_MY_QUESTION_BOARD_LIST_TO_SPRING] (state, passingData) {
     state.myQuestionBoards = passingData
  },

  //나의 리뷰게시판 관련
  [REQUEST_MY_REVIEW_BOARD_LIST_TO_SPRING] (state, passingData) {
      state.myReviewBoards = passingData
  },


 }