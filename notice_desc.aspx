<%@ Page Language="C#" AutoEventWireup="true" CodeFile="notice_desc.aspx.cs" Inherits="tobedtx_Homepage_company" MasterPageFile="./MasterPage.master" %>

<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="ContentPlaceHolder1">
    <div class="notice desc">
        <div class="top">
            <div class="section_inner">
                <div class="category">
                    <span>공지사항</span>
                </div>
                <div class="tit">(주)투비디티엑스 법인 설립 공고</div>
                <div class="date">2021-10-15</div>
            </div>
        </div>
        <div class="section_inner">
            <section class="board_desc">
                <div class="img_wrap">
                    <img src="img/news.jpg" alt="뉴스이미지" />
                </div>
                <div class="text_wrap">
                                안녕하세요.<br /><br />
당사는 2021년 9월 법인회사 (주)투비디티엑스를 설립하였습니다.<br /><br />
국내 디지털 치료제 1호 기업으로서 향후 의료, 산업안전보건, 교육등 다양한 분야의 서비스를 제공할 예정이오니. 
지속적인 성원과 관심을 부탁드리겠습니다.<br /><br />
문의가 필요하신 고객께서는 본사 홈페이지 https://www.tobedtx 에 방문하시어 요청해주십시오.<br /><br />
감사합니다.<br />
                </div>
            </section>
            <div class="btn_back" onclick="location.href='/tobedtx/notice.aspx'">
                목록으로
            </div>
        </div>
    </div>
</asp:Content>
