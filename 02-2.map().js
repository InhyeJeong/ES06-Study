var comments = [
    { id: 3, content: '굿 모닝' },
    { id: 6, content: '좋은 아침이네요' },
    { id: 10, content: '아침에는 시원한 물 한잔' }];

//  특정원소로 이루어진 함수를 만들고 싶을 때
var idx = comments.map( comment => {
    return comment.id;
});