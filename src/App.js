

function App() {
  return (
    <div>
      <h1>hello react</h1>
        <h2>HI REACT</h2>
        <MyComp />
    </div>
  );
}
// built-in component
// component 명은 대문자로 시작해야함.
// return문을 가져야함
// return값은 보통 JSX코드
function MyComp() {
    // return에 jsx코드 작성 가능
    // 꼭 하나의 root tag가 존재해야함
    // return 값이 여러 줄이면 ()로 감싸기
    // root tag가 필요없다면 fragment 사용 가능
    // jsx에서 주석 사용법
    // {/* */}
    return (
        <>
            <h1>Hi Component</h1>
            <h2>hello</h2>
        </>
    )
}

export default App;
