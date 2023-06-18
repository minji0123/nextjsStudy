'use client'
export default function Cart() {
    let 장바구니 = ['Tomatoes','Pasta'];
    return (
        <div>
            <h4 className="title">Cart</h4>

{
    장바구니.map((a,i)=>{
        console.log(a);
        return(
            <CartItem 상품명={a} />
        )

    })
}
        </div>
    )
} 


function CartItem(props){
    return(
        <div className="cart-item">
            <p>상품명 {props.상품명}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}

/*
next js 컴포넌트는 종류가 두개임
1. server component
2. client component


파일 맨 위에 'use client' 넣으면 됨
그 외의 것들은 전부 다 server comopnent

1. server component
html 에 js 기능넣기 불가능
onClick 못씀... useState, useEffect 도 못씀
근데 빠름
큰 페이지는 서버로 
2. client component
근데 여기서는 쓸수있음
큰 페이지 안의 작은 기능들은 클라로 (버튼, 모달 등등)

*/
/**
 * deduplication
 * next js 에서는
    부모 > 자식 에서
    똑같은 데이터 요청이 여러개면
    1개로 압축해줌
 */