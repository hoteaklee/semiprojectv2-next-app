
const getStpgns = (cpg, alpg) => {
    let stpgns = [];
    let stpgn = parseInt(( cpg -1 ) / 10 )*10 +1; //페이지네이션 시작값 계산
    for (let i = stpgn; i < stpgn + 10; ++i){
        if (i <= alpg){  // i가 총페이지수보다 같거나 작으르때 i 출력
            let iscpg = (i == cpg) ? true : false;  // 현재페이지 표시
            let pgn = {'num': i, 'iscpg': iscpg };
            stpgns.push(pgn);
        }
    }
    return stpgns;
}

const getPgns = (cpg, alpg) => {
    let isprev = (cpg - 1 > 0); //  이전 버튼 표시 여부 (cpg - 1 > 0) ? true: false; 0보다 크면 트루, 아니면 페일
    let isnext = (cpg  < alpg); // 다음 버튼 표시 여부
    let isprev10 =(cpg - 10 > 0);
    let isnext10 =(cpg +10  < alpg );

    let pgn = {'prev': cpg -1, 'next': cpg + 1, // 이전: 현재페이지 -1, 다음: 현재페이지 +1
        'prev10': cpg - 10, 'next10': cpg + 10,
        'isprev': isprev ,'isnext': isnext,
        'isprev10': isprev10 ,'isnext10': isnext10};

        return pgn;
}

export async function getServerSideProps(ctx) {
    let [cpg, ftype, fkey] = [ctx.query.cpg, ctx.query.ftype, ctx.query.fkey];

    cpg = cpg ? parseInt(cpg) : 1;
    let params = `cpg=${cpg}`;  // 질의문자열 생성
    let url = `http://localhost:3000/api/board/list?${params}`

    const res = await fetch(url);
    const boards = await res.json();

    let alpg = Math.ceil(parseInt(boards.allcnt) / 25) //총페이지 수, Math.ceil 무조건 올림

    // 페이지 네이션 처리 1
    let stpgns = getStpgns(cpg, alpg)

    // 페이지 네이션 처리 2
    let pgn = getPgns(cpg, alpg);

    // 처리 결과를 boards 객체에 추가
    boards.stpgns = stpgns;
    boards.pgn = pgn;

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
                {boards.boards.map(bd => (
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

                {boards.stpgns.map(pgn => (
                    // 사망 연사자 (조건) ? 참 : 거짓
                    pgn.iscpg ?
                    <li key={pgn.num} className='cpage'>{pgn.num}</li> :
                    <li key={pgn.num}><a href={`?cpg=${pgn.num}`}>{pgn.num}</a></li>
                ))}

                <li>다음</li>
            </ul>
        </main>
    );
}
