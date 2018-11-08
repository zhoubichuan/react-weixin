import React, { Component } from "react";
import Header from "../../../../base-page/Header";
import "./index.css";

class MoneyBag extends Component {
  constructor() {
    super();
    this.state = {
      application: [
        {
          title: "腾讯服务",
          data: [
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "信用卡还款",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "微粒贷借款",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "手机充值",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "理财通",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "生活缴费",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "Q币充值",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "城市服务",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "腾讯公益",
              route: ""
            }
          ]
        },
        {
          title: "限时推广",
          data: [
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "腾讯王卡",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "拼多多",
              route: ""
            }
          ]
        },
        {
          title: "第三方服务",
          data: [
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "火车票机票",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "滴滴出行",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "京东优选",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "美团外卖",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "电影演出赛事",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "吃喝玩乐",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "酒店",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "膜拜单车",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "蘑菇街女装",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "唯品会特卖",
              route: ""
            },
            {
              ico: "http://www.cdhdky.com/images/ttt.jpg",
              title: "转转二手",
              route: ""
            }
          ]
        }
      ]
    };
  }
  handleClick = () => {
    window.history.go(0);
  };
  render() {
    return (
      <div component={"me-moneybag-component"}>
        <Header>
          <li onClick={this.handleClick}>我</li>
          <li>钱包</li>
          <li />
        </Header>
        <div className={"money-bag"}>
          <div className={"application"}>
            {this.state.application.map((item, index) => (
              <React.Fragment key={index}>
                <h3>{item.title}</h3>
                <ul>
                  {item.data.map((item2, index2) => (
                    <li key={index2}>
                      <img src={item2.ico} alt={""} />
                      <p>{item2.title}</p>
                    </li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default MoneyBag;