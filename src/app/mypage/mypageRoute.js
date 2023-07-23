module.exports = function (app) {
  const jwtMiddleware = require('../../../config/jwtMiddleware');
  const mypage = require("./mypageController");
    
  //4. 비밀번호 변경 API
  app.post('/mypages/password', jwtMiddleware, mypage.patchPassword);    

  //11. 내 레시피 조회 API
  app.get('/mypages/myrecipe', jwtMiddleware, mypage.GetMyRecipes);      
  
  // //9. 찜한 레시피 조회
  // app.post("/mypage/favorite", mypage.);
     
};