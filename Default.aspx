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
    </div>
</asp:Content>
