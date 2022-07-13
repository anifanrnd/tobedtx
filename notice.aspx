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
                    <div class="card" onclick="location.href='./notice_desc4.aspx'">
                        <div class="img_wrap">
                            <img src="img/news04.png" alt="뉴스이미지" />
                        </div>
                        <div class="text_wrap">
                            <div class="flex">
                                <div class="category">
                                    <span>뉴스</span>
                                </div>
                                <div class="date">2022-05-18</div>
                            </div>
                            <div class="title">투비디티엑스, ‘2022년 데이터바우처 지원사업’ 선정</div>
                            <div class="preview">투비소프트 자회사 투비디티엑스(대표 김동윤)가 한국데이터산업진흥원이 지원하는 ‘2022년 데이터바우처 지원사업’에 선정됐다고 18일 전했다.</div>
                        </div>
                    </div>
                    <div class="card" onclick="location.href='./notice_desc3.aspx'">
                        <div class="img_wrap">
                            <img src="img/news03.png" alt="뉴스이미지" />
                        </div>
                        <div class="text_wrap">
                            <div class="flex">
                                <div class="category">
                                    <span>뉴스</span>
                                </div>
                                <div class="date">2022-05-16</div>
                            </div>
                            <div class="title">투비소프트 자회사 투비디티엑스, ‘2022년 혁신형 고령친화기업 집중 육성 지원사업’ 선정</div>
                            <div class="preview">국내 UI/UX 플랫폼 1위 기업 투비소프트 자회사 투비디티엑스(대표 김동윤)가 세계에서 처음으로 ‘기립성저혈압’ 여부를 진단할 수 있는 ‘1080 올인원 헬스케어 플랫폼’ 개발을 본격화한다.</div>
                        </div>
                    </div>
                    <div class="card" onclick="location.href='./notice_desc2.aspx'">
                        <div class="img_wrap">
                            <img src="img/news02.png" alt="뉴스이미지" />
                        </div>
                        <div class="text_wrap">
                            <div class="flex">
                                <div class="category">
                                    <span>뉴스</span>
                                </div>
                                <div class="date">2022-03-23</div>
                            </div>
                            <div class="title">투비디티엑스, ‘연구소기업’ 등록…‘신성장’ 동력 마련</div>
                            <div class="preview">투비디티엑스가 연구소기업 등록에 성공하며 신성장 동력을 마련했다고 23일 밝혔다. 투비디티엑스는 기업용 UI·UX 전문기업 투비소프트와 고려대학교 기술지주회사 합작해 2021년 9월에 설립됐다.</div>
                        </div>
                    </div>
                    <div class="card" onclick="location.href='./notice_desc1.aspx'">
                        <div class="img_wrap">
                            <img src="img/news01.jpg" alt="뉴스이미지" />
                        </div>
                        <div class="text_wrap">
                            <div class="flex">
                                <div class="category">
                                    <span>뉴스</span>
                                </div>
                                <div class="date">2022-02-14</div>
                            </div>
                            <div class="title">고대산학협력단-투비디티엑스, 기술이전 협약 체결</div>
                            <div class="preview">고려대학교 산학협력단이 투비디티엑스와 '심박수 기반의 기계학습 알고리즘을 이용한 기립성 저혈압 선별시스템'에 대한 기술이전 협약을 체결했다.
                            </div>
                        </div>
                    </div>
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
