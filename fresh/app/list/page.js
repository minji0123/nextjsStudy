'use client'

// nuxt 최적화된 이미지 삽입하기
import Image from "next/image"

import food0 from '/public/food0.png';
import food1 from '/public/food1.png';
import food2 from '/public/food2.png';
import { useState } from "react";

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut'];
    let [수량, 수량변경] = useState(0);
    return (
    <div>
        <h2 className="title">Products</h2>
        {
            상품.map((a,i)=>{
                return(
                    // 리턴 안쓰면 읽고만 지나감 당연한건가?
                    // key 쓰는 이유: 비슷한 요소들이 새네번 반복생성이 되면 이 요소들을 구분하기 어려워함 
                    // 그래서 반복생성되는 요소마다 유니크한 값을 넣어주라고 권장함
                <div className="food" key={i}>
                    {/* <Image src={food0} alt="#" className="food-img" width={100} height={100} /> */}
                    <img src={`/food${i}.png`} alt="#"  className="food-img"  />
                    <h4>{a} $40</h4>
                    <span>{수량}</span>
                    <button onClick={()=>{수량변경(수량+1)}}> + </button>
                </div>
                )
            })
        }
    </div>
    )
}
