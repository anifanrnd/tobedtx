<%@ Page Language="C#" AutoEventWireup="true" CodeFile="notice.aspx.cs" Inherits="tobedtx_Homepage_company" MasterPageFile="./MasterPage.master" %>

<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="ContentPlaceHolder1">
    <div class="notice">
        <div class="top">
            <div class="section_inner">
                <div class="tit">소식</div>
                <div class="sub">TOBE DTX의 새로운 소식을 알려드립니다.</div>
            </div>
        </div>
        <div class="section_inner">
            <section class="board">
                <div class="layout">
                    <div class="card" onclick="location.href='./notice_desc.aspx'">
                        <div class="img_wrap">
                            <img src="img/news.jpg" alt="뉴스이미지" />
                        </div>
                        <div class="text_wrap">
                            <div class="flex">
                                <div class="category">
                                    <span>공지사항</span>
                                </div>
                                <div class="date">2021-10-15</div>
                            </div>
                            <div class="title">(주)투비디티엑스 법인 설립 공고</div>
                            <div class="preview">
                                안녕하세요.
당사는 2021년 9월 법인회사 (주)투비디티엑스를 설립하였습니다.
국내 디지털 치료제 1호 기업으로서 향후 의료, 산업안전보건, 교육등 다양한 분야의 서비스를 제공할 예정이오니.
지속적인 성원과 관심을 부탁드리겠습니다.
문의가 필요하신 고객께서는 본사 홈페이지 https://www.tobedtx 에 방문하시어 요청해주십시오.
감사합니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pagenation">
                    <div class="btn btn_prev"></div>
                    <div class="btn_page">1</div>
                    <div class="btn_page">2</div>
                    <div class="btn_page">3</div>
                    <div class="btn_page">4</div>
                    <div class="btn_page">5</div>
                    <div class="btn btn_next"></div>
                </div>
            </section>
        </div>
    </div>
</asp:Content>
