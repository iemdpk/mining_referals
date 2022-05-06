import React from "react";
import styled from "styled-components";
export const Desktop1 = ({}) => {
  return (
    <DesktopRoot>
      <WhiteFlexColumn>
        <LogoAsset src={"https://file.rendit.io/n/gdwm7rOEgSEarc9Qi31y.svg"} />
        <Epmenu src={"https://file.rendit.io/n/mUPQo2dlLDRdOwPcASYX.svg"} />
        <Fluenthomefilled
          src={"https://file.rendit.io/n/pgKUQTi7LTwi2Uc42GcN.svg"}
        />
        <Fluenthomefilled
          src={"https://file.rendit.io/n/QwCsjMvpvp4XyIHDho6X.svg"}
        />
        <Fluenthomefilled
          src={"https://file.rendit.io/n/XsRXPaUJI0ZKDXZ01UUa.svg"}
        />
        <Fluenthomefilled
          src={"https://file.rendit.io/n/wowbqX1QfjuqVCKLxYY6.svg"}
        />
        <Fluenthomefilled
          src={"https://file.rendit.io/n/0PJYGcZhrHRnifG0xRm6.svg"}
        />
        <Mdiaccount src={"https://file.rendit.io/n/NRcWFDCf9tU9g0BtdW7z.svg"} />
        <Cilaccountlogout
          src={"https://file.rendit.io/n/5hbM9JvowSvIz7JYzvem.svg"}
        />
      </WhiteFlexColumn>
      <FlexColumn>
        <FlexRow>
          <NeonCarrotFlexRow>
            <Element25>
              <Text1>Current Value</Text1>
              <Text2>$12</Text2>
            </Element25>
          </NeonCarrotFlexRow>
          <Search src={"https://file.rendit.io/n/HRKkq9nJ5Rjs0cVX5sFI.svg"} />
          <Search src={"https://file.rendit.io/n/m84n4kJSokB1NkKW0zcU.svg"} />
          <FlexRow1 gap={"8px"}>
            <UnsplashWFsNyI
              src={"https://file.rendit.io/n/wk5faGiXG0on8O71wtiV.png"}
            />
            <Text3 width={"132px"}>Julia Michaels</Text3>
          </FlexRow1>
        </FlexRow>
        <Text4>Referrals</Text4>
        <FlexRow2 gap={"24px"}>
          <NavyBlueFlexRow>
            <FlexRow1 gap={"8px"}>
              <Cilaccountlogout
                src={"https://file.rendit.io/n/xyHz0UNeH0RvdkhjiGEE.svg"}
              />
              <Refer>Refer </Refer>
            </FlexRow1>
          </NavyBlueFlexRow>
          <FlexRow4>
            <Text5>How referral works?</Text5>
            <NeonCarrotFlexRow1>
              <FlexRow1 gap={"8px"}>
                <Text6>Total Referrals</Text6>
                <Text7>12</Text7>
              </FlexRow1>
            </NeonCarrotFlexRow1>
            <NavyBlueFlexRow1>
              <Text3 width={"140px"}>Rate of earning</Text3>
              <Coinsday1>
                10 coins/<Coinsday>day</Coinsday>
              </Coinsday1>
            </NavyBlueFlexRow1>
          </FlexRow4>
        </FlexRow2>
        <FlexRow2 gap={"0px"}>
          <Text9>Your Referrals</Text9>
          <Text10>Filter By</Text10>
          <FlexColumn1>
            <FlexRow1 gap={"4px"}>
              <Text11>active</Text11>
              <Cilaccountlogout
                src={"https://file.rendit.io/n/zn7gqcddbv4tiPQVcF7k.svg"}
              />
            </FlexRow1>
          </FlexColumn1>
        </FlexRow2>
        <FlexRow8>
          <Text12>#</Text12>
          <Text13>Name</Text13>
          <Text14 placeholder={"Login Streak"} />
          <Text15>Coins earned</Text15>
        </FlexRow8>
        <CadetBlueFlexRow margin={"0px 0px 22px 0px"}>
          <Text16>01</Text16>
          <Text17>Fredrick</Text17>
          <Text18>26</Text18>
          <Text19>126</Text19>
          <Text20>view Profile</Text20>
        </CadetBlueFlexRow>
        <CadetBlueFlexRow margin={"0px 0px 22px 0px"}>
          <Text16>02</Text16>
          <Text17>Fredrick</Text17>
          <Text18>24</Text18>
          <Text19>126</Text19>
          <Text20>view Profile</Text20>
        </CadetBlueFlexRow>
        <CadetBlueFlexRow margin={"0px 0px 22px 0px"}>
          <Text16>03</Text16>
          <Text17>Fredrick</Text17>
          <Text18>33</Text18>
          <Text19>126</Text19>
          <Text20>view Profile</Text20>
        </CadetBlueFlexRow>
        <CadetBlueFlexRow margin={"0px 0px 22px 0px"}>
          <Text16>04</Text16>
          <Text17>Fredrick</Text17>
          <Text18>24</Text18>
          <Text19>126</Text19>
          <Text20>view Profile</Text20>
        </CadetBlueFlexRow>
        <CadetBlueFlexRow margin={"0px 0px 22px 0px"}>
          <Text16>05</Text16>
          <Text17>Fredrick</Text17>
          <Text18>28</Text18>
          <Text19>126</Text19>
          <Text20>view Profile</Text20>
        </CadetBlueFlexRow>
        <CadetBlueFlexRow margin={"0px 0px 22px 0px"}>
          <Text16>06</Text16>
          <Text17>Fredrick</Text17>
          <Text18>27</Text18>
          <Text19>126</Text19>
          <Text20>view Profile</Text20>
        </CadetBlueFlexRow>
        <CadetBlueFlexRow margin={"0"}>
          <Text16>07</Text16>
          <Text17>Fredrick</Text17>
          <Text18>34</Text18>
          <Text19>126</Text19>
          <Text20>view Profile</Text20>
        </CadetBlueFlexRow>
      </FlexColumn>
    </DesktopRoot>
  );
};
const DesktopRoot = styled.div`
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: flex-start;
  gap: 48px;
  margin: auto;
  min-width: 1438px;
  align-items: center;
  padding: 1px;
`;
const WhiteFlexColumn = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  box-shadow: 0px 8px 24px 0px rgba(22, 22, 22, 0.04);
  width: 60px;
  height: 964px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 29px;
`;
const LogoAsset = styled.img`
  width: 56px;
  height: 56px;
  margin: 0px 0px 79px 0px;
`;
const Epmenu = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-start;
  margin: 0px 0px 35px 11px;
`;
const Mdiaccount = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 342px 0px;
`;
const FlexColumn = styled.div`
  width: 1245px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
  align-items: flex-start;
  padding: 26px 0px;
`;
const FlexRow = styled.div`
  width: 472px;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 24px 0px;
`;
const NeonCarrotFlexRow = styled.div`
  backdrop-filter: blur(9px);
  background-color: rgba(247, 148, 29, 0.5);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  padding: 8px 15px 8px 19px;
  margin: 0px 32px 0px 0px;
`;
const Element25 = styled.div`
  width: 134px;
  height: 32px;
  position: relative;
`;
const Text1 = styled.div`
  width: 108px;
  height: 32px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  position: absolute;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Text2 = styled.div`
  text-align: right;
  width: 30.5px;
  height: 32px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 700;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  position: absolute;
  left: 103.18px;
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;
const UnsplashWFsNyI = styled.img`
  width: 36px;
  height: 36px;
`;
const Text4 = styled.div`
  width: 148px;
  height: 32px;
  display: flex;
  font-size: 32px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 0px 48px 1px;
`;
const NavyBlueFlexRow = styled.div`
  width: 148px;
  background-color: #14a9ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 8px 0px;
`;
const Refer = styled.div`
  text-align: center;
  width: 84px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 700;
  color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  white-space: pre-wrap;
`;
const FlexRow4 = styled.div`
  width: 1052px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Text5 = styled.div`
  text-align: center;
  width: 212px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #14a9ff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 291px 0px 0px;
`;
const NeonCarrotFlexRow1 = styled.div`
  backdrop-filter: blur(9px);
  width: 212px;
  background-color: rgba(247, 148, 29, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 8px 0px;
  margin: 0px 26px 0px 0px;
`;
const Text6 = styled.div`
  width: 140px;
  height: 32px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Text7 = styled.div`
  text-align: center;
  width: 32px;
  height: 32px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 600;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const NavyBlueFlexRow1 = styled.div`
  backdrop-filter: blur(9px);
  background-color: rgba(20, 169, 255, 0.2);
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  border-radius: 8px;
  padding: 8px 12px 8px 15px;
`;
const Coinsday1 = styled.div`
  text-align: center;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 600;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Coinsday = styled.div`
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 600;
  text-transform: capitalize;
  color: #161616;
  display: contents;
`;
const Text9 = styled.div`
  width: 172px;
  height: 32px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 842px 0px 0px;
`;
const Text10 = styled.div`
  text-align: center;
  width: 72px;
  height: 24px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 15px 0px 0px;
`;
const FlexColumn1 = styled.div`
  border-width: 1px;
  border-color: #14a9ff;
  border-style: solid;
  height: 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 0px 7px;
`;
const Text11 = styled.div`
  text-align: center;
  width: 78px;
  height: 24px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #14a9ff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FlexRow8 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 25px;
  margin: 0px 0px 19px 0px;
`;
const Text12 = styled.div`
  text-align: center;
  width: 32px;
  height: 32px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 48px 0px 0px;
`;
const Text13 = styled.div`
  width: 77px;
  height: 32px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 331px 0px 0px;
`;
const Text14 = styled.input`
  text-align: center;
  width: 128px;
  height: 32px;
  display: inline-block;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 212px 0px 0px;
  padding: 0px;
  border-width: 0px;
  background: none;
  :: placeholder {
    color: #aaaaaa;
  }
  outline-width: 0px;
`;
const Text15 = styled.div`
  width: 144px;
  height: 32px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Fluenthomefilled = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 48px 0px;
`;
const Cilaccountlogout = styled.img`
  width: 24px;
  height: 24px;
`;
const Search = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 24px 0px 0px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Text3 = styled.div`
  height: 24px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: ${(props) => props.width};
`;
const FlexRow2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 1px;
  margin: 0px 0px 31px 0px;
  gap: ${(props) => props.gap};
`;
const CadetBlueFlexRow = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  box-shadow: 0px 1px 16px 0px rgba(22, 22, 22, 0.04);
  width: 1176px;
  background-color: rgba(170, 170, 170, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 15px 23px;
  margin: ${(props) => props.margin};
`;
const Text16 = styled.div`
  text-align: center;
  width: 32px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 48px 0px 0px;
`;
const Text17 = styled.div`
  width: 100px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 320px 0px 0px;
`;
const Text18 = styled.div`
  text-align: center;
  width: 72px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 290px 0px 0px;
`;
const Text19 = styled.div`
  text-align: center;
  width: 36px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 166px 0px 0px;
`;
const Text20 = styled.div`
  text-align: center;
  width: 112px;
  height: 32px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #14a9ff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
