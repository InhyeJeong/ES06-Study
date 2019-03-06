var datas = [
    { id: 3, type: 'comment', content: '굿 모닝'},
    { id: 6, type: 'post', content: '좋은 아침이네요' },
    { id: 10, type: 'comment' ,content: '아침에는 시원한 물 한잔' },
    { id: 6, type: 'post', content: '공부하기 싫어요' }];

var filteredData = [];

//  loop
for(var i = 0 ; i < datas.length ; i++){
    if (datas[i].type === 'post'){
        filteredData.push(datas[i]);
    }
}

//  filter()이용
var filteredData = datas.filter( data => {
    return data.type === 'post';
});