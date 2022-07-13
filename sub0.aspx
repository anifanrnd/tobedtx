<%@ Page Language="C#" AutoEventWireup="true" CodeFile="sub0.aspx.cs" Inherits="tobedtx_Homepage_company" MasterPageFile="./MasterPage.master" %>

<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="ContentPlaceHolder1">
    <div class="page_wrapper sub0">
        <div class="section_inner">
            <div class="back_border">
                <div class="grid">
                    <section class="content2">
                        <div class="layout_l">
                            <div class="tit">최소한의 생체신호(심박변이)만으로 기립성 저혈압을 진단하는 알고리즘</div>
                        </div>
                        <div class="layout_r">
                            <div class="desc">
                                <p>
                                    - 고려대학교의료원 신경과에서 663명의 환자 데이터를 기반으로 학습
                                </p>
                                <div class="layout">
                                    <div class="img_ku">
                                        <img src="img/logo_ku.png" alt="고려대학교의료원" />
                                    </div>
                                    <div class="img_certi">
                                        <img src="img/certi.jpg" alt="특허증" />
                                    </div>
                                </div>
                                <div class="thesis">
                                    <img src="img/thesis0.png" alt="논문자료0" />
                                    <p>Jung Bin Kim, Hayom Kim, Joo Hye Sung, Seol-Hee Baek, Byung-Jo Kim. Heart-Rate-Based Machine-Learning Algorithms for Screening Orthostatic Hypotension. J Clin Neurol. 2020 Jul; 16(3): 448–454.</p>
                                </div>
                                <div class="thesis">
                                    <img src="img/thesis1.png" alt="논문자료1" />
                                    <p>Jung Bin Kim, Soonwoong Hong, Jin-Woo Park, Dong-Hyuk Cho, Ki-Jong Park, Byung-Jo Kim. Utility of corrected QT interval in orthostatic intolerance. PLoS One. 2014 Sep 2;9(9):e106417..</p>
                                </div>
                            </div>

                        </div>
                    </section>
                    <section class="content2_1">
                        <div class="layout_l">
                            <img src="img/process.png" alt="기립성 저혈압 판단 알고리즘" class="img_row"/>
                            <img src="img/process_c.png" alt="기립성 저혈압 판단 알고리즘"  class="img_col"/>
                        </div>
                        <div class="layout_r">
                            <p>사용자의<br />특정한 호흡 유도</p>
                            <p>심박수 변이<br />데이터 수집</p>
                            <p>최적화된 AI 알고리즘이 <br />위험도 판단</p>
                            <p>사용자에게<br />낙상 위험도 알림</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
