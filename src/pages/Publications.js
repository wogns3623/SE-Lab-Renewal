import React, { Component } from "react";

import PageTamplate from "component/template/PageTemplate.js";
import ModifiedTap from "component/publications/ModifiedTap.js";

import "style/Publications.css";

class Publications extends Component {
  state = {
    tabList: [
      { name: "All" },
      { name: "International Conference" },
      { name: "International Journal" },
      { name: "Domestic Conference" },
      { name: "Domestic Journal" }
    ],
    ALL: [
      {
        name: "International Conference",
        list: [
          {
            title:
              'Zhiqiang Wu, Xin Chen and Scott Uk-Jin Lee, "Identifying Latent Android Malware from Application\'s Description using LSTM," In Proc. International Conference on Information, System and Convergence Applications, 2019, pp.40-42.',
            address:
              "https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Zhiqiang1.pdf"
          },
          {
            title:
              'Mohsin Javaid Siddiqui, Xintao Li, Isma Farah Siddiqui, Asad Abbas and Scott Uk-Jin Lee, "Comparative Analysis of GUI Development for Android Application by utilizing MDA Approach," In Proc. International workshop on convergence information technology 2017, 2017, pp.151-154.',
            address:
              "https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Mohsin0.pdf"
          }
        ]
      },
      {
        name: "International Journal",
        list: [
          {
            title:
              'Isma Farah Siddiqui, Nawab Muhammad Faseeh Qureshi, Muhammad Akram Shaikh, Bhawani Shankar Chowdhry, Asad Abbas, Ali Kashif Bashir and Scott Uk-Jin Lee, "Stuck-at Fault Analytics of IoT Devices Using Knowledge-based Data Processing Strategy in Smart Grid," J. Wireless Personal Communications, vol. 2018, pp. 1-15, Apr. 2018.',
            address:
              "https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_Isma4.pdf"
          },
          {
            title:
              'Asad Abbas, Isma Farah Siddqui, Scott Uk-Jin Lee, Ali Kashif Bashir, Waleed Ejaz and Nawab Muhammad Faseeh Qureshi, "Multi-Objective Optimum Solutions for IoT-Based Feature Models of Software Product Line," J. IEEE Access, vol. 6, pp. 12228-12239, Mar. 2018.',
            address:
              "https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_Asad5.pdf"
          }
        ]
      },
      {
        name: "Domestic Conference",
        list: [
          {
            title:
              'Zhiqiang Wu, Xin Chen and Scott Uk-Jin Lee, "Permissions based Automatic Android Malware Repair using Long Short Term Memory," In Proc. 한국컴퓨터정보학회 동계학술대회, 2019, pp.387-388.',
            address:
              "https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Zhiqiang2.pdf"
          },
          {
            title:
              'YongTaek Oh and Scott Uk-Jin Lee, "XACML 정책 작성시 요청에 따른 효과적인 정책 평가 요인 수집 방법," In Proc. Korea Software Congress 2017, 2017, pp.443-445.',
            address:
              "https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_YongTaek0.pdf"
          }
        ]
      },
      {
        name: "Domestic Journal",
        list: [
          {
            title:
              'Youn-geun Ahn, Gichan Lee and Scott Uk-Jin Lee, "Effective Methodology for Collecting Contextual Factors and Information that Affects The XACML Policy Evaluation," J. KIISE Transactions on Computing Practices, vol. 24, no. 2, pp. 82-87, Feb. 2018.',
            address:
              "https://selab.hanyang.ac.kr/publications/papers/Domestic_Journal/[DJ]_Youn-geun0.pdf"
          },
          {
            title:
              'Isma Farah Siddiqui and Scott Uk-Jin Lee, "Access Control as a Service for Information Protection in Semantic Web based Smart Environment," J. Journal of Korean Society for Internet Information, vol. 17, no. 5, pp. 9-16, Oct. 2016.',
            address:
              "https://selab.hanyang.ac.kr/publications/papers/Domestic_Journal/[DJ]_Isma0.pdf"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <PageTamplate className="Publications">
        <div>
          <h1>PUBLICATIONS</h1>
          <ModifiedTap
            tabList={this.state.tabList}
            contents={this.state.ALL}
          ></ModifiedTap>
        </div>
      </PageTamplate>
    );
  }
}

export default Publications;
