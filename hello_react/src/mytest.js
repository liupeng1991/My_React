import React, { Component } from 'react';
class Test extends Component {
    render() {
        return (
            <div className="App">
            <MyButton/>
            </div>
    );
    }
}
//ES6中根据点击事件来处理状态的改变，然后动态的刷新界面
class MyButton extends Component {
    /**
     * 构造方法
     * @param props
     */
    constructor(props){
        console.log("constructor");
        super(props);
        this.state = {
            loopsRemaining: this.props.liked
        };
    }

    /**
     * 返回状态对应的字符串
     * @returns {string}
     */
    getstate(){
        console.log("getstate");
        console.log(this.state.liked);
        return (this.state.liked ? '喜欢' : '不喜欢');
    }
    onclik(e){
        console.log(this.state.liked);
        console.log(!this.state.liked);
        return(this.setState({liked: !this.state.liked}));
    }

    /**
     * 返回XML格式的布局
     * @returns {XML}
     */
    render(){
        console.log("render");
        return(
            <div>
            <h1>{this.getstate()}</h1>
        <button  onClick={this.onclik.bind(this)}>点击事件</button>
        </div>
    );
    }
}
/*class Name extends Component{
    render(){
        return(
            <h1>名称测试：{this.props.name}</h1>
        );
    }
}
class Site extends Component{
    render(){
        return(
            <p>地址：<a href={this.props.site}>{this.props.site}</a></p>
        );
    }
}*/
export default Test;