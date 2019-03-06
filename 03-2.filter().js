var datas = [
    { id: 3, type: 'comment', content: '굿 모닝', like: 1},
    { id: 6, type: 'comment', content: '좋은 아침이네요' , like: 5},
    { id: 7, type: 'comment', content: '공부하기 싫어요' , like: 30},
    { id: 10, type: 'comment' ,content: '아침에는 시원한 물 한잔' , like: 10},
    { id: 15, type: 'comment', content: '저는 공부가 좋은데요?' , like: 0},
    { id: 16, type: 'comment', content: '여기 이상한 사람이 있어요' , like: 15}];

var filteredData = [];

//  data에서 like가 5개 이상인 comment만 골라낸다
var filteredData = datas.filter( data => {
    return data.type === 'comment'&& data.like > 5;
});