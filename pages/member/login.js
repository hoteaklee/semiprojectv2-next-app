const Login = () => {
    return (
        <div>
            <h2>로그인</h2>
            <form name="login">
                <div><label htmlFor="uid">아이디</label>
                    <input type="text" name="uid" id="uid" /></div>
                <div><label htmlFor="pwd">비밀번호</label>
                    <input type="password" name="pwd" id="pwd" /></div>
                <div><label></label>
                    <button type="button">로그인</button>
                </div>
            </form>
        </div>
    );
};

export default Login;