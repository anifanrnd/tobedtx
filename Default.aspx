<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="tobedtx_Homepage_Default" MasterPageFile="./MasterPage.master" %>

<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="ContentPlaceHolder1">
    <div class="wrapper">
        <div id="visual" class="visual">
            <h2 class="blind">tobedtx</h2>
            <div class="container">
                <div class="gradient"></div>
                <div class="slogan_wrapper">
                    <h3 class="slogan">
                        <span>가족을 건강하게, 일상을 행복하게,</span>
                        <p>1080 올인원 디지털 헬스케어</p>
                    </h3>
                </div>
            </div>
        </div>
        <section id="mission" class="mission">
            <div class="section_inner layout_box">
                <div class="scroll_box">
                    <h2 class="section_title">우리의 미션과 가치</h2>
                    <div class="layout">
                        <div class="box box_ani">
                            <div class="subtit">Mission</div>
                            <div class="content">
                                <img src="/img/mission.png" alt="tobeDtx mission" />
                                <p>의료 IT 기술로<br />우리의 삶을 건강하고 풍요롭게 한다.</p>
                            </div>
                        </div>
                        <div class="box value">
                            <div class="subtit subtit_ani">Value</div>
                            <div class="column">
                                <div class="group group_ani">
                                    <img src="/img/value0.png" alt="value1" />
                                    <p>전문의료기관의<br />검증된 의료 기술</p>
                                </div>
                                <div class="group group_ani">
                                    <img src="/img/value1.png" alt="value2" />
                                    <p>국내 1위<br />UX/UX 기술</p>
                                </div>
                                <div class="group group_ani">
                                    <img src="/img/value2.png" alt="value3" />
                                    <p>혁신적인 <br />AI 데이터 기술</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="healthCare" class="healthCare">
            <div class="section_inner">
                <h2 class="section_title">당신에게 꼭 필요한 헬스케어만,</h2>
                <div class="section_subtit">생체 신호 모니터링, 피드백과 치료가 가능한 기기, 질환별 임상학적 근거기반 AI를 통해<br />능동적인 건강 관리와 다양한 디지털 치료를 경험해보세요. </div>
                <div class="layout">
                    <div class="care_item side">
                        <span class="left">스트레스 완화</span>
                        <span class="left">혈관성 치매</span>
                        <span class="left">ADHD</span>
                    </div>
                    <div class="care_item">
                        <img src="img/app0.png" alt="기립성저혈압 진단앱" />
                        <div class="button material-bubble"><span class="init">기립성저혈압</span><span class="hover">더 알아보기</span></div>
                    </div>
                    <div class="care_item side">
                        <span class="right">안과 검사</span>
                        <span class="right">난독증</span>
                        <span class="right">우울증</span>
                        <span class="right">뇌질환</span>
                    </div>
                </div>
            </div>
        </section>
        <section id="industry" class="industry">
            <div class="section_inner">
                <h2 class="section_title">근로자 안전사고 예방도<br />스마트하게</h2>
                <div class="section_subtit">작업자의 낙상위험, 열 스트레스, 신체부하 경보를 일괄적으로 관리하고<br />
휴식 지시, 사고 발생 시의 신속한 대응으로 안전관리의 새로운 기준을 제공합니다.</div>
                <div class="layout">
                    <div class="worker">
                        <img src="/img/worker0.png" alt="작업자상태:휴식" />
                    </div>
                    <div class="state">
                        <div>
                            <dl class="risk">
                                <dt>안전위험도</dt>
                                <dd>
                                    <span class="percent">10</span>%
                                </dd>
                            </dl>
                            <p class="message"><span>지금은 바로<br />작업하셔도 됩니다.</span></p>
                        </div>
                        <div class="button material-bubble"><span>왜 필요한가요?</span></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</asp:Content>
