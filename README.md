JS - JavaScript \_ STUDY

1. Execution Context 란?
   자바스크립트 코드가 실행되고 연산 되는 범위를 나타내는 추상적인 개념.
   우리가 코드를 작성하고 실행한다면 실행 컨텍스트(Execution Context) 내부에서
   실행되고 있는 것입니다. 즉, 코드들이 실행되기 위한 환경이자 하나의 박스이자
   컨테이너라 볼 수 있습니다.
   << Execution Context의 3가지 객체 >>

- 실행 컨텍스트는 실행 가능한 코드를 형상화하고 구분하는 추상적인 개념이지만 물리적으로는 객체의 형태를 가지면 3가지 프로퍼티를 소유한다.

-. Variable Object(변수 객체) 실행 컨텍스트가 생성이되면 위에서 말했듯이 자바스크립트 엔진은 실행에 필요한 정보들이 있기때문에 정보들을 담을 객체를 생성한다.

1. variable
2. parameter 와 arguments
3. 함수 선언(표현식 제외)
4. Variable Object는 실행 컨텍스트의 프로퍼티이기 때문에 값을 갖는데 전역 코드에서 생성되는 Global Context와 함수가 호출 될 때 생성되는 Functional Context의 경우 값들이 가리키는 객체가 다르다. 왜냐 하면 Function Context에는 parameter 와 arguments가 들어 있기 때문에 벌어지는 차이점이다.

-. Scope Chain 스코프 체인(Scope Chain)은 리스트라고 생각하면 된다. 전역 객체와 함수의 스코프의 레퍼런스를 저장하고 있다. 스코프 체인은 실행 컨텍스트가 참조할 수 있는 변수, 함수 선언 등의 정보를 담고 있는 리스트를 가리킨다. 자바스크립트 엔진은 스코프 체인을 통해 렉시컬 스코프를 파악한다. 상위 함수, 전역 스코프등을 참조할 수 있는 이유가 스코프 체인이 검색을 하기 때문이다. (하위 > 상위 > 전역) 참조에 실패한다면 스코프 체인에 담겨진 순서대로 계속해서 이어간다. 검색에 실패하게 된다면 정의되지 않은 변수에 접근하는 것이기 때문에 에러를 발생시킨다.
-. this value this 프로퍼티는 this 값이 할당되는데 할당되는 값은 this의 5가지

1. global
2. functionInvocation
3. call,apply,bind
4. Construction
5. MethodInvocation
   등의 패턴으로 결정된다.

6. 자바스크립트 코드 실행에 필요한 정보

1 변수 :: 전역 변수, 지역 변수, 매개 변수, 객체의 프로퍼티
2 함수 선언
3 변수의 유효범위
4 This

3. 호이스팅과 let 과 const의 차이
   JS엔진이 코드를 실행할 때 코드 평가와 코드 실행의 단계를 거치고요. 코드 실행에선 실행 컨텍스트를 만들면서 선언문을 렉시컬 환경에 등록합니다. 이처럼 미리 등록되기 때문에 호이스팅이라는 특성이 생기는데요.
   문제는 선언문이면 다 코드 평가 단계에서 등록이 된다면서 왜 let과 const는 사용이 불가능하냐! 인 거죠
   그 이유는 처리하는 과정이 다르기 때문인데요. 바로 초기화하는 시점이 다릅니다. var의 경우에는 렉시컬 환경에 등록됨과 동시에 undefined로 설정이 되어 어디서든 사용이 가능한 반면에, let과 const는 등록만 되었을 뿐 그 어떤 초기화도 실행되지 않습니다.
   let과 const의 초기화는 선언문을 만날 때까지 미루어지는데요. 그래서 코드가 실행되고 선언문을 만나기 전까지 일시적으로 사용할 수 없는 TDZ가 생기는겁니다.

4. This binding
   this 의 값 할당이 여기서 결정됩니다. 전역 실행 컨텍스트(Global Execution Context)에서 this 는 전역객체 입니다( window ).
   함수 실행 컨텍스트에서의 값은 this 함수가 호출되는 방식에 따라 다른데 함수가 객체 참조에 의해서 호출되면 해당 객체로 설정되고 그렇지 않을 경우 전역 객체( window )를 가리키거나 strict mode 에서는 undefined를 가리킵니다.

this 란?? 무엇일까??
기존의 function 과 다른 점은 this 바인드 방식이다. 다음 예제를 보자.
var relationship1 = {
name: 'zero',
friends: ['nero','hero','xero'],
logFriends: function(){
var that = this;
this.friends.forEach(function(friend){
console.log(that.name, friend);
});
},
};
relationship1.logFriends();

const relationship2 = {
name: 'zero',
friends: ['nero','hero','xero'],
logFriends(){
this.friends.forEach(friend => {
console.log(this.name, friend);
});
},
};
relartionship2.logFriends();

relationship1.logFriends() 안의 forEach 문에서는 function 선언문을 사용했다. 각자 다른 함수 스코프의 this 를 가지므로 that이라는 변수를 사용해서 relationchip1에 간접적으로 접근하고 있다.
하지만 , relationship2.logfriends() 안의 forEach 문에서는 화살표 함수를 사용했다. 따라서 바깥 스코프인 logFriends() 의 this 를 그대로 사용할 수 있다. 상위 스코프의 this 를 그대로 물려받는 것이다.
따라서 기본적으로 화살표 함수를 쓰되, this를 사용해야 하는 경우에는 화살표 함수와 함수 선언문(function) 둘중에 하나를 고르면 된다.

5. 프로토타입 ( prototype )
   프로토타입은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체이다.
   프로토타입은 하위(자식) 객체에게 자신의 프로퍼티와 메서드를 상속한다.
   프로토타입 객체의 프로퍼티나 메서드를 상속받은 하위 객체는 자신의 프로퍼티
   또는 메서드인 것처럼 자유롭게 사용할 수 있다.
   프로토타입 체인은 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는 상속 구조를 말한다.
   객체의 프로퍼티나 메서드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메서드가 없다면 프로토타입 체인을 따라 프로토타입의 프로퍼티나 메서드를 차례대로 검색한다.

6. 프로퍼티 란?
   새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나, 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것을 말한다.
   예를 들어, 프로퍼티 값을 갱신 가능하도록 할 것인지,
   프로퍼티를 열거 가능하도록 할 것인지, 프로퍼티를 재정의 가능하도록 할 것인 것 정의할 수 있다.
   이를 통해 객체의 프로퍼티가 어떻게 동작해야 하는지를 명확히 정의할 수 있다.

7. 객체 변경 방지하기
   객체는 변경 가능한 값이므로 재할당 없이 직접 변경을 할 수 있다.
   즉, 프로퍼티를 추가하거나 삭제할 수 있고, 프로퍼티 값을 갱신할 수 있다.
   Object.defineProperty 또는 Object.definePfoperties 메서드를 사용하여 프로퍼티 어트리뷰트를 재정의할 수도 있다.
   자바스크립트는 객체의 변경을 방지하는 다양한 메서드를 제공한다.
   객체 변경 방지 메서드들은 객체의 변경을 금지하는 강도가 다르다. \*객체 확장 금지
   Object.preventExtensions 메서드는 객체의 확장을 금지한다.
   객체 확장 금지 란? 프로퍼티 추가 금지를 의미한다.
   즉, 확장이 금지된 객체는 프로퍼티 추가가 금지된다.
   프로퍼티는 프로퍼티 동적 추가와 Object.defineProperty메서드로 추가할 수 있다.
   이 두가지 추가 방법이 모두 금지 된다.
   확장이 가능한 객체인지 여부는 Object.isExtensible 메서드로 확인할 수 있다.
   하지만 삭제는 가능하다.

8. 생성자 함수
   생성자 함수 란?
   New 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 호출한다. 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.
   New 연산자와 함께 호출하여 객체 ( 인스턴스 ) 를 생성하는 함수를 말한다.
   이때 , 인스턴스는 생성자 함수에 의해 생성된 객체를 인스턴스라 한다.
   자바스크립트는 object 생성자 함수 이외에도
   String, Number, Boolean, Function, Array, Date, RegExp, promise 등의
   빌트인 ( built-in ) 생성자 함수를 제공한다.
   New 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 호출한다. 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.

9. 생성자 함수에 의한 객체 생성 방식의 장점
   생성자 함수에 의한 객체 생성 방식은 마치 객체 ( 인스턴스 ) 를 생성하기 위한 템플릿 ( 클래스 )처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

10. 객체 리터럴
    객체 리터럴에 의한 객체 생성 방식은 직관적이고 간편하다.
    하지만 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다.
    따라서 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우
    매번 같은 프로퍼티를 기술해야 하기 때문에 비효율적이다.

3월 21일 화요일... 퇴근을 마치며, 오늘 하루도 고생많았어

11. this의 매핑
    class Sample {
    constructor(a,b) {
    this.a = a
    this.b = b
    }
    };
    Sample 클래스 안의 인스턴스에서 발생한 a,b만 this로 매핑해주어라는 뜻이다.
    this.a = a(인자로 받은 a를 인스턴스 내부에 주입)
    좋은 비유를 하자면??
    --- 글로벌에는 김과장 과 송대리 가 매우 많을텐데 회사 자체 내에서는 김과장과 송대리를
    this.김과장 = 김과장  
    this.송대리 = 송대리
    이렇게 매핑하는 것이다.

여기서 인스턴스는 회사가 될 수도 있고, 회사 내의 팀이 될수도 있고,
인스턴스 안에 인스턴스가 존재할 수 도 있기 떄문에 선언된 곳 나름이다.

---

1. 리액트는 컴포넌트와 함께 동작하고 컴포넌트로 구성된다.
   컴포넌트는 어떻게 만들까? -> JSX라는 문법을 사용해서 만들고 JSX는 HTML 과 javascript를 조합한 것.
2. props 는 컴포넌트로 넘어가는 매개변수를 말한다.
   간단히 말하자면 컴포넌트에서 컴포넌트로 넘어가는 데이터.

---

1. 새로 작성한 뒤, README.md 파일 저장.
2. - 버튼 클릭
3. commit & push 클릭

---

// DOMContentLoaded 이벤트는 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생합니다.
스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않습니다. -> MDN
defer 랑 같이보면 좋음

// Dom 이 먼저 그려지기 위한 코드,
Dom을 먼저 그리고 자바스크립트 태그를 그 다음에 실행한다.
document.addEventListener("DOMContentLoaded", () => {

// 전일, 당일, 일주일 라디오 버튼을 통해 값을 변경하도록 함
// input name이 date_option인 값에 대하여 반복문을 돌리고, e 인자 값에 대하여
이벤트 리스너는 radioBtnAction이 'change' 되었을때 실행된다.
document.querySelectorAll(`input[name='date_option']`).forEach((e) => {
e.addEventListener('change', radioBtnAction);
});

// 상세 버튼 클릭시 info 페이지로 distributionDto 데이터를 전송
// class가 '.moreButton' 인 버튼을 클릭 했을 경우 function을 실행한다.
$('.moreButton').on('click', function() {

// 변수 data에 'dto'라는 this 값을 할당해준다.

let data = $(this).data('dto');
// 변수 docid에 'docid'라는 this 값을 할당해준다.
let docid = $(this).data('docid');

// input태그에서 id가 'infoData'를 찾아 value 값을 불러온뒤
JSON.stringify(data)로 재할당 해줌 => json문자열로 변환 시킨다.

document.getElementById('infoData').value = JSON.stringify(data); // input
// input 태그에서 id가 'strDocId' 를 찾아 value 값을 불러온 뒤 docid에 재할당 해준다.
document.getElementById('strDocId').value = docid;
// form 태그에서 id가 'infoForm' 를 찾아 submit 시킨다.
document.getElementById('infoForm').submit(); // form
});

// presentnDateCheck() 함수를 실행한다.

presentnDateCheck();

// class 가 datepicker 인 것을 찾아 datepicker() 함수를 실행한다.
$('.datepicker').datepicker();

//#tableCheckbox 가 클릭됐을때 function이 실행된다.

$("#tableCheckbox").click(function() {

//#tableCheckbox 가 checked 되었을때, input 의 name 이 checkbox 인 것을 찾아서
속성값이 "checked" 되어 있는 것을 true 로 바꾼다.

        if($("#tableCheckbox").is(":checked")) $("input[name=checkbox]").prop("checked", true);

// 아니라면 input 의 name 이 checkbox 인 것을 찾아서
속성 값이 "checked" 되어 있는 것을 false 로 바꾼다.
else $("input[name=checkbox]").prop("checked", false);
});

// input name 이 checkbox 인 버튼이 클릭 되었을 때 function이 실행된다.

$("input[name=checkbox]").click(function() {

// 변수 total 에 input 의 name 이 checkbox 인 것을 찾아 length 값을 할당해준다.
var total = $("input[name=checkbox]").length;

// 변수 chechked 에 input 의 name 이 checkbox 인 것 중에 checked 되어 있는 것만 찾아
length 값을 할당해준다.

var checked = $("input[name=checkbox]:checked").length;

// 만약 total 값과 checked 값이 같지 않을 경우 #tableCheckbox 의 속성 값이
"checked" 되어 있는 것을 false로 바꾼다.

if(total != checked) $("#tableCheckbox").prop("checked", false);

// 아니라면 #tableCheckbox 의 속성의 checked 를 true 로 바꾼다.

else $("#tableCheckbox").prop("checked", true);
});

// form태그 에서 id가 searchForm 인 것을 찾아서 이벤트리스너를 실행하고,
submit 되었을때 formSubmitEvent 함수를 실행한다.

document.getElementById('searchForm').addEventListener('submit', formSubmitEvent);

// form태그 에서 id가 beforeSearchForm 인 것을 찾아서 이벤트리스너를 실행하고,
submit 되었을때 formSubmitEvent 함수를 실행한다.

document.getElementById('beforeSearchForm').addEventListener('submit', formSubmitEvent);
});

// 위에서 말한 formSubmitEvent 에 대한 함수가 실행된다.

const formSubmitEvent = (e) => {

// preventDefault : 어떤 이벤트를 명시적으로 처리하지 않은 경우,
해당 이벤트에 대한 기본 동작을 실행하지 않도록 지정한다.

e.preventDefault();

// formData 변수에 FormData instance 를 생성해주면서 e.target 을 초기값으로 세팅해줌
const formData = new FormData(e.target);

// condition 변수에 키값 쌍의 목록을 객체로 바꾸면서 formData를 초기값으로 세팅해줌.

const condition = Object.fromEntries(formData);

// true일시 alert 창이 뜨면서 유효성 검사를 한다. false이면 함수가 멈춤.
if (checkPinNoWithPresentnNm(e.target.id)) {
alert('문서열람번호로 검색시, 제출자명을 필수입니다.');
return;
}

    // 생년월일 입력값 유효성 검증 => true일시 비정상 입력

// true일시 alert 창이 뜨면서 유효성 검사를 한다. false이면 함수가 멈춤.
if (checkBirthDeInput(e.target.id)) {
alert(`올바른 생년월일 일자를 입력해주세요.`);
return;
}

    // 전자지갑주소 입력값 유효성 검증

// true일시 alert 창이 뜨면서 유효성 검사를 한다. false이면 함수가 멈춤.
if (document.getElementById('ecdwAdres').value == '') {
alert('전자지갑주소를 선택해주세요.');
return;
}

    ////////////////////////// 유효성 검증 통과 ////////////////////////////

    /* 제출일자 (시작일자, 종료일자)의 값에 대해 - 제거 */

// ['presentnBgnde', 'presentnEndde'] 이 배열에 대한 반복문 시작.

['presentnBgnde', 'presentnEndde'].forEach(str => {
// 변수 beforeDate 에 ${e.target.id} ${str} 두 값의 value 값을 불러와 할당해준다.
        let beforeDate = document.querySelector(`#${e.target.id} input[name='${str}']`).value;

// input name 이 str인 것의 value 값에 재할당 해준다. 무엇을?
beforeDate 에 있는 - 를 아무것도 없는 것으로 바꿔준것으로!

        document.querySelector(`#${e.target.id} input[name='${str}']`).value = beforeDate.replaceAll('-', '');

});

     /* 요청 전송 전 검색조건 쿠키 저장 */
     //set key: conditions, value: condition, timer: 1 이런식의 문법

    setCookie('search_conditions', JSON.stringify(condition), 1);
    /* 요청 전송 전 스피너 실행 */
    spinnerPopup(true);

// e.tartget을 submit 시킴

e.target.submit();
}

// presentnDateCheck 함수 실행

const presentnDateCheck = () => {

// 변수 presentnBgnde 은 input 태그의 id 가 presentnBgnde 인 value 값을 할당 해 준다.

let presentnBgnde = document.getElementById('presentnBgnde').value;

// 변수 presentnEndde 은 input 태그의 id 가 presentnEndde 인 value 값을 할당 해 준다.

let presentnEndde = document.getElementById('presentnEndde').value;

// 변수 today 는 new Date 로 초기화 시켜준 뒤 toISOString 메서드 실행한 뒤

문자열을 0 부터 10 까지 잘라준다.
toISOString() : 단순화한 ISO 형식의 문자열을 반환한다.
ex) YYYY-MM-DDTHH:mm:ss.sssZ

let today = new Date().toISOString().substring(0, 10); // yyyy-MM-dd;

// 만약 presentnBgnde(제출시작일자) length 와 presentnEndde(제출종료일자) 의 length가
0 일 경우 radioBtnAction()함수를(라디오 버튼의 이벤트) 실행.

if (presentnBgnde.length === 0 && presentnEndde.length === 0) {

// 둘 다 비어있을 경우 (라디오버튼 이벤트 처리)

radioBtnAction();

// 아닐 경우, presentnBgnde(제출시작일자) length 가 0이 아니고,

presentnEndde(제출종료일자) length 가 0일때 :

today 를 input id가 presentnEndde인 value 값으로 할당해준다.

} else if (presentnBgnde.length !== 0 && presentnEndde.length === 0) {

// 시작일자만 입력되었을 경우 (종료일자를 오늘로 지정)

document.getElementById('presentnEndde').value = today;

// 그것도 아닐 경우, presentnBgnde.length 가 0 이고, presentnEndde.length 가 0 이 아닐때,

} else if (presentnBgnde.length === 0 && presentnEndde.length !== 0) {

// 종료일자만 입력되었을 경우 (종료일자 하루 전을 지정)

// 변수 yesterday 에 new Date instance 를 생성해주면서
presentnEndde을 초기값으로 세팅해줌.

let yesterday = new Date(presentnEndde);

// yesterday에 yesterday의 getDate()-1 한 값을 저장한다.

yesterday.setDate(yesterday.getDate() - 1);

// id가 presentnBgnde 인 값에 value 값은
yesterday.toISOString().substring(0, 10)으로 할당.
yesterday에 toISOString을 해주고, 그 문자열을 0 부터 10까지 잘라준다.

document.getElementById('presentnBgnde').value = yesterday.toISOString().substring(0, 10);

}
}

// radioBtnAction 함수 실행

const `radioBtnAction` = () => {

// 변수 mode 는 input name이 date_option인 것 중에
checked 되어있는 값의 value 값을 세팅해준다.
let mode = document.querySelector(`input[name='date_option']:checked`)?.value;

// toDay 변수를 new Date로 초기화
let toDay = new Date();

// toDayStr 변수는 toDay 변수에 toISOString한 뒤
문자열을 0 부터 10까지 잘라준 값을 할당.
let toDayStr = toDay.toISOString().substring(0, 10);
// yyyy-MM-dd;

// fromDay 변수에 toDay 할당해줌.
let fromDay = toDay;

// fromDayStr 변수는 빈 문자열.
let fromDayStr = "";

// offset 변수는 0
let offset = 0;

// mode가 undefined 이거나 null 이면 0 으로 값을 대입해줘라
switch(mode ?? '0') {
case '0':

// 전일
offset = 1000 _ 60 _ 60 \* 24; // 1안 : time 계산해서 1일 빼기

// fromDay 는 toDay의 getTime을 구해서 빼기 offset 해주기
fromDay = new Date(toDay.getTime() - offset);

// toDay 도 마찬가지..

toDay = new Date(toDay.getTime() - offset);
// fromDayStr 은 fromDay에 toISOString해준뒤
문자열을 0부터 10까지 잘라준다.
fromDayStr = fromDay.toISOString().substring(0, 10);
// yyyy-MM-dd;

// toDayStr 은 fromDayStr 로 재할당.

toDayStr = fromDayStr;
// 멈춤!
break;

// mode 값이 1 일때.
case '1':

// 당일

fromDayStr = toDayStr; // 오늘 날짜와 동일

break;

case '2':
// 1주일
// @TODO: 1개월 계산 확인 필요
offset = 1000 _ 60 _ 60 _ 24 _ 6; // 1안 : time 계산해서 1주일 빼기 (7일 텀 고정)
fromDay = new Date(toDay.getTime() - offset);
// fromDay.setWeek(fromDay.getWeek() - 1); // 2안 : getWeek에서 1주일 빼기

            fromDayStr = fromDay.toISOString().substring(0, 10);   // yyyy-MM-dd;
            // fromDayStr = fromDayStr.match(/\d+/g).join('');  //yyymmdd
            break;
        default:
            alert('정의되지 않은 요청입니다. 다시 시도해주세요.');
            break;
    }

    document.getElementById('presentnBgnde').value = fromDayStr;
    document.getElementById('presentnEndde').value = toDayStr;

    // 위에서 선택된 값에 체크 처리
    document.querySelectorAll(`input[name='date_option']`)[mode ?? '0'].checked = true;

}

4월 1일
