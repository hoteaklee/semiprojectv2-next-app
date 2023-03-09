
export async function getServerSideProps(ctx) {
    const res = await fetch('http://localhost:3000/api/board/list');
    const boards = await res.json();

    return { props : {boards} }
}

export default function List( {boards} ) {
    return (
        <main>
            <h2>게시판</h2>
            <table className="board">
                <colgroup>{/*각 컬럼에 디자인 적용*/}
                    <col style={{width: '10%'}} />
                    <col />
                    <col style={{width: '15%'}} />
                    <col style={{width: '15%'}} />
                    <col style={{width: '10%'}} />
                </colgroup>
                <tbody>
                <tr>
                    <td colSpan="5" className="alignrgt">
                        <button type="button">새글쓰기</button>
                    </td>
                </tr>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회</th>
                </tr>
                {boards.map(bd => (
                    <tr key={bd.bno}>
                        <td>{bd.bno}</td>
                        <td>{bd.title}</td>
                        <td>{bd.userid}</td>
                        <td>{bd.regdate}</td>
                        <td>{bd.views}</td>
                    </tr>
                ))}


                </tbody>
            </table>

            <ul className="pagenation">
                <li className="prev">이전</li>
                <li className="cpage">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>다음</li>
            </ul>
        </main>
    );
}
