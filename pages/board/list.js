const List = () => {
    return (
        <div>
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
                <tr>
                    <td>1</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>20</td>
                    <td>시간은 금이라구, 친구!, 진짜라구, 친구, 정말이라구, 친구, 사실이라구, 친구!</td>
                    <td>zzyzzy</td>
                    <td>2022-12-10</td>
                    <td>123</td>
                </tr>
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
        </div>
    );
};

export default List;