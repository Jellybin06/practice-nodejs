const { on } = require('events');
var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(request,response){
    // post로 전달된 데이터를 담을 변수를 선언
    var postdata = '';
    // request객체에 on() 함수로 'data' 이벤트를 연결
    request.on('data', function(data){
        // data 이벤트가 발생할 때마다 callback을 통해 postdata변수에 값을 저장
        postdata = postdata + data;
    });

    // request 객체에 on() 함수로 'end' 이벤트를 연결
    request.on('end', function(){
        // end 이벤트가 발생하면 (end는 한번만 발생한다) 3번에서 저장해둔 postdata를 querystring 으로 객체화
        var parsedQuery = querystring.parse(postdata);
        // 객체화된 데이터를 로그로 출력
        console.log(parsedQuery);
        // 성공 HEADER 와 데이터를 담아서 클라이언트에 응답처리
        response.writeHead(200, {'Content-type':'text/html'});
        response.end('var1의 값 = ' + result);
    });
});

server.listen(8080, function(){
    console.log('Server is running...');
});