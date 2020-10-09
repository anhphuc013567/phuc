import React from 'react';


class SignUp extends React.Component {
    render () {
        let style = {
           
        }
        return (
            <form id="form-right" style={style}>
              <div><Top/></div>
              <div><Bottom/></div>
            

            </form>
        )
    }

}

function Top(){
    return(
        <form id="form-top">
            <h1 id="header-top">ĐĂNG KÍ NHẬN BÀI VIẾT MỚI</h1>
            <p className="noidung-top">Công nghệ đang thay đổi nhanh chóng hãy cùng nhau cùng nhau cùng nhau cùng nhau cùng nhau cùng nhau cùng nhau cùng nhau cùng nhau cùng nhau cùng nhau ...</p>
            <div id = "dang-ki">
            <input type="text" placeholder="TÊN CỦA BẠN"></input>
            <input type="text" placeholder="EMAIL CỦA BẠN"></input>
            <input className="checkbox" type="checkbox" />
            <label>Tôi đồng ý với các điều khoản trên</label>
            </div>
            <button id="btndangky">ĐĂNG KÝ</button>
            <p className="noidung-top">Bạn sẽ nhận được một email thông báo khi có bài viết mới khi có bài viết mới khi có bài viết mới ...</p>
        </form>
    )
}


function Bottom(){
    return(
        <form id ="form-bottom">
            <h1 id="header-bottom">BÀI VIẾT MỚI</h1>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </form>
    )
}

function Post(props) 
{
return (
    <div className="post-mini">
        <div id="post-style-mini">
        <img className="hinh" src="a.png" height="60" width="100"></img>   
            <div className="post-content-mini">
                <div>
        <p id="tieude-mini">Bài đăng 123</p>
        <p id="noidung-mini">Nội dung nội dung nội dung ...</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default SignUp;