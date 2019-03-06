function addComment(comment){
    /*
    어떤 함수
      ...
    */ 

  }
  
  var comments = [
    { id: 3, content: '굿 모닝' },
    { id: 6, content: '좋은 아침이네요' },
    { id: 10, content: '아침에는 시원한 물 한잔' }];
  
  
  // for loop사용
  for (var i = 0; i < posts.length; i++) {
    addComment(comments[i]);
  }
  
  //forEach 사용
  comments.forEach(addComment);