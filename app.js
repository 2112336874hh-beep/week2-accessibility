// Week 3 실습 예시 코드
// 요구사항: 템플릿 리터럴 사용, setInterval 사용, 여러 함수를 만들어 3초마다 다른 소개글이 뜨도록 하기

// 1) 상수(const)와 변수(let)
const NAME = "조의";             // 你的名字，想换就改
const MAJOR = "컴퓨터공학과";     // 你的专业，想换就改
let turn = 0;                    // 当前第几条介绍

// 2) 사용 템플릿 리터럴의 여러 소개 함수
function introBasic() {
  return `안녕하세요, 저는 "Hello, " 조의입니다. 전공은 "Hello, " 컴퓨터공학과 이고, 지금 자바스크립트 기초를 공부하고 있어요.`;
}

function introStudy() {
  const goals = ["템플릿 리터럴", "함수", "콜백", "setInterval"];
  return `이번 주 학습 목표는 ${goals.join(", ")} (총 ${goals.length}개)를 이해하는 것입니다.`;
}

function introFun() {
  // 参考PDF里的 poker chips 思路，做个小计算演示
  const STARTING_POKER_CHIPS = 100;
  let p1 = STARTING_POKER_CHIPS;
  let p2 = STARTING_POKER_CHIPS;
  let p3 = STARTING_POKER_CHIPS;
  p1 -= 50; p2 -= 25; p3 += 75;
  const gameHasEnded = ((p1 + p2) === 0) || ((p2 + p3) === 0) || ((p1 + p3) === 0);
  return `미니 게임 상태: p1=${p1}, p2=${p2}, p3=${p3} → 종료여부=${gameHasEnded}`;
}

// 3) 每 3 秒切换一次显示
const intros = [introBasic, introStudy, introFun];

function renderIntro() {
  const idx = turn % intros.length;  // 0,1,2,0,1,2...
  const text = intros[idx]();        // 执行函数得到字符串
  document.getElementById("title").textContent = `소개 #${idx + 1}`;
  document.getElementById("intro").textContent = text;
  turn += 1;
}

// 先渲染一次
renderIntro();
// 每 3 秒更新
const timerId = setInterval(renderIntro, 3000);

// 可选：在控制台里看 == 与 === 的差异（PDF也讲过）
const a = 0, b = "0";
console.log("a == b ?", a == b);   // true（有类型转换）
console.log("a === b ?", a === b); // false（严格比较）

// 可选：对比 setTimeout（只执行一次）
setTimeout(() => console.log("Hello again! (setTimeout once)"), 2000);
