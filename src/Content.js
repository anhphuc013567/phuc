import React from 'react';


class Content extends React.Component {
    render () {
        let style = {
           
        }
        return (
            <form id="form-left" style={style} name="contains">
                <div><Title/></div>
                <br></br>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

            </form>
        )
    }

}

function Title() 
{
    let style = {
        textAlign: "left",
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: -20
    }
    return <h1 id="head" style={style}>SERIES: REACT JS: TỪ CƠ BẢN ĐẾN NÂNG CAO</h1>;
}

function Post(props) 
{
return (
    <div className="post">
        <div id="post-style">
        <img className="hinh" src="a.png" height="160" width="300"></img>   
            <div className="post-content">
                <div>
        <p id="tieude">Bài đăng</p>
        <p id="noidung">Nội dung nội dung nội dung ...</p>
                </div>
        <button className="btn">READ MORE</button>
            </div>
        </div>
    </div>
)
}

export default Content;
